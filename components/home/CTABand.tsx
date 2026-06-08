// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import styles from "./CTABand.module.css";

export function CTABand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2>Get in touch</h2>
          <p>Press, careers, or a general question — send a message and we will reply.</p>
        </div>
        <div className={styles.actions}>
          <Button href="/contact">Contact us</Button>
          <Button href="/about" variant="outline">
            About WiamLabs
          </Button>
        </div>
      </div>
    </section>
  );
}
