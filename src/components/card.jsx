import * as React from 'react'
import { css } from '@emotion/react'
import { Photo } from './photo'
export const Card = (props) => {
    return (
        <div className='card__org' css={em__card_org}>
            <div className='card' css={em__card_mol}>
                <div className='card_img' css={em__card_img}>
                    <Photo />
                    {/* <div className='card_img_caption'>caption</div> */}
                </div>
                <div className='card' css={em__card_content}>
                    {props.title ? (
                        <div css={em__card__title}>
                            <h3>{props.title}</h3>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className='em__card__sub-title'>sub</div>
                    <div className='em__card__text'>text</div>
                    <div className='em__card__link'>link</div>
                    <div className='em__card__date'>date</div>
                </div>
            </div>
        </div>
    )
}

/* ===== Style ===== */

const mq = (x) => {
    return `@media only screen and (max-width: 768px) {
    ${x}
    }`
}

const em__card_org = css`
    display: flex;
    &:nth-child(odd) {
        img {
            border: 2px solid teal;
            margin: 0 1.45rem 0 0;
            ${mq('margin: 0')}
        }
    }
    &:nth-child(even) {
        .card {
            flex-direction: row-reverse;
        }
        img {
            border: 2px solid tomato;
            margin: 0 0 0 1.45rem;
            ${mq('margin: 0')}
        }
    }
`

const em__card_mol = css`
    /* max-width: 33%; */
    margin: 24px 0;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    color: ghostwhite;
    padding: 1.45rem;
    padding-bottom: 0;
    background-color: #123;
    opacity: 0.85;
     {
        /* @media only screen and (max-width: 768px) {
        display: block;
    } */
    }
    ${mq('display: block')}
`
const em__card_img = css`
    margin-right: 1.45rem;
    max-width: 50%;
    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
    > img {
        box-shadow: 2px 2px 4px #222;
    }
`
const em__card_content = css`
    display: block;
    width: 100%;
    align-self: start;
`
const em__card__title = css`
    color: tomato;
`
