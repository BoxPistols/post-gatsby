import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

import styled from '@emotion/styled'

const H1Em = styled.h1`
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  taxt-align: center;
  opacity: 0.3;
  font-size: calc(32px + 8vw);
`

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <H1Em>Hello Technology Engineer!</H1Em>
    <p>Welcome to your new Gatsby site.</p>

    {/*
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
    */}
  </Layout>
)

export default IndexPage
