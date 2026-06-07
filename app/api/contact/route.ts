// © 2026 WiamLabs. All rights reserved.

import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec ?? 3600) } }
    );
  }

  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  if (!isValidEmail(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!subject) {
    return NextResponse.json({ error: "Please select a subject." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "founder@wiamapp.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "hello@wiamlabs.com";
  const from =
    process.env.CONTACT_FROM_ADDRESS || `WiamLabs <${fromEmail}>`;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Please email hello@wiamlabs.com directly.",
      },
      { status: 503 }
    );
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#666;font-size:12px;">© 2026 WiamLabs. All rights reserved.</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[WiamLabs Contact] ${subject}`,
      html,
    }),
  });

  if (!res.ok) {
    let userMessage = "Failed to send email. Try again later.";
    try {
      const err = (await res.json()) as { message?: string };
      const msg = err.message || "";
      console.error("[contact] Resend error:", res.status, msg);

      if (/not verified|verify your domain/i.test(msg)) {
        userMessage =
          "Sender domain not verified in Resend yet. Finish wiamlabs.com DNS in Resend, then redeploy.";
      } else if (/only send testing emails/i.test(msg)) {
        userMessage =
          "Resend is in test mode. Verify wiamlabs.com in Resend Domains first.";
      } else if (/invalid from/i.test(msg)) {
        userMessage =
          "Invalid sender address. Set CONTACT_FROM_EMAIL to an address on your verified Resend domain.";
      } else if (msg) {
        userMessage = msg;
      }
    } catch {
      console.error("[contact] Resend error:", res.status);
    }

    return NextResponse.json({ error: userMessage }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
