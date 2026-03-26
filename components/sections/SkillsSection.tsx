import { skillCategories } from "@/data/skills";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import styles from "./Sections.module.css";

export function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <SectionTitle title="Skills" subtitle="実務経験年数と担当可能な内容" />
      <div className={styles.grid3}>
        {skillCategories.map((category) => (
          <article key={category.category} className={styles.panel}>
            <h3>{category.category}</h3>
            <ul className={styles.skillList}>
              {category.items.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  years={skill.years}
                  summary={skill.summary}
                />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
