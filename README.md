# bocchy-project-site

## 概要
Bocchy Discord Botの概要・技術詳細・アップデート履歴・設計思想（ルール）を、エンジニア・非エンジニア問わず分かりやすく公開するGitHub Pages用サイトです。

---

## 主な特徴・方針
- **bocchy本体とは完全分離したリポジトリ/ディレクトリで管理**
- サイトの主要ページ：
  - トップページ（インフォグラフィック自己紹介・特徴アイコンのインタラクティブ表示）
  - 特長・技術詳細ページ（設計思想やコード例も掲載）
  - アップデート履歴ページ（updates.jsonから自動生成）
  - ルール・マニフェストページ（rules.mdc等から自動生成）
- すべてのデータ（特徴・履歴・ルール等）はJSONまたはMDC（Markdown Manifest）で管理し、HTML/JSで自動反映
- デザインはbocchyのイメージカラー（青系＋白ベース）、親しみやすい手書き風要素、レスポンシブ対応
- GitHub Actionsで自動デプロイ
- MCPやスクリプトでbocchy本体からデータを自動抽出・反映する方針

---

## ディレクトリ構成例

```
/ (プロジェクトルート)
├─ docs/           # 静的サイト本体（HTML, CSS, JS）
│   ├─ assets/     # スタイル・スクリプト
│   ├─ index.html
│   ├─ features.html
│   ├─ updates.html
│   └─ rules.html
├─ data/           # サイトに反映する実データ（例: updates.json）
├─ rules/          # 運用・設計・デザイン等のメタ的なルール・マニフェスト（MDC形式で集約）
│   ├─ project-manifest.mdc
│   ├─ infographic-rules.mdc
│   └─ rules.mdc
└─ .github/workflows/ # CI/CD用GitHub Actions設定
```

---

## ルール・マニフェスト管理方針
- **HTMLやJSで直接使うデータ** → `data/`
- **運用・設計・デザインなどのメタ的な指針・ルール** → `rules/`（MDC形式で集約）

---

## 今後の運用・タスク例
- rules.mdcやproject-manifest.mdc、infographic-rules.mdcなどの拡充
- サイト各ページの自動生成・データ連携強化
- デザイン・UI/UXの改善
- ユーザー・開発者向けドキュメントの充実

---

## デプロイ
- GitHub Actions（gh-pages）による自動デプロイに対応
- 詳細は`.github/workflows/gh-pages.yml`を参照

---

## ライセンス
- 本リポジトリの内容はMITライセンスで公開予定

---

## 連絡先
- ご意見・ご要望はGitHub IssuesまたはDiscordまで
