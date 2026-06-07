// © 2026 WiamLabs. All rights reserved.

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

type Env = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

const rateStore = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

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

function checkRateLimit(key: string) {
  const now = Date.now();
  const entry = rateStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true as const };
  }

  if (entry.count >= MAX_REQUESTS) {
    return {
      ok: false as const,
      retryAfterSec: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count += 1;
  return { ok: true as const };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const ip =
    context.request.headers.get("cf-connecting-ip") ||
    context.request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return json(
      { error: "Too many requests. Please try again later." },
      429,
      { "Retry-After": String(limit.retryAfterSec ?? 3600) }
    );
  }

  let body: ContactBody;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  if (body.website) {
    return json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 120) {
    return json({ error: "Please enter a valid name." }, 400);
  }
  if (!isValidEmail(email) || email.length > 200) {
    return json({ error: "Please enter a valid email." }, 400);
  }
  if (!subject) {
    return json({ error: "Please select a subject." }, 400);
  }
  if (message.length < 10 || message.length > 5000) {
    return json({ error: "Message must be between 10 and 5000 characters." }, 400);
  }

  const to = context.env.CONTACT_TO_EMAIL || "hello@wiamlabs.com";
  const from = context.env.CONTACT_FROM_EMAIL || "hello@wiamlabs.com";
  const apiKey = context.env.RESEND_API_KEY;

  if (!apiKey) {
    return json(
      {
        error:
          "Contact form is not configured yet. Please email hello@wiamlabs.com directly.",
      },
      503
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
      from: `WiamLabs <${from}>`,
      to: [to],
      reply_to: email,
      subject: `[WiamLabs Contact] ${subject}`,
      html,
    }),
  });

  if (!res.ok) {
    return json({ error: "Failed to send email. Try again later." }, 502);
  }

  return json({ ok: true });
};
