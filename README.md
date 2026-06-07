# WiamLabs Website

© 2026 WiamLabs. All rights reserved.

Public company site for **wiamlabs.com** — built from `WIAMLABS_WEBSITE_MASTER_PLAN.md`.

**Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/) (free tier).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact form API runs on Cloudflare Pages Functions in production. Locally, form submit may show a config message until deployed.

## Environment (Cloudflare Pages dashboard)

Set under **Workers & Pages → your project → Settings → Environment variables**:

| Variable | Example |
|----------|---------|
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | `hello@wiamlabs.com` |
| `CONTACT_FROM_EMAIL` | `hello@wiamlabs.com` |

Optional (SEO canonical URLs):

| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://wiamlabs.com` |
| `NEXT_PUBLIC_WIAMAPP_URL` | `https://wiamapp.com` |
| `NEXT_PUBLIC_WIAMTRADE_URL` | `https://t.me/WiamTradeBot` |

## Deploy on Cloudflare Pages (free)

1. Push this repo to GitHub (`github.com/WiamLabs/wiamlabs-web`).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo and use these build settings:

   | Setting | Value |
   |---------|-------|
   | Framework preset | `Next.js (Static HTML Export)` or None |
   | Build command | `npm run build` |
   | Build output directory | `out` |

4. Add environment variables (table above).
5. **Custom domains** → add `wiamlabs.com` (and `www.wiamlabs.com` if you use it).
6. **Redirect www → apex** (recommended): Rules → Redirect Rules →  
   `www.wiamlabs.com/*` → `https://wiamlabs.com/$1` (301).

Domain is already on Cloudflare — SSL is automatic.

## Founder

Martin — WiamLabs
