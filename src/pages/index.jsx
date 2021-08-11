import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

import styled from '@emotion/styled'


const IndexPage = () => (
	<Layout>
		<Seo title='Home' />
		<H1Em>Hello Technology Creators</H1Em>
		<p>Welcome to your new Gatsby site.</p>

		{/*
		<StaticImage
			src='https://picsum.photos/1200/800/?image=851'
			// src='../images/gatsby-astronaut.png'
			width={800}
			height={600}
			quality={80}
			formats={[ 'AUTO', 'WEBP', 'AVIF' ]}
			alt='A Gatsby astronaut'
			style={{ marginBottom: `1.45rem`, opacity: `0.85` }}
		/>
*/}
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
	opacity: 0.45;
	font-size: calc(32px + 8vw);
  text-shadow: 2px 2px 2px #000;
	&:after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 4%;
		top: 16%;
		width: 80%;
		height: 88%;
		display: block;
		background-color: rgb(11 182 226 / 80%);
	}
`