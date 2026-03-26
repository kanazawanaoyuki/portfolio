"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <Link href="#top" className={styles.brand} onClick={handleCloseMenu}>
            Naoyuki Kanazawa
          </Link>
          <div className={styles.actions}>
            <ThemeToggle />
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={menuOpen}
              aria-controls="global-nav"
              aria-label="メニューを開閉"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          id="global-nav"
          aria-label="メインナビゲーション"
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleCloseMenu}>
              {item.label}
            </a>
          ))}
          <Link href="/ui-showcase" onClick={handleCloseMenu}>
            UI Showcase
          </Link>
        </nav>
      </div>
    </header>
  );
}
