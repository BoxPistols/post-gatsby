import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Nav from './nav'
import { css } from '@emotion/react'

const Header = ({ siteTitle }) => (
    <header css={em__header}>
        <div>
            <h1 css={em__h1}>
                <Link
                    to='/'
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <Nav />
        </div>
    </header>
)
export default Header

/* ===== Style ====== */

const em__header = css`
    position: sticky;
    top: 0;
    zindex: 2;
    padding: 1em;
    background: #234;
    > div {
        display: flex;
    }
`

const em__h1 = css`
    font-size: 1.25em;
    margin: 0 1em 0 0;
`

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}
