// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import { partners } from "@/lib/content";
import styles from "./PartnerRow.module.css";

export function PartnerRow() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Trusted partners</h2>
          <p>We build with best-in-class infrastructure across Africa.</p>
        </div>
        <div className={styles.grid}>
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.logo} aria-hidden>
                {p.name.charAt(0)}
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.description}</p>
            </a>
          ))}
        </div>
        <Link href="/partners" className={styles.cta}>
          View all partners →
        </Link>
      </div>
    </section>
  );
}
