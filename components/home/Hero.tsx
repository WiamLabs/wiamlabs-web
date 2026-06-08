// © 2026 WiamLabs. All rights reserved.

import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.mesh} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className="container">
        <div className={`${styles.layout} fade-in`}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Founded by Martin · Ghana</p>
            <h1 className={styles.title}>
              <span className={styles.brand}>WiamLabs</span> — Building Africa&apos;s digital
              future.
            </h1>
            <p className={styles.subtitle}>
              We build WiamApp and WiamTrade — trusted products for African users, designed with
              world-class craft.
            </p>
            <div className={styles.actions}>
              <Button href="/products" size="lg">
                Explore Products
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact
              </Button>
            </div>
          </div>
          <div className={styles.visual} aria-hidden>
            <div className={`${styles.preview} ${styles.previewGold}`}>
              <strong>WiamApp</strong>
              <span>Africa&apos;s trusted services marketplace</span>
            </div>
            <div className={`${styles.preview} ${styles.previewBlue}`}>
              <strong>WiamTrade</strong>
              <span>Practice & live trading — your keys, your funds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
