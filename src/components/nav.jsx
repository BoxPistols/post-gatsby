import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
function Nav () {
    return (
        <NavEm>
            <Link to='/page-2/'>Go to page 2</Link> /
            <Link to='/about/'>Go to About</Link> /
            <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
        </NavEm>
    )
}

export default Nav

/* ===== Style ===== */

const NavEm = styled.footer`
    margin: 0;
`
