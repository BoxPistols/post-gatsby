import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from '@emotion/styled'

const Content = styled.div`
  margin: 2em auto;
  background: rgb(11 22 32 / 60%);
  padding: 24px 32px;
`

export const Contents = () => (
  <Content>
    <h2>Est Et Distinctio Rerum Cumque</h2>
    <h3>
      Nisi aliquid et accusamus nobis veniam sunt deleniti voluptas est mollitia
      assumenda sint illum.
    </h3>
    <p>
      Pariatur blanditiis et enim inventore deserunt sed dicta aliquam facere
      totam aut sit sunt. Dolor et dicta beatae quis dolorem culpa molestiae
      nulla eius est dolore modi voluptas. Eum et fugit et qui repudiandae error
      voluptas iusto quasi eius placeat. Veniam labore eaque totam repellendus
      dolor nihil sed. Quis eum facere sed ut magni qui iure saepe beatae
      quaerat beatae atque. Quo quia distinctio reprehenderit officiis explicabo
      impedit sapiente soluta.
    </p>
    <p>
      Consequatur tempora quis fugit quo fugit quis sit aut dolorem. Maxime est
      accusamus eaque et velit vel enim nihil laborum possimus. Odit aliquam
      amet itaque. Sunt ea molestiae ab facere tempore illum. Eos dolore esse
      alias quaerat nulla amet impedit omnis. Alias molestiae voluptate ut earum
      quo eum nesciunt eaque delectus mollitia nisi et qui qui doloremque. Ad
      voluptas labore vitae omnis veniam at aperiam quo. Et aut provident
      laudantium possimus possimus. Fugiat eos ipsum et ut aperiam voluptates
      saepe temporibus similique.
    </p>
  </Content>
)

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <H1Em>Hello Technology Creators</H1Em>
    <p>Welcome to your new Gatsby site.</p>

    <Contents />
    <Contents />
    <Contents />
    <Contents />
    <Contents />
    <Contents />
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

const H1Em = styled.h1`
  position: relative;
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  taxt-align: center;
  opacity: 0.75;
  font-size: calc(20px + 12vw);
  @media only screen and (max-width: 768px) {
    font-size: calc(20px + 4vw);
  }
  text-shadow: 2px 2px 2px #000;
  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -8%;
    top: 0;
    width: 80%;
    height: 88%;
    display: block;
    background-color: rgb(170 180 30 / 90%);
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 8%;
    top: 20%;
    width: 88%;
    height: 92%;
    display: block;
    background-color: rgb(11 182 226 / 85%);
  }
`
