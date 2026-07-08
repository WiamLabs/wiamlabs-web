"use client";
// © 2026 WiamLabs. All rights reserved.
//
// The interactive half of a pricing plan card — only used for plans
// that actually charge money (have a checkoutPlanKey). Free and
// Contact-sales plans never render this; they just link out normally.

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "@/app/[product]/pricing/page.module.css";

type Props = {
  productSlug: string;
  planKey: string;
  ctaLabel: string;
  highlighted?: boolean;
};

export function CheckoutButton({ productSlug, planKey, ctaLabel, highlighted }: Props) {
  const [showEmailField, setShowEmailField] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setError("");
    if (!email || !email.includes("@")) {
      setError("Enter a valid email — the one on your account.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ app: productSlug, planKey, email }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not start checkout.");
      }
      window.location.href = data.authorizationUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  if (!showEmailField) {
    return (
      <Button
        onClick={() => setShowEmailField(true)}
        variant={highlighted ? "primary" : "outline"}
        fullWidth
      >
        {ctaLabel}
      </Button>
    );
  }

  const isBusinessPlan = planKey.includes("_biz");
  const isWiamPassPlan = productSlug === "wiampass";

  return (
    <div className={styles.checkoutBox}>
      <input
        type="email"
        placeholder="Email on your account"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.checkoutInput}
        disabled={loading}
      />
      {error && <p className={styles.checkoutError}>{error}</p>}
      <Button onClick={startCheckout} variant={highlighted ? "primary" : "outline"} fullWidth>
        {loading ? "Starting checkout…" : "Continue to payment"}
      </Button>
      <p className={styles.checkoutHint}>
        Don&rsquo;t have an account yet?{" "}
        <a
          href={
            isBusinessPlan
              ? 'https://wiamapp.com/business/apply'
              : isWiamPassPlan
                ? 'https://wiampass.com/organizer'
                : `https://${productSlug}.com/register`
          }
          target="_blank"
          rel="noreferrer"
        >
          {isBusinessPlan ? 'Apply for Business' : isWiamPassPlan ? 'Apply as organizer' : 'Register first'}
        </a>
        , then come back.
      </p>
    </div>
  );
}
