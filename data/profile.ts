import type { NavItem } from "@/types/portfolio";

export const siteMeta = {
  title: "Naoyuki Kanazawa | Frontend Engineer Portfolio",
  description:
    "Web制作の基礎力と、React / Next.js / TypeScript を使った実務寄りUI開発力を伝えるポートフォリオ。",
  url: "https://example.com"
};

export const navItems: NavItem[] = [
  { label: "Top", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" }
];

export const hero = {
  name: "Naoyuki Kanazawa",
  role: "Frontend Engineer / Markup Engineer",
  intro:
    "HTML/CSSを土台に、Next.js・React・TypeScriptで保守しやすいUIを実装します。派手さよりも、読みやすく運用しやすい実装を大切にしています。"
};

export const about = {
  summary:
    "Web制作会社と受託開発の現場で、コーポレートサイト・ブランドサイト・業務画面の実装に10年以上携わってきました。近年はReact/Next.jsのUI改修や新規画面実装にも参加しています。",
  strengths: [
    "HTML/CSS設計を起点に、既存UIへ馴染むコンポーネントを実装できる",
    "要件を分解し、再利用しやすい単位でReactコンポーネントを構築できる",
    "既存コードを読み解き、影響範囲を意識した改修ができる"
  ],
  value:
    "デザインデータの忠実な再現だけでなく、レスポンシブ・アクセシビリティ・保守性を考慮した実装で、フロントエンド開発チームの生産性に貢献します。"
};
