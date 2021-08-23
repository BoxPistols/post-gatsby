import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/react'
export default function Post({ data }) {
    return (
        <Layout>
            <div css={em__posts}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html,
                    }}
                />
            </div>
        </Layout>
    )
}
export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

// style
const em__posts = css`
    width: 100%;
    max-width: 720px;
    margin: 2rem auto;
`
