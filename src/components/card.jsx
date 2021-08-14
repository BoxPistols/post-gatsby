import React from 'react'
import { css } from '@emotion/react'
import { Photo } from './photo'
export const Card = () => {
    return (
        <div className='card__org' css={em__card_org}>
            <div className='card' css={em__card_mol}>
                <div className='card_img' css={em__card_img}>
                    <Photo />
                </div>
                <div className='card_img_caption'>caption</div>
                <div className='em__card__title'>title</div>
                <div className='em__card__sub-title'>sub</div>
                <div className='em__card__text'>text</div>
                <div className='em__card__link'>link</div>
                <div className='em__card__date'>date</div>
            </div>
        </div>
    )
}

/* ===== Style ===== */
const em__card_org = css`
    display: flex;
    &:nth-child(odd) {
        img {
            border: 2px solid teal;
            margin: 0 1.45rem 0 0;
        }
    }
    &:nth-child(even) {
        .card {
            flex-direction: row-reverse;
        }
        img {
            border: 2px solid tomato;
            margin: 0 0 0 1.45rem;
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
`
const em__card_img = css`
    margin-right: 1.45rem;
    max-width: 50%;
    display: flex;
    > img {
        box-shadow: 2px 2px 4px #222;
    }
`
