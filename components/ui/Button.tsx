// © 2026 WiamLabs. All rights reserved.

import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  type = "button",
  disabled,
  fullWidth,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    size === "sm" ? styles.sm : "",
    size === "lg" ? styles.lg : "",
    fullWidth ? styles.full : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
