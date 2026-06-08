// © 2026 WiamLabs. All rights reserved.

type SendContactOptions = {
  to: string;
  fromEmail: string;
  fromName: string;
  replyTo: string;
  subject: string;
  html: string;
};

type SendResult = { ok: true } | { ok: false; error: string };

export async function sendContactEmail(options: SendContactOptions): Promise<SendResult> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      error:
        "Contact form is not configured yet. Please email hello@wiamlabs.com directly.",
    };
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: options.fromName, email: options.fromEmail },
      to: [{ email: options.to }],
      replyTo: { email: options.replyTo },
      subject: options.subject,
      htmlContent: options.html,
    }),
  });

  if (!res.ok) {
    let message = "Failed to send email. Try again later.";
    try {
      const err = (await res.json()) as { message?: string };
      const msg = err.message || "";
      console.error("[contact] Brevo error:", res.status, msg);

      if (/not verified|authenticate|sender/i.test(msg)) {
        message =
          "Sender not verified in Brevo. Add and verify wiamlabs.com under Senders & IPs → Domains.";
      } else if (msg) {
        message = msg;
      }
    } catch {
      console.error("[contact] Brevo error:", res.status);
    }
    return { ok: false, error: message };
  }

  return { ok: true };
}
