import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className={styles.wrapper}>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}
