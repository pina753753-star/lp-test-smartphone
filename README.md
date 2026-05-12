# スマホLP

「スマホだけでLPを作りたい人」向けの相談予約LPです。GitHub Pagesでそのまま公開できるように、ルート直下の `index.html` / `style.css` / `script.js` だけで構成しています。

## ファイル構成

```text
.
├── index.html   # LP本文とセクション構成
├── style.css    # スマホファーストのデザイン
├── script.js    # CTAリンクの一括管理
└── README.md    # 公開手順と編集方法
```

## GitHub Pagesで公開する手順

1. GitHubで対象リポジトリ `pina753753-star/lp-test-smartphone` を開きます。
2. `Settings` を開きます。
3. 左メニューの `Pages` を開きます。
4. `Build and deployment` の `Source` で `Deploy from a branch` を選びます。
5. `Branch` で公開したいブランチを選び、フォルダは `/ (root)` を選択して保存します。
6. 数分待つと、GitHub PagesのURLからLPを確認できます。

## 編集方法

### CTAリンクを変更する

無料相談ボタンのリンク先は `script.js` の `CTA_LINK` にまとめています。

```js
const CTA_LINK = "#contact";
```

予約フォームやSNSに変更したい場合は、以下のようにURLを差し替えてください。

```js
const CTA_LINK = "https://example.com/reserve";
```

### 文章を変更する

LP内の見出しや本文は `index.html` にHTMLテキストとして書いています。画像に文字を焼き込んでいないため、スマホからでも文章を編集しやすい構成です。

### 色や余白を変更する

色は `style.css` の先頭にある `:root` の変数で管理しています。

```css
:root {
  --sky: #bfeeff;
  --cream: #fff8df;
  --gold: #e5c675;
}
```

全体の雰囲気を変えたい場合は、この色を差し替えると調整しやすいです。

### 実績・口コミ・写真を差し替える

`index.html` の「実績・口コミ」セクションに、差し替え用カードを3つ用意しています。

- `Photo`
- `Voice`
- `Works`

実績が増えたら、見出し、本文、写真枠の表示を差し替えてください。画像を追加する場合は、画像ファイルをリポジトリに置いて `img` タグで読み込む形に変更できます。

## 制作メモ

- 外部ライブラリは使っていません。
- 文字化け防止のため、`index.html` に `UTF-8` を指定しています。
- スマホ幅390pxで見やすいように、PCでも中央にスマホ幅で表示されます。
- 横スクロールが出にくいように、全体で `overflow-x: hidden` とスマホファーストの幅指定をしています。
