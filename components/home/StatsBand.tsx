// © 2026 WiamLabs. All rights reserved.

import styles from "./StatsBand.module.css";

const STATS = [
  { value: "2", label: "Live products" },
  { value: "Ghana", label: "Founded" },
  { value: "Africa", label: "First market" },
  { value: "2026", label: "WiamLabs launch" },
];

export function StatsBand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
