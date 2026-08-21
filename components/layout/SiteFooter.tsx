// © 2026 WiamLabs. All rights reserved.

import Image from "next/image";
import Link from "next/link";
import { COPYRIGHT, SOCIAL_LINKS } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/">
              <Image src="/brand/logo.svg" alt="WiamLabs" width={40} height={40} />
            </Link>
            <p>WiamApp and WiamTrade — built in Ghana by WiamLabs.</p>
          </div>

          <div className={styles.col}>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/media">Media</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Products</h3>
            <ul>
              <li>
                <Link href="/products/wiamapp">WiamApp</Link>
              </li>
              <li>
                <Link href="/products/wiamtrade">WiamTrade</Link>
              </li>
              <li>
                <Link href="/products">All products</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/legal/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/legal/terms">Terms</Link>
              </li>
              <li>
                <Link href="/legal/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{COPYRIGHT}</span>
          <div className={styles.social}>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
