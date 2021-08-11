import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      // background: `rgba(000, 000, 000, 0.9)`,
      marginBottom: `1.25rem`,
      background: `#078dcae9`,
      position: `sticky`,
      top: 0,
      zIndex: 2,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.25rem 1.0875rem`,
      }}
    >
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
