import * as React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
export const Hero = () => {
    return (
        <div css={em__hero}>
            <StaticImage
                src='../images/windmill.jpg'
                alt='Hero'
                // layout='fixed'
            />
        </div>
    )
}

/* ===== Style ===== */

const em__hero = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* default  gatsby image class */
    .gatsby-image-wrapper-constrained {
        width: 100vw;
    }
    width: 100vw;
    height: 100vw;
    z-index: -1;
     {
        /* background-image: url('https://picsum.photos/1200/800/?image=1001');
    background-size: cover; */
    }
`
