# Checkout-by-email endpoint spec

Any product that wants its "Pay" button on `wiamlabs.com/[product]/pricing`
to actually charge someone needs exactly one endpoint on its own backend
matching this contract. WiamApp's is already built —
`POST /api/payments/paystack/subscribe-by-email` in the WiamApp repo.

## Why "by email" and not a login session

The person clicking Pay is on wiamlabs.com, not logged into your product.
The only reliable link between "the person paying" and "the account to
upgrade" is the email they type at the payment step — same pattern
Stripe Checkout links use. Your endpoint looks the account up by email
itself; wiamlabs.com never needs to know your login system at all.

## Request (from wiamlabs.com, server-to-server)

```
POST https://your-backend.example.com/api/payments/paystack/subscribe-by-email
Content-Type: application/json

{
  "planKey": "worker_pro_monthly",
  "email": "someone@example.com",
  "currency": "GHS"
}
```

## What your endpoint must do

1. Look up an account by `email` in your own database.
   - Not found → `404` with a clear message telling them to register first.
2. Look up the real price for `planKey` from your own source of truth
   (never trust a price sent from wiamlabs.com — it doesn't send one).
3. Convert to `currency` if your prices are stored in USD — a standard
   Ghana/Nigeria Paystack account can't charge in USD directly.
4. Call Paystack `/transaction/initialize` yourself, with:
   - `metadata.app` set to your product's key (`"wiamapp"`, `"wiampass"`, etc.)
     — this is what the shared webhook router uses to send the eventual
     payment confirmation back to YOUR webhook, not anyone else's.
   - `metadata.user_id` (or however you identify the looked-up account)
     so your own webhook handler knows who to activate.
5. Return the result.

## Response

Success:
```json
{ "success": true, "authorizationUrl": "https://checkout.paystack.com/...", "reference": "..." }
```

Failure:
```json
{ "success": false, "error": "human-readable reason" }
```

## Then add yourself to wiamlabs-web

1. Add `WIAMPASS_CHECKOUT_URL` (or `WIAMTRADE_CHECKOUT_URL`) to
   `wiamlabs-web`'s environment variables — your endpoint's real URL
2. Uncomment your product's line in `CHECKOUT_ENDPOINTS` inside
   `app/api/checkout/initiate/route.ts`

Nothing else changes — the pricing page UI, the webhook router, and the
Paystack account are already shared and already work once this exists.
