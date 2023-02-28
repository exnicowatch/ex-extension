# exnicowatch/ex-extension

[exnicowatch](https://github.com/exnicowatch)の拡張機能に関するリポジトリ

TypeScript+Plasmoで構成されている。[ex-front](https://github.com/exnicowatch/ex-front)([ex.n4a.dev](https://ex.n4a.dev))使用するためにこの拡張機能の導入が必須

## 使用法

### 開発
```bash
yarn dev
```
`ex-extsnion/build/chrome-mv3-dev`を読み込む

### ビルド
```bash
yarn build
```
`ex-extsnion/build/chrome-mv3-prod`を読み込む

### パッケージング
```bash
yarn package
```
`ex-extension/build`以下にzipファイルが生成される

#### 導入
リリースから最新バージョンの対応するブラウザのもののzipをダウンロードし読み込む。

## 作者
[Negima1072](https://n4a.dev)

## ライセンス
[MIT](https://github.com/exnicowatch/ex-extension/blob/master/LICENSE)
