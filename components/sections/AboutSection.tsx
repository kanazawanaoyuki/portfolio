import { about } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import styles from "./Sections.module.css";

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <SectionTitle title="About" subtitle="経歴要約と強み" />
      <Card>
        <p>{about.summary}</p>
        <h3>強み</h3>
        <ul>
          {about.strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
        <h3>提供できる価値</h3>
        <p>{about.value}</p>
      </Card>
    </section>
  );
}
