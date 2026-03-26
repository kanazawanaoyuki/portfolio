import type { WorkCategory, WorkItem } from "@/types/portfolio";

export const workCategories: WorkCategory[] = [
  "All",
  "Corporate Site",
  "Frontend UI",
  "Coding",
  "Responsive",
  "React"
];

export const workItems: WorkItem[] = [
  {
    id: "work-1",
    title: "コーポレートサイト改修",
    summary: "採用情報・事例紹介ページを中心にUIを改善。",
    description:
      "既存デザインを活かしつつ、情報設計とレスポンシブ崩れを見直し。共通コンポーネント化によって更新しやすい構成へ移行。",
    stack: ["Next.js", "TypeScript", "SCSS Modules"],
    categories: ["Corporate Site", "Responsive", "Coding"],
    role: "フロントエンド実装、既存改修、レビュー対応",
    improvement: "カード一覧と詳細導線を整理し、採用ページ回遊率を改善。"
  },
  {
    id: "work-2",
    title: "ブランドサイト フロントエンド実装",
    summary: "デザイン再現性を重視した画面実装と運用改善。",
    description:
      "複数テンプレートにまたがるスタイルを整理し、共通パーツを増やして運用コストを軽減。",
    stack: ["HTML", "SCSS", "JavaScript"],
    categories: ["Corporate Site", "Coding", "Responsive"],
    role: "マークアップ、モジュール化、レスポンシブ調整",
    improvement: "セクション単位での再利用を可能にし、更新時間を短縮。"
  },
  {
    id: "work-3",
    title: "SaaSプロダクト 管理画面UI",
    summary: "一覧・詳細・フォームの新規実装を担当。",
    description:
      "React + TypeScriptで構築された既存画面に合わせ、コンポーネント追加とバリデーション実装を実施。",
    stack: ["React", "TypeScript", "CSS Modules"],
    categories: ["Frontend UI", "React"],
    role: "画面実装、状態管理、コードレビュー",
    improvement: "入力エラーの可視化を統一し、問い合わせ対応工数を削減。"
  },
  {
    id: "work-4",
    title: "キャンペーンページ制作",
    summary: "短期間でのLP制作と効果検証用改修。",
    description:
      "A/Bテスト向けにコンテンツ差し替えしやすい構造で実装。PC/SPでの表示品質を担保。",
    stack: ["Next.js", "React", "SCSS Modules"],
    categories: ["Coding", "Responsive", "React"],
    role: "実装、表示検証、軽微な改善提案",
    improvement: "モジュール化したことでバリエーションページを短期間で展開。"
  },
  {
    id: "work-5",
    title: "既存ページUI改善プロジェクト",
    summary: "問い合わせ導線とフォーム周辺UIを改善。",
    description:
      "ユーザー離脱が多い画面のUIを段階的に改修。フォーム項目の整理とエラー文言調整で完了率改善を支援。",
    stack: ["React", "TypeScript", "ESLint"],
    categories: ["Frontend UI", "React"],
    role: "改修計画、実装、検証",
    improvement: "段階的リリースでリスクを抑えつつ、CV導線を改善。"
  }
];
