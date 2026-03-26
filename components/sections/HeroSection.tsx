import { hero } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import styles from "./Sections.module.css";

export function HeroSection() {
  return (
    <section id="top" className={styles.hero}>
      <p className={styles.kicker}>Frontend Portfolio</p>
      <h1>{hero.name}</h1>
      <p className={styles.role}>{hero.role}</p>
      <p>{hero.intro}</p>
      <div className={styles.ctaRow}>
        <a href="#skills">
          <Button>Skillsを見る</Button>
        </a>
        <a href="#works">
          <Button variant="secondary">Worksを見る</Button>
        </a>
      </div>
    </section>
  );
}
