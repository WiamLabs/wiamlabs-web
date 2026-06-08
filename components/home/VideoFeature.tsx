// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import styles from "./VideoFeature.module.css";

export function VideoFeature() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2>See what we are building</h2>
            <p>
              Product screenshots and a short company video will go here. For now, read the latest on
              our news page or open WiamApp and WiamTrade directly.
            </p>
            <Link href="/media" style={{ color: "var(--color-gold)", fontWeight: 600 }}>
              View media gallery →
            </Link>
          </div>
          <div className={styles.frame}>
            <div className={styles.play} aria-hidden>
              ▶
            </div>
            <span className={styles.label}>Company video — coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
