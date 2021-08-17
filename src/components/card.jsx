import * as React from 'react'
import { css } from '@emotion/react'
import { Photo } from './photo'
import * as ui from '../components/style/ui'
import * as mod from './style/style.module.scss'

export const Card = (props) => {
    return (
        <div className={'card__org'} css={em__card_org}>
            <div
                className={
                    props.not_reverse
                        ? `card_mol__not-reverse ${mod.mg_x16} ${mod.mg_y24}`
                        : `card_mol ${mod.mg_x16} ${mod.mg_y24}`
                }
                css={em__card_mol}
            >
                <div className='card_img' css={em__card_img}>
                    <Photo />
                </div>
                <div className='card' css={em__card_content}>
                    {props.title ? (
                        <div css={em__card__title}>
                            <h3>{props.title}</h3>
                        </div>
                    ) : (
                        ''
                    )}

                    {props.sub_title ? (
                        <div css={em__card__sub_title}>
                            <p>{props.sub_title}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {props.text ? (
                        <div className='em__card__text'>{props.text}</div>
                    ) : (
                        ''
                    )}

                    <div className={mod.mg_y12} />

                    <div className='em__card__link'>https://google.com</div>
                    <div className='em__card__date'>21-08-16</div>
                </div>
            </div>
        </div>
    )
}

/* ===== Style ===== */

//  has gatsby-image spacing
const space_img = '1.45rem'

const em__card_org = css`
    * {
        margin-bottom: 0;
    }
    .card {
        padding: 0;
        margin: 0 0 0 1.45rem;
        padding-bottom: ${space_img};
    }
    img {
        ${ui.mq('margin: 0')};
    }
    &:nth-of-type(odd) {
        .card {
            margin: 0 0 0 ${space_img};
            ${ui.mq('margin: 0')};
        }
    }
    &:nth-of-type(even) {
        .card_mol {
            flex-direction: row-reverse;
        }
        /* if not_reverse='true' */
        .card_mol__not-reverse {
            /* ${ui.bdc('red')}; // debug */
            .card {
                margin: 0 0 0 ${space_img};
                ${ui.mq('margin: 0')};
            }
        }
    }
`

export const em__card_mol = css`
    ${ui.mq('display: block')};
    ${ui.fx};
    ${ui.bdc(ui.c.gray.__200)};
    /* ${ui.color(ui.c.ghost)}; */
    /* ${ui.bgc(ui.c.dim)} */
    padding: ${space_img} ${space_img} 0;
    box-shadow: 2px 2px 12px ${ui.c.gray.__300};
`
const em__card_img = css`
    max-width: 30%;
    /* ${ui.opacity}; */
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
    h3 {
        margin: -0.45em 0 0 0;
        line-height: 1.875em;
    }
`
const em__card__sub_title = css`
    ${ui.color(ui.c.gray.__400)};
`
