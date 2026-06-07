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
| `RESEND_API_KEY` | Same Resend key as WiamApp (`re_...`) |
| `CONTACT_TO_EMAIL` | `founder@wiamapp.com` |
| `CONTACT_FROM_EMAIL` | `hello@wiamapp.com` (Resend free = 1 domain only) |

**Resend note:** Free plan allows **one domain** (`wiamapp.com`). The form sends as **WiamLabs &lt;hello@wiamapp.com&gt;** — no $20 upgrade needed.
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
