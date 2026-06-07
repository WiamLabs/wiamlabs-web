// © 2026 WiamLabs. All rights reserved.

import styles from "./PillarGrid.module.css";

const PILLARS = [
  {
    icon: "🌍",
    title: "Africa-first",
    text: "We design for real African users — mobile networks, local payments, and city-scale trust.",
  },
  {
    icon: "🔐",
    title: "Trust & non-custodial",
    text: "Where trading is involved, your keys stay yours. WiamLabs builds tools, not custodians.",
  },
  {
    icon: "🇬🇭",
    title: "Built in Ghana",
    text: "Founded by Martin in Ghana — engineering discipline with continental ambition.",
  },
];

export function PillarGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>What we stand for</h2>
        <div className={styles.grid}>
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className={styles.item}>
              <div className={styles.icon} aria-hidden>
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
