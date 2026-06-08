# WiamLabs Website

© 2026 WiamLabs. All rights reserved.

Public company site for **wiamlabs.com** — built from `WIAMLABS_WEBSITE_MASTER_PLAN.md`.

**Hosting:** [Vercel Hobby](https://vercel.com/docs/plans/hobby) (free).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Example |
|----------|---------|
| `BREVO_API_KEY` | From [Brevo](https://app.brevo.com) → SMTP & API → API keys |
| `CONTACT_TO_EMAIL` | `martin@wiamlabs.com` (inbox you read) |
| `CONTACT_FROM_EMAIL` | `hello@wiamlabs.com` (public sender) |
| `CONTACT_FROM_NAME` | `WiamLabs` |

### WiamLabs email (Brevo — free, own domain)

Resend free = 1 domain (already used by WiamApp). **WiamLabs uses Brevo** instead:

1. Sign up at [brevo.com](https://www.brevo.com) (free, no card)
2. **Senders & IPs → Domains** → add `wiamlabs.com`
3. Add DNS records in **Cloudflare** (DKIM, etc.) until Brevo shows **Verified**
4. **SMTP & API → API keys** → create key → paste as `BREVO_API_KEY` in Vercel
5. **Cloudflare Email Routing** (free): forward `hello@wiamlabs.com` → your personal inbox so you receive messages

Free limit: **300 emails/day** — more than enough for a company contact form.
| `NEXT_PUBLIC_SITE_URL` | `https://wiamlabs.com` |
| `NEXT_PUBLIC_WIAMAPP_URL` | `https://wiamapp.com` |
| `NEXT_PUBLIC_WIAMTRADE_URL` | `https://wiamtrade.wiamlabs.com` |

## Deploy on Vercel (free)

1. Go to [vercel.com](https://vercel.com) → sign in with GitHub.
2. **Add New Project** → import `WiamLabs/wiamlabs-web`.
3. Framework: Next.js (auto-detected). Click **Deploy**.
4. **Settings → Environment Variables** — add vars from table above.
5. **Settings → Domains** → add `wiamlabs.com` and `www.wiamlabs.com`.
6. In **Cloudflare DNS** (where you bought the domain), add the records Vercel shows:
   - Usually `A` record → `76.76.21.21` and `CNAME` `www` → `cname.vercel-dns.com`

SSL is automatic on both Vercel and Cloudflare.

## Phase 1 launch checklist (Martin)

- [ ] Site live at `https://wiamlabs.com`
- [ ] Contact form sends email (Resend + Vercel env vars)
- [ ] `wiamtrade.wiamlabs.com` points to WiamTrade mini app (Cloudflare CNAME + Render)
- [ ] [Google Search Console](https://search.google.com/search-console) → add property → submit `https://wiamlabs.com/sitemap.xml`
- [ ] [Bing Webmaster](https://www.bing.com/webmasters) → same sitemap

## Stack

Next.js 15 · React 19 · Vercel Hobby (free)

## Founder

Martin — WiamLabs
