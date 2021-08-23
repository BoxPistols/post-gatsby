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
