import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", years: "10+ years", summary: "セマンティックな構造化、フォーム設計、アクセシブルなマークアップ" },
      { name: "CSS / SCSS", years: "10+ years", summary: "BEM・設計ルールに基づくスタイル管理、レスポンシブ対応" },
      { name: "JavaScript", years: "6 years", summary: "DOM操作、非同期処理、既存コード改修" },
      { name: "TypeScript", years: "3 years", summary: "型定義、Props設計、ユーティリティ型活用" },
      { name: "React", years: "3 years", summary: "状態管理、フォーム実装、UIコンポーネント分割" },
      { name: "Next.js", years: "2 years", summary: "App Router、静的生成、メタデータ設計" }
    ]
  },
  {
    category: "Backend / Other",
    items: [
      { name: "PHP", years: "4 years", summary: "既存CMSのテンプレート改修、軽微なAPI連携" },
      { name: "MySQL", years: "3 years", summary: "基本的なクエリ作成、データ確認、運用保守" }
    ]
  },
  {
    category: "Tools / Workflow",
    items: [
      { name: "GitHub", years: "4 years", summary: "Issueベース開発、PRレビュー対応、ブランチ運用" },
      { name: "Docker", years: "2 years", summary: "ローカル開発環境の立ち上げと基本運用" },
      { name: "Node.js / npm", years: "4 years", summary: "依存管理、ビルド設定、スクリプト運用" },
      { name: "ESLint / Prettier", years: "3 years", summary: "静的解析・フォーマットの導入と整備" }
    ]
  }
];
