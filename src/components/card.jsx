import React from 'react'
import { css } from '@emotion/react'
import Photo from './photo'
const em__card_org = css`
    display: flex;
    align-items: center;
`

const em__card = css`
    /* max-width: 33%; */
    margin: 24px 0;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    color: ghostwhite;
    padding: 24px;
    background-color: #123;
    opacity: 0.85;
`
export const Card = () => {
    return (
        <div css={em__card_org}>
            <div css={em__card}>
                <div className='em__card__img'>
                    <Photo />
                </div>
                <div className='em__card__caption'>caption</div>
                <div className='em__card__title'>title</div>
                <div className='em__card__sub-title'>sub</div>
                <div className='em__card__text'>text</div>
                <div className='em__card__link'>link</div>
                <div className='em__card__date'>date</div>
            </div>
        </div>
    )
}
