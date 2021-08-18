import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Header from './header'
import * as ui from '../components/style/ui'
import { white } from './style/utility.module.scss'
import './layout.scss'

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
            <DivEmContainer>
                <DivEmInner>
                    <Header
                        siteTitle={data.site.siteMetadata?.title || `Title`}
                    />
                    <MainEm>{children}</MainEm>
                </DivEmInner>
                <footer css={em__footer}>
                    {new Date().getFullYear()}-{new Date().getMonth() + 1}-
                    {new Date().getDate()}, Built with
                    <p className={white}>
                        {data.site.siteMetadata?.description}
                        <span css={em__link}>
                            &nbsp;on&nbsp;
                            <a href='https://www.gatsbyjs.com'>Gatsby</a>
                        </span>
                    </p>
                </footer>
            </DivEmContainer>
        </React.Fragment>
    )
}

export default Layout

/* ===== propTypes ===== */
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

/* ===== Style ===== */

const DivEmContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: 200vh;
`

const MainEm = styled.main`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    align-items: center;
    max-width: 1200px;
    padding: 24px;
`

const DivEmInner = styled.div`
    width: 100%;
    padding: 0;
`

const em__footer = css`
    margin: 24px auto;
    ${ui.color(ui.c.white)};
    ${ui.fx_center()};
    flex-direction: column;
`
const em__link = css`
    a {
        /* ${ui.color(ui.c.gatsby)}; */
        /* text-shadow: 1px 1px 2px ${ui.c.black}; */
        text-decoration: underline;
    }
`
