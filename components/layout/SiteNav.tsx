// © 2026 WiamLabs. All rights reserved.

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./SiteNav.module.css";

const NAV_ITEMS = [
  { href: "/products", label: "Products" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.nav} ${open ? styles.drawerOpen : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.svg"
            alt="WiamLabs logo"
            width={36}
            height={36}
            className={styles.logo}
            priority
          />
          <span>WiamLabs</span>
        </Link>

        <nav aria-label="Main">
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="/products" size="sm" className={styles.hideMobile}>
            Our Products
          </Button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      <div className={styles.drawer}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Button href="/products" fullWidth onClick={() => setOpen(false)}>
          Our Products
        </Button>
      </div>
    </header>
  );
}
