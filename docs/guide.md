# 導入フロー

## ファイル構造サンプル

```
workspace
└─ docs
   ├─ xxx.md
   ├─ xxx.md
   ├─ _sidebar.md
   ├─ README.md
   └─ index.html
```

## CLI install

### yarn

install:

```
yarn add -D docsify-cli
```

初期化：

```
yarn docsify init ./docs
```

ローカルサーバー起動：（アドレス指定の場合）

```
yarn docsify serve docs -p 3003
```

---

### npx

初期 init：

```
npx docsify-cli init ./docs
```

#### ローカルサーバー起動：

```
npx docsify-cli serve docs
```

ローカルサーバー起動：（アドレス指定の場合）

```
npx docsify-cli serve docs -p 3003
```
