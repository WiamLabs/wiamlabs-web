// © 2026 WiamLabs. All rights reserved.

import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
};

export function Card({ children, interactive, className = "" }: CardProps) {
  return (
    <div
      className={[styles.card, interactive ? styles.interactive : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const key = status === "live" ? "live" : "coming_soon";
  return <span className={`${styles.badge} ${styles[key]}`}>{status.replace("_", " ")}</span>;
}
