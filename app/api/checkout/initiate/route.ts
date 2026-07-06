// © 2026 WiamLabs. All rights reserved.
//
// app/api/checkout/initiate/route.ts — the ONE place a "Pay" click on
// any /[product]/pricing page actually starts a Paystack charge.
//
// This is a server-to-server call (this Next.js server calling each
// product's own backend), never the browser calling the product
// backend directly — so no CORS changes are needed anywhere, and the
// shared Paystack secret key never has to be exposed to two different
// services' browser-facing code.
//
// Each product's backend still owns its own real pricing data
// (subscription_config table, etc.) and still does the actual
// Paystack initialize call — this route only identifies WHICH
// product's endpoint to call and forwards the result back.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Add one line here per product as its own "checkout by email"
// endpoint is built. See docs/CHECKOUT_SPEC.md for what that
// endpoint must accept/return to plug in here correctly.
const CHECKOUT_ENDPOINTS: Record<string, string | undefined> = {
  wiamapp: process.env.WIAMAPP_CHECKOUT_URL,
  // wiampass: process.env.WIAMPASS_CHECKOUT_URL,   // not built yet on WiamPass's side
  // wiamtrade: process.env.WIAMTRADE_CHECKOUT_URL, // not built yet on WiamTrade's side
};

export async function POST(req: NextRequest) {
  let body: { app?: string; planKey?: string; email?: string; currency?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const { app, planKey, email, currency = "GHS" } = body;

  if (!app || !planKey || !email) {
    return NextResponse.json(
      { success: false, error: "app, planKey, and email are all required." },
      { status: 400 }
    );
  }

  const endpoint = CHECKOUT_ENDPOINTS[app];
  if (!endpoint) {
    return NextResponse.json(
      { success: false, error: `Online checkout for "${app}" isn't set up yet — check with the team.` },
      { status: 501 }
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planKey, email, currency }),
    });
    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("Checkout initiate error:", (err as Error).message);
    return NextResponse.json(
      { success: false, error: "Could not reach the payment service. Try again shortly." },
      { status: 502 }
    );
  }
}
