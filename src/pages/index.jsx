import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import * as ui from '../components/style/ui'
import { Video } from '../components/video'
import { Card } from '../components/card'
import { Hero } from '../components/hero'

const IndexPage = () => (
    <>
        <Video />
        {/* <Hero /> */}
        <Layout>
            <Seo title='Home' />
            <H2Em>Technology Heroes</H2Em>
            <p css={em__catch}>Welcome to your new Gatsby site.</p>
            <Card
                title='Quibusdam Perferendis Neque Fugit Qui'
                sub_title='consequatur'
                text='Maxime dolorem voluptas quia quam. Alias omnis rerum cumque aperiam dignissimos odio ea dolorem illum dolores distinctio.'
            />
            <Card
                title='Vel Rem Et Vero'
                sub_title='numquam'
                text='Sit harum quos ipsam itaque deserunt dicta excepturi et eaque nobis adipisci qui numquam odit.'
            />
            <Card
                title='Tempora Quia Dolores Ut Iusto Ea'
                sub_title='ducimus'
                text='In nihil dolorem maxime laboriosam ut. Molestiae blanditiis magni repellendus quidem in enim velit animi cupiditate consequatur qui vitae.'
            />
        </Layout>
    </>
)
export default IndexPage

/* ===== Style ===== */

const em__catch = css`
    color: white;
    text-shadow: 0.088em 0.085em 0px ${ui.c.gatsby};
    /* ${ui.color(ui.c.gatsby)}; */
    opacity: 0.85;
    margin: 2rem auto;
`

const H2Em = styled.h2`
    display: flex;
    justify-content: flex-center;
    flex-direction: column;
    taxt-align: center;
    padding-top: 15%;
    /* color: white; */
    opacity: 0.8;
    font-size: calc(32px + 8vw);
    /* text-shadow: 2px 2px 2px #333; */
    background: linear-gradient(to right, #d9ff06 10%, #5c00ea 40%);
    -webkit-background-clip: text;
    color: transparent;
`
