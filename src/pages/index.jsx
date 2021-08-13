import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from '@emotion/styled'
import { Video } from '../components/video'
import Photo from '../components/photo'
const IndexPage = () => (
    <>
        <Video />
        <Layout>
            <Seo title='Home' />
            <H2Em>Hello Technology Engineer!</H2Em>
            <p>Welcome to your new Gatsby site.</p>
            <Photo />
            <Photo />
            <Photo />
            <Photo />
        </Layout>
    </>
)
export default IndexPage

/* ===== Style ===== */

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
