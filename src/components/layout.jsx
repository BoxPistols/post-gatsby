/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import './layout.css'

const DivEmContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`
const FooterEm = styled.footer`
  margin: 2em auto 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <DivEmContainer>
        <main>{children}</main>
        <FooterEm>
          <p>
            <Link to='/page-2/'>Go to page 2</Link> <br />
            <Link to='/about/'>Go to About</Link> <br />
            <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
          </p>
          {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </FooterEm>
      </DivEmContainer>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
