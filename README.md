# Frontend Portfolio (Next.js App Router)

転職活動向けに、**実務でのフロントエンド参画力**を伝えることを目的に作成したポートフォリオです。  
見た目だけでなく、コンポーネント分割・データ管理・保守性を意識した構成にしています。

## 使用技術

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- ESLint
- Prettier

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## スクリプト

```bash
npm run dev           # 開発サーバー
npm run build         # 本番ビルド
npm run start         # 本番起動
npm run lint          # ESLint
npm run typecheck     # 型チェック
npm run format        # Prettier整形
npm run format:check  # Prettierチェック
```

## ディレクトリ構成

```text
app/
  layout.tsx
  page.tsx
  ui-showcase/page.tsx
components/
  features/
    ContactSection.tsx
    WorksSection.tsx
  layout/
    Header.tsx
    Footer.tsx
    ThemeToggle.tsx
  sections/
    HeroSection.tsx
    AboutSection.tsx
    SkillsSection.tsx
    ExperienceSection.tsx
  ui/
    Button.tsx
    Card.tsx
    FilterChip.tsx
    Input.tsx
    Modal.tsx
    SectionTitle.tsx
    SkillBadge.tsx
    Textarea.tsx
data/
  profile.ts
  skills.ts
  experience.ts
  works.ts
types/
  portfolio.ts
lib/
  works.ts
```

## 主要コンポーネント説明

- `components/layout/Header.tsx`  
  セクションナビゲーションとダークモード切り替えを提供。
- `components/features/WorksSection.tsx`  
  案件一覧、カテゴリ絞り込み、詳細モーダルを管理。
- `components/features/ContactSection.tsx`  
  お問い合わせフォームのUIと基本バリデーションを管理。
- `components/ui/*`  
  ボタン・カード・フォーム入力・モーダルなど再利用UIを集約。

## 差し替えポイント

- 自己紹介・メタ情報: `data/profile.ts`
- スキル情報: `data/skills.ts`
- 職務経歴: `data/experience.ts`
- 案件情報（Works）: `data/works.ts`

上記を編集するだけで、UIを崩さず内容を更新しやすい構成です。

## 実装方針と技術選定理由

1. **Next.js App Router**
   - メタデータ設定やページ分割がしやすく、将来的な拡張に強い。
2. **TypeScript**
   - `types/portfolio.ts` を基点に、データ構造とPropsを明確化。
3. **CSS Modules**
   - スコープを限定し、既存画面の改修時にも影響範囲を制御しやすい。
4. **dataディレクトリ管理**
   - 文言・案件データをUIから分離し、保守性と差し替え性を担保。

## 今後の改善余地

- E2Eテスト（Playwright）を追加し、主要導線の回帰確認を自動化する。
- フォームのバリデーションを `react-hook-form + zod` へ拡張して拡張性を高める。
- Works データをCMS/API化し、コンテンツ更新の運用負荷を下げる。
