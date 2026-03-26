import type { ReactNode } from "react";
import styles from "./Modal.module.css";
import { Button } from "./Button";

type ModalProps = {
  title: string;
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ title, open, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <h3>{title}</h3>
          <Button variant="secondary" onClick={onClose}>
            閉じる
          </Button>
        </header>
        <div>{children}</div>
      </section>
    </div>
  );
}
