"use client";

import { useMemo, useState } from "react";
import { workCategories, workItems } from "@/data/works";
import type { WorkCategory, WorkItem } from "@/types/portfolio";
import { filterWorks } from "@/lib/works";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FilterChip } from "@/components/ui/FilterChip";
import { Modal } from "@/components/ui/Modal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "@/components/sections/Sections.module.css";

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const filteredWorks = useMemo(
    () => filterWorks(workItems, activeCategory),
    [activeCategory]
  );

  return (
    <section id="works" className={styles.section}>
      <SectionTitle title="Works" subtitle="実務を想起させる案件例" />
      <div className={styles.chips}>
        {workCategories.map((category) => (
          <FilterChip
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
      <div className={styles.grid2}>
        {filteredWorks.map((work) => (
          <Card key={work.id}>
            <h3>{work.title}</h3>
            <p>{work.summary}</p>
            <p>
              <strong>技術:</strong> {work.stack.join(" / ")}
            </p>
            <p>
              <strong>担当:</strong> {work.role}
            </p>
            <p>
              <strong>工夫:</strong> {work.improvement}
            </p>
            <Button variant="secondary" onClick={() => setSelectedWork(work)}>
              詳細を見る
            </Button>
          </Card>
        ))}
      </div>
      <Modal
        open={selectedWork !== null}
        title={selectedWork?.title ?? ""}
        onClose={() => setSelectedWork(null)}
      >
        {selectedWork ? (
          <div className={styles.modalBody}>
            <p>{selectedWork.description}</p>
            <p>
              <strong>カテゴリ:</strong> {selectedWork.categories.join(" / ")}
            </p>
            <p>
              <strong>技術スタック:</strong> {selectedWork.stack.join(" / ")}
            </p>
            <p>
              <strong>担当範囲:</strong> {selectedWork.role}
            </p>
            <p>
              <strong>工夫ポイント:</strong> {selectedWork.improvement}
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
