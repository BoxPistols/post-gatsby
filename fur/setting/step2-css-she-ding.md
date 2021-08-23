---
description: >-
  https://github.com/BoxPistols/gatsby-dev ->
  https://github.com/BoxPistols/post-gatsby
---

# Step2 CSS設定

## CSS設定

### Emotion

* ~~※Emotion CSSは不具合あり、代替=CSS Module~~
  * ~~Emotionはstyledをメインにする~~

### 開発環境切り替え

* VercelからのPullはエラーがあるため、ローカルでGatsby CLI再構築

[https://github.com/BoxPistols/post-gatsby](https://github.com/BoxPistols/post-gatsby)



### [Emotion](https://www.gatsbyjs.com/docs/how-to/styling/emotion/) :Re

Do -&gt; [how-to/styling/emotion/](https://www.gatsbyjs.com/docs/how-to/styling/emotion/)

`npm install gatsby-plugin-emotion @emotion/react @emotion/styled`

```text
module.exports = {
  plugins: [`gatsby-plugin-emotion`],
}
```

↑ Deploy / CSS / Build / ALL OK!!

```javascript
import { css } from '@emotion/react'

<div css={em__hoge}>
...

const em__hoge = css`
    position: fixed;
    ...

```

## Sass導入

{% embed url="https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/" %}

```text
yarn add node-sass gatsby-plugin-sass
```

gatsby-config.js

```text
plugins: [`gatsby-plugin-sass`]
```



拡張子とimport変更

* layout.css → .scss
  * Sass対応にまとめ直す
  * コンバーターも良し
  * 重複CSSを目視でも確認
* import ... .css → .scss

{% embed url="https://css2sass.herokuapp.com/" %}



