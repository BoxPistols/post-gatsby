import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
export const Photo = () => {
    return (
        <>
            <StaticImage
                css={em__photo}
                src='../images/city.jpg'
                width={720}
                height={480}
                quality={70}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt='A Gatsby astronaut'
                style={{ marginBottom: `1.45rem` }}
            />
        </>
    )
}

/* ===== Style ===== */
const em__photo = css`
    overflow: visible;
    opacity: 0.85;
`
