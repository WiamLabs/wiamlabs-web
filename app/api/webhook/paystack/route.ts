// © 2026 WiamLabs. All rights reserved.
//
// app/api/webhook/paystack/route.ts — the ONE webhook URL the shared
// WiamLabs Paystack account is limited to. Paystack only allows a
// single webhook URL per account, so every product (WiamPass, WiamApp,
// and whatever comes next) has its events routed through here instead
// of registering its own URL directly with Paystack.
//
// This replaces the standalone wiamlabs-payments-router Render service
// — same exact logic, just running as a Vercel serverless function on
// a site that's already deployed, so it costs nothing extra.
//
// How routing works:
//   1. Every product tags its own transactions with metadata.app when
//      it INITIATES a payment (e.g. { app: 'wiamapp', ... }).
//   2. This route reads that tag from the incoming webhook event and
//      forwards the event, unchanged, to that product's own existing
//      webhook endpoint.
//   3. WiamPass predates this convention, so anything with NO
//      recognized app tag falls back to WiamPass on purpose — it is
//      the currently active, revenue-generating product, and a
//      missing tag must never mean a dropped payment event.
//
// No product's own webhook code needs to change. Each one keeps
// verifying the Paystack signature itself, exactly as it does today
// — this route does the same verification first, purely as a second
// layer, so a forged request never reaches either product.

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "";

// Add one line here per product as it comes online. Key = the
// metadata.app value that product tags its own transactions with.
const ROUTES: Record<string, string | undefined> = {
  wiamapp: process.env.WIAMAPP_WEBHOOK_URL,
  wiampass: process.env.WIAMPASS_WEBHOOK_URL,
};
const DEFAULT_ROUTE = "wiampass"; // safety net — see comment above

export async function POST(req: NextRequest) {
  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // 1. Verify this really came from Paystack before forwarding
  //    anywhere. Same secret as before — the ONE shared account key.
  const hash = crypto
    .createHmac("sha512", PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest("hex");

  const signature = req.headers.get("x-paystack-signature");
  if (hash !== signature) {
    console.error("Rejected webhook: invalid Paystack signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: { event?: string; data?: { metadata?: { app?: string } } };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 2. Decide which product this event belongs to
  const appTag = event?.data?.metadata?.app;
  const targetKey = appTag && ROUTES[appTag] ? appTag : DEFAULT_ROUTE;
  const targetUrl = ROUTES[targetKey];

  if (!targetUrl) {
    console.error(`No webhook URL configured for "${targetKey}" — check env vars`);
    // Still acknowledge Paystack so it doesn't retry forever — this
    // is a config problem on our end, not something a retry fixes.
    return NextResponse.json({ received: true, warning: "no route configured" });
  }

  // 3. Forward the event exactly as received, signature header
  //    included, so the receiving product's own signature check
  //    still passes.
  try {
    const forwardRes = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-paystack-signature": signature ?? "",
      },
      body: rawBody,
    });

    console.log(`Routed ${event.event} (app=${appTag || "untagged"}) -> ${targetKey}: ${forwardRes.status}`);

    // 4. Mirror the downstream status back to Paystack, so Paystack's
    //    own retry logic keeps working correctly through this proxy.
    return NextResponse.json(
      { received: true, routedTo: targetKey },
      { status: forwardRes.status }
    );
  } catch (err) {
    console.error("Router forwarding error:", (err as Error).message);
    return NextResponse.json({ error: "Forwarding failed" }, { status: 500 });
  }
}
