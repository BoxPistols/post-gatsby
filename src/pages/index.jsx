import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from '@emotion/styled'
import { Video } from '../components/video'
const IndexPage = () => (
    <>
        <Video />
        <Layout>
            <Seo title='Home' />
            <H2Em>Hello Technology Engineer!</H2Em>
            <p>Welcome to your new Gatsby site.</p>
            {/*
            <StaticImage
                src='../images/city.jpg'
                width={1200}
                height={400}
                quality={80}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt='A Gatsby astronaut'
                style={{ marginBottom: `1.45rem` }}
            />
        */}
        </Layout>
    </>
)
export default IndexPage

// Style
const H2Em = styled.h2`
    display: flex;
    justify-content: flex-center;
    flex-direction: column;
    taxt-align: center;
    padding-top: 15%;
    color: white;
    opacity: 0.3;
    font-size: calc(32px + 8vw);
    text-shadow: 2px 2px 2px #333;
`
