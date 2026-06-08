// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import styles from "./VideoFeature.module.css";

export function VideoFeature() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2>Built in Ghana, for the continent</h2>
            <p>
              WiamLabs is the house behind WiamApp and WiamTrade — products Africans can trust.
              Founder message video coming soon on our media page.
            </p>
            <Link href="/media" style={{ color: "var(--color-gold)", fontWeight: 600 }}>
              View media gallery →
            </Link>
          </div>
          <div className={styles.frame}>
            <div className={styles.play} aria-hidden>
              ▶
            </div>
            <span className={styles.label}>Founder video — coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
