import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <article className={styles.card}>{children}</article>;
}
