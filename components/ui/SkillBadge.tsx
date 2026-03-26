import styles from "./SkillBadge.module.css";

type SkillBadgeProps = {
  name: string;
  years: string;
  summary: string;
};

export function SkillBadge({ name, years, summary }: SkillBadgeProps) {
  return (
    <li className={styles.item}>
      <p className={styles.heading}>
        <strong>{name}</strong>
        <span>{years}</span>
      </p>
      <p>{summary}</p>
    </li>
  );
}
