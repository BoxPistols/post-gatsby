/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import Iframe from 'react-iframe'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import './layout.css'
import { gray, youtube } from './style/utility.module.css'

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
      <div className={youtube}>
        <Iframe
          id='ytplayer'
          type='text/html'
          width='720'
          height='405'
          src='https://www.youtube.com/embed/XdlmoLAbbiQ?autoplay=1&mute=1&playsinline=1&loop=1&playlist=XdlmoLAbbiQ'
          frameborder='0'
          allow='fullscreen'
        />
      </div>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <DivEmContainer>
        <FooterEm>
          <p>
            <Link to='/page-2/'>Go to page 2</Link> /
            <Link to='/about/'>Go to About</Link> /
            <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
          </p>
        </FooterEm>
        <DivEmInner>
          <MainEm>{children}</MainEm>
        </DivEmInner>
        {new Date().getFullYear()}, Built with
        <p className={gray}>{data.site.siteMetadata?.description}</p>
        <a href='https://www.gatsbyjs.com'>Gatsby</a>
      </DivEmContainer>
    </React.Fragment>
  )
}

/* ===== Style ===== */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const DivEmContainer = styled.div`
  margin: 0;

  max-width: 100vw;
  padding: 0 1.0875rem 1.45rem;
`

const MainEm = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const DivEmInner = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 1.0875rem 1.45rem;
`

const FooterEm = styled.footer`
  margin: 2em auto 0;
`
