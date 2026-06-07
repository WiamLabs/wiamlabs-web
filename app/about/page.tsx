// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { FOUNDER_NAME } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "About",
  description:
    "WiamLabs is a Ghana-based technology company founded by Martin. Learn our mission, timeline, and values.",
  path: "/about",
});

const TIMELINE = [
  {
    year: "WiamLabs",
    text: "Martin establishes WiamLabs as the parent house for African digital products.",
  },
  {
    year: "WiamApp",
    text: "Africa's trusted services marketplace — customers book verified workers in their city.",
  },
  {
    year: "WiamTrade",
    text: "Non-custodial trading on Telegram — practice on live charts, go live when ready.",
  },
];

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Company"
        title="About WiamLabs"
        subtitle="A Ghana-based technology company building products Africans can trust."
      />

      <section className={styles.founder}>
        <div className={styles.avatar} aria-hidden>
          M
        </div>
        <div>
          <h2>{FOUNDER_NAME}</h2>
          <p className={styles.role}>Founder, WiamLabs</p>
          <p>
            Martin founded WiamLabs to build serious digital infrastructure for Africa — not
            demos, but products people rely on every day. From booking a verified electrician on
            WiamApp to practicing trades on live markets with WiamTrade, the goal is the same:
            trust, clarity, and craft.
          </p>
          <p>
            WiamLabs is the company. WiamApp and WiamTrade are the first products. More will ship
            under this house as Africa&apos;s digital economy grows.
          </p>
        </div>
      </section>

      <section className={styles.timeline}>
        <h2>Our journey</h2>
        <div className={styles.steps}>
          {TIMELINE.map((item) => (
            <article key={item.year} className={styles.step}>
              <strong>{item.year}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.values}>
        <h2>Values</h2>
        <ul>
          <li>Integrity — we say what we mean on product surfaces and in support.</li>
          <li>Africa-first — designed for real networks, payments, and cities on the continent.</li>
          <li>User ownership — especially in trading: your keys, your funds, your control.</li>
        </ul>
      </section>

      <div className={styles.cta}>
        <Button href="/contact">Contact</Button>
        <Button href="/products" variant="outline">
          Our products
        </Button>
      </div>
    </div>
  );
}
