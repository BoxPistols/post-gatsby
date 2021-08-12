import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <H1Em>Hello Technology Creators</H1Em>
    <p>Welcome to your new Gatsby site.</p>

    <Box>
      <ContentsList>
        <div>
          <StaticImage
            css={em__inbox}
            src='https://picsum.photos/800/1200/?image=851'
            // src='../images/gatsby-astronaut.png'
            width={400}
            height={800}
            quality={60}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt='A Gatsby astronaut'
            style={{ opacity: 0.8 }}
          />
        </div>
        <Contents />
      </ContentsList>
    </Box>
    <Box>
      <ContentsList>
        <Contents />
        <div>
          <StaticImage
            css={em__inbox}
            src='https://picsum.photos/800/1200/?image=851'
            // src='../images/gatsby-astronaut.png'
            width={400}
            height={800}
            quality={60}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt='A Gatsby astronaut'
            style={{ opacity: 0.8 }}
          />
        </div>
      </ContentsList>
    </Box>
  </Layout>
)

export default IndexPage

//  Style
const Content = styled.div`
  background: rgb(11 22 32 / 60%);
  padding: 24px 32px;
`
const ContentsList = styled.div`
  display: contents;
`
const Box = styled.div`
  margin: 8vh auto 4vh;
  background: rgb(180 122 132 / 60%);
  padding: 24px 32px;
  display: grid;
  grid-template-columns: 50% 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`
const em__inbox = css`
  display: block;
  height: 100%;
  width: 100%;
  img {
    display: block;
    height: 100%;
    width: 100%;
    /* opacity: .8!important; */
    @media only screen and (max-width: 768px) {
      max-height: 240px;
    }
  }
`
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
    font-size: calc(24px + 8vw);
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
    left: 6%;
    top: 18%;
    width: 98%;
    height: 92%;
    display: block;
    background-color: rgb(11 182 226 / 85%);
  }
`

// data
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
