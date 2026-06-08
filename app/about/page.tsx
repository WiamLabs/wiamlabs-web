// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "About",
  description:
    "WiamLabs is a Ghana-based technology company behind WiamApp and WiamTrade.",
  path: "/about",
});

const TIMELINE = [
  {
    year: "WiamLabs",
    text: "The parent company for digital products built in Ghana.",
  },
  {
    year: "WiamApp",
    text: "Customers book verified workers — electricians, plumbers, cleaners, and more — in their city.",
  },
  {
    year: "WiamTrade",
    text: "Practice on live charts inside Telegram. Go live only when you connect your own exchange.",
  },
];

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <PageHeader
        eyebrow="Company"
        title="About WiamLabs"
        subtitle="A small team in Ghana shipping WiamApp and WiamTrade."
      />

      <section className={styles.story}>
        <h2>What we do</h2>
        <p>
          WiamLabs is the company behind WiamApp and WiamTrade. We are based in Ghana and focused on
          software people use every week — booking a worker, checking a chart, placing a trade.
        </p>
        <p>
          Martin leads the company. The work is product engineering, support, and keeping both apps
          running reliably across African networks.
        </p>
        <p>
          This site is the public home for WiamLabs: products, news, press, and contact. Product
          logins stay on wiamapp.com and Telegram.
        </p>
      </section>

      <section className={styles.timeline}>
        <h2>Products</h2>
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
        <h2>Principles</h2>
        <ul>
          <li>Say clearly what a product does — on the website and inside the app.</li>
          <li>Design for mobile networks and local payment rails first.</li>
          <li>On trading: your keys, your funds. WiamLabs is not a custodian.</li>
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
