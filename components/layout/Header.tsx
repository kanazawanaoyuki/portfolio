import Link from "next/link";
import { navItems } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="#top" className={styles.brand}>
          Yuki Tanaka
        </Link>
        <nav aria-label="メインナビゲーション" className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <Link href="/ui-showcase">UI Showcase</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
