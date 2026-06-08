// © 2026 WiamLabs. All rights reserved.

import styles from "./PillarGrid.module.css";

const PILLARS = [
  {
    title: "Built for African users",
    text: "Mobile-first flows, local payments, and products that work on real networks — not demo-day slides.",
  },
  {
    title: "Non-custodial trading",
    text: "WiamTrade connects to your exchange. We do not hold your funds or your API keys on our servers.",
  },
  {
    title: "Based in Ghana",
    text: "WiamLabs is headquartered in Ghana. WiamApp and WiamTrade are the first products from the house.",
  },
];

export function PillarGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>How we build</h2>
        <div className={styles.grid}>
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className={styles.item}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
