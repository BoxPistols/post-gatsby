---
description: setup
---

# Contetful導入

## テスト設定

### 基本設計

1. プログ記事を管理する「BlogPost\]
2. カテゴリーを管理する「Category」の2つのコンテン ツタイプを作成する

#### 要件

* アイキャッチ画像
* タイトル
* カテゴリー
* 投稿日
* コンテンツ
  * = 本文 / リッチテキス

### コンテンツタイプの作成

* スペースの作成

![](../.gitbook/assets/image%20%285%29.png)

### コンテンツの作成

* コンテンツの名前
* apiは自動でこの場で作成される
* Discは無くてもなんでも良い

![](../.gitbook/assets/image%20%284%29.png)

### フィールドの作成

* タイトルから作成
  * Add fieldクリック

![](../.gitbook/assets/image%20%2811%29.png)

![&#x30BF;&#x30A4;&#x30C8;&#x30EB; &#x30D5;&#x30A3;&#x30FC;&#x30EB;&#x30C9;&#x4F5C;&#x6210;](../.gitbook/assets/image%20%2814%29.png)

### タイトルの設定

* フィールドの設定画面が開きます。
  *  Field options
    * 「This field represents the Entry title」チェック
      * タイトル のフィールドであることを明示します。 
    * コンテンツタイプごとに、どれか1つのフィールドをタイ トルのフィールドにする必要がある
  *  入力必須
    * Validationsで「Required field」

![](../.gitbook/assets/image%20%2810%29.png)

### 

### コンテンツタイプ設計

| コンテンツタイプ名  | ID | 説明 |
| :--- | :--- | :--- |
| BlogPost | blogPost | ブログ記事 |
| Category | category | カテゴリー |



## 備考

### Localse設定 -&gt; 日本

![](../.gitbook/assets/image%20%288%29.png)

![](../.gitbook/assets/image%20%289%29.png)

![](../.gitbook/assets/image%20%287%29.png)

