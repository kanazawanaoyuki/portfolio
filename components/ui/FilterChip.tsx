import styles from "./FilterChip.module.css";

type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button type="button" className={`${styles.chip} ${active ? styles.active : ""}`} onClick={onClick}>
      {label}
    </button>
  );
}
