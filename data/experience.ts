import type { ExperienceItem } from "@/types/portfolio";

export const experienceList: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 - Present",
    title: "受託開発企業 / フロントエンドエンジニア",
    summary: "SaaS管理画面やサービスサイトのUI実装・改修を担当。",
    responsibilities: [
      "Next.js + TypeScriptでの新規画面実装",
      "既存コンポーネントの改善と共通化",
      "フォーム実装・バリデーション・エラーハンドリング"
    ],
    technologies: ["Next.js", "React", "TypeScript", "SCSS", "GitHub"],
    improvement: "変更しやすいProps設計を行い、画面追加時の実装工数を削減。"
  },
  {
    id: "exp-2",
    period: "2018 - 2023",
    title: "制作会社 / マークアップエンジニア",
    summary: "コーポレート・ブランド・キャンペーンサイトの実装を担当。",
    responsibilities: [
      "HTML/CSS/JavaScriptによるページ実装",
      "既存サイトのレスポンシブ最適化",
      "CMS組み込み用テンプレート作成"
    ],
    technologies: ["HTML", "SCSS", "JavaScript", "PHP", "MySQL"],
    improvement: "共通パーツを部品化して、改修時の影響範囲を明確化。"
  },
  {
    id: "exp-3",
    period: "2013 - 2018",
    title: "Web制作会社 / コーダー",
    summary: "運用案件を中心に、LP制作・更新業務・UI調整を担当。",
    responsibilities: [
      "短納期案件でのマークアップ実装",
      "運用しやすいHTMLテンプレート整備",
      "デザイナー・ディレクターとの仕様調整"
    ],
    technologies: ["HTML", "CSS", "jQuery"],
    improvement: "運用担当者でも更新しやすい構造にし、修正コストを低減。"
  }
];
