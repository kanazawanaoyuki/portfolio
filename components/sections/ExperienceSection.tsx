import { experienceList } from "@/data/experience";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import styles from "./Sections.module.css";

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <SectionTitle title="Experience" subtitle="職務経歴の要約" />
      <div className={styles.timeline}>
        {experienceList.map((experience) => (
          <Card key={experience.id}>
            <p className={styles.period}>{experience.period}</p>
            <h3>{experience.title}</h3>
            <p>{experience.summary}</p>
            <h4>担当業務</h4>
            <ul>
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>使用技術</h4>
            <p>{experience.technologies.join(" / ")}</p>
            <h4>工夫したこと</h4>
            <p>{experience.improvement}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
