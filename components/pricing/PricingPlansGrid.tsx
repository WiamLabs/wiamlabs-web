// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import type { PricingPlan, Product } from "@/lib/products";
import styles from "@/app/[product]/pricing/page.module.css";

type Props = {
  product: Product;
  plans: PricingPlan[];
};

export function PricingPlansGrid({ product, plans }: Props) {
  return (
    <div className={styles.plans}>
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`${styles.plan} ${plan.highlighted ? styles.highlighted : ""}`}
        >
          {plan.highlighted && <span className={styles.badge}>Most popular</span>}
          <h3 className={styles.planName}>{plan.name}</h3>
          <p className={styles.planPrice}>{plan.price}</p>
          {plan.billingNote && <p className={styles.billingNote}>{plan.billingNote}</p>}
          <p className={styles.planDescription}>{plan.description}</p>
          <ul className={styles.planFeatures}>
            {plan.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          {plan.checkoutPlanKey ? (
            <CheckoutButton
              productSlug={product.slug}
              planKey={plan.checkoutPlanKey}
              ctaLabel={plan.ctaLabel}
              highlighted={plan.highlighted}
            />
          ) : (
            <Button
              href={plan.ctaHref || product.externalUrl}
              external
              variant={plan.highlighted ? "primary" : "outline"}
              fullWidth
            >
              {plan.ctaLabel}
            </Button>
          )}
        </Card>
      ))}
    </div>
  );
}
