import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, id, error, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label htmlFor={inputId} className={styles.field}>
      <span>{label}</span>
      <input id={inputId} className={`${styles.input} ${error ? styles.error : ""}`} {...props} />
      {error ? <small>{error}</small> : null}
    </label>
  );
}
