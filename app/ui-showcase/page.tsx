import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FilterChip } from "@/components/ui/FilterChip";
import { Input } from "@/components/ui/Input";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Textarea } from "@/components/ui/Textarea";
import styles from "@/components/sections/Sections.module.css";

export default function UiShowcasePage() {
  return (
    <section className={styles.section}>
      <SectionTitle title="UI Showcase" subtitle="再利用可能なUIコンポーネント例" />
      <div className={styles.grid2}>
        <Card>
          <h3>Button</h3>
          <div className={styles.formActions}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>
        <Card>
          <h3>FilterChip</h3>
          <div className={styles.formActions}>
            <FilterChip label="Default" active={false} onClick={() => undefined} />
            <FilterChip label="Active" active onClick={() => undefined} />
          </div>
        </Card>
        <Card>
          <h3>SkillBadge</h3>
          <ul className={styles.skillList}>
            <SkillBadge name="TypeScript" years="3 years" summary="Props型設計・安全なリファクタリング" />
          </ul>
        </Card>
        <Card>
          <h3>Form UI</h3>
          <div className={styles.skillList}>
            <Input label="通常" name="normal" placeholder="focus stateを確認" />
            <Input label="エラー" name="error" error="入力エラーの例です。" />
            <Textarea label="Textarea" name="textarea" placeholder="説明文" />
          </div>
        </Card>
      </div>
    </section>
  );
}
