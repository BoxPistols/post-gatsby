import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const HeaderEm = styled.header`
    width: 100vw;
    padding: 0.25rem;
    z-index: 2;
    background: #3f51b57d;
    position: fixed;
    top: 0;
    left: 0;
`
const Header = ({ siteTitle }) => (
    <HeaderEm>
        <h1 style={{ margin: 0, fontWeight: 300, fontSize: 24 }}>
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
    </HeaderEm>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Header`,
}

export default Header
