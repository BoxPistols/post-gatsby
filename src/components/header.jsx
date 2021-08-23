import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Nav from './nav'
import { css } from '@emotion/react'
import * as ui from '../components/style/ui'

const Header = ({ siteTitle }) => (
    <header css={em__header}>
        <div className='heading__org'>
            <h1 css={em__h1}>
                <Link to='/'>{siteTitle}</Link>
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
    width: 100%;
    top: 0;
    z-index: 2;
    border: solid 4px rgba(#000, 0.25);
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #22334465;
        backdrop-filter: blur(1.25px);
    }
    > div {
        ${ui.fx_center()}
        justify-content: space-between;
    }
    h1 {
        padding: 0.5rem 1rem;
    }
    nav {
        display: inline-flex;
        padding: 0.5rem 2rem 0.5rem 1rem;
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
