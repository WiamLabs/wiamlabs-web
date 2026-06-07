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
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | `founder@wiamapp.com` (inbox you read) |
| `CONTACT_FROM_EMAIL` | `hello@wiamlabs.com` (must be verified in Resend) |
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

## Founder

Martin — WiamLabs
