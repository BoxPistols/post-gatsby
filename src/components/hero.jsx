import * as React from 'react'
import { css } from '@emotion/react'
export const Hero = () => {
    return (
        <>
            <div css={em__hero}></div>
        </>
    )
}

/* ===== Style ===== */

const em__hero = css`
    position: fixed;
    top: 0;
    left: 0;
    background-image: url('https://picsum.photos/1200/800/?image=1001');
    background-size: cover;
    width: 100vw;
    height: 100vw;
    z-index: -1;
`
