import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import './layout.css'
import { gray } from './style/utility.module.css'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <React.Fragment>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <NavEm>
                <p>
                    <Link to='/page-2/'>Go to page 2</Link> /
                    <Link to='/about/'>Go to About</Link> /
                    <Link to='/using-typescript/'>
                        Go to "Using TypeScript"
                    </Link>
                </p>
            </NavEm>
            <DivEmContainer>
                <DivEmInner>
                    <MainEm>{children}</MainEm>
                </DivEmInner>
                <footer>
                    {new Date().getFullYear()}, Built with
                    <p className={gray}>
                        {data.site.siteMetadata?.description}
                    </p>
                    <a href='https://www.gatsbyjs.com'>Gatsby</a>
                </footer>
            </DivEmContainer>
        </React.Fragment>
    )
}

/* ===== Style ===== */
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

const NavEm = styled.footer`
    margin: 0;
`

const DivEmContainer = styled.div`
    margin: 0 auto;
    width: 100vw;
`

const MainEm = styled.main`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

const DivEmInner = styled.div`
    width: 100%;
`
