import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Yuki Tanaka. Built with Next.js App Router.</p>
    </footer>
  );
}
