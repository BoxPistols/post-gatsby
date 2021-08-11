import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <h1>Hello Gatsby Development</h1>
    <p>Welcome to your new Gatsby site.</p>

    <StaticImage
      src='https://picsum.photos/1200/800/?image=851'
      // src='../images/gatsby-astronaut.png'
      width={1200}
      height={400}
      quality={80}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt='A Gatsby astronaut'
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
