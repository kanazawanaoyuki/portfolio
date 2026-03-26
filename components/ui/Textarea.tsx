import type { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, id, error, ...props }: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <label htmlFor={textareaId} className={styles.field}>
      <span>{label}</span>
      <textarea id={textareaId} className={`${styles.textarea} ${error ? styles.error : ""}`} {...props} />
      {error ? <small>{error}</small> : null}
    </label>
  );
}
