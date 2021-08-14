import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
<<<<<<< HEAD
export default function Photo () {
=======
export default function Photo() {
>>>>>>> @{-1}
    return (
        <>
            <StaticImage
                css={em__photo}
                src='../images/city.jpg'
                width={1200}
                height={400}
                quality={80}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt='A Gatsby astronaut'
                style={{ marginBottom: `1.45rem` }}
            />
        </>
    )
}

/* ===== Style ===== */
const em__photo = css`
    opacity: 0.85;
`
