import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Header from './header'
import * as ui from '../components/style/ui'
import { gray } from './style/utility.module.scss'
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
                    <p className={gray}>
                        {data.site.siteMetadata?.description}
                    </p>
                    <a href='https://www.gatsbyjs.com'>Gatsby</a>
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
const em__footer = css`
    margin-top: 24px;
    ${ui.fx_center()};
    flex-direction: column;
`

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
