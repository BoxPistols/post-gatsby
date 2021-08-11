import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
`
const em__line = css`
  border: 2px solid #cde;
  padding: 0.5em 1em;
`

const AboutPage = () => (
  <Layout>
    <Container>
      <Seo title='Page About' />
      <h1 css={em__line}>Hi from the About page</h1>
      <p>Welcome to About</p>
      <Link to='/'>Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default AboutPage
