// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import styles from "./CTABand.module.css";

export function CTABand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2>Work with WiamLabs</h2>
          <p>Partnerships, press, and careers — we would love to hear from you.</p>
        </div>
        <div className={styles.actions}>
          <Button href="/contact">Contact us</Button>
          <Button href="/about" variant="outline">
            About Martin
          </Button>
        </div>
      </div>
    </section>
  );
}
