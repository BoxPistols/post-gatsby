---
description: Create UI Components with Css in JS
---

# Step4 Youtube Video UI Test

## Youtube Video UI

*  Add iframe plugin for React
  * Youtube設定時に利用

{% embed url="https://www.npmjs.com/package/react-iframe" %}

### Youtube iframe API パラメーター設定サポートツール

* 再生開始ポイント設定
* 音声のミュート設定
* 自動再生の設定
* Loop再生の設定
* コントローラー表示の有無
* ...など各種パラーメーター設定をしたURLクエリーを生成

{% embed url="https://developers.google.com/youtube/youtube\_player\_demo" %}

### CSSでのyoutube/iframe UI設定参考

{% embed url="https://yuntu-tek.com/background-youtube-css/" %}

> CSS設定例

`56.25` は `16:9`の画面比率のため

> ```css
> .youtube {
>   width: 100%;
>   padding-top: 56.25%;
>   position: relative;
> }
>
> .youtube iframe  {
>   position: absolute;
>   top: 0;
>   left: 0;
>   width: 100%;
>   height: 100%;
> }
> ```

### Example

* TOPページに設置するパターン 
  * index.jsx
  * emotion cssで直下のIframeまでCSS設定

```javascript
import * as React from 'react'
import Iframe from 'react-iframe'
import { css } from '@emotion/react'

export const Video = () => {
    const url = `https://www.youtube.com/embed/MLCSfwHLCwA?autoplay=1&mute=1&controls=0&loop=1&start=12&playlist=MLCSfwHLCwA`
    return (
        <div css={em__youtube}>
            <Iframe
                id='ytplayer'
                type='text/html'
                width='720'
                height='480'
                src={url}
                frameborder='0'
                allowfullscreen
            />
        </div>
    )
}

const em__youtube = css`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    padding-top: 56.25%;
    z-index: -1;
    iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100vw;
        min-height: 100vh;
        border: none;
    }
`

```

### issue

* Youtube APIからconsoleに大量のWarinigが出る
  * 考察

    * 動画はmp4などのローカルで持つ
    * 画像にする
    * その他WebGLなどのインタラクティブ表現を検討する

