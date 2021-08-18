import React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const InformationPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            slug
                            thumbnail
                        }
                    }
                }
            }
        }
    `)
    console.log(data)
    return (
        <div>
            <Seo title='インフォメーション' />
            <p>インフォメーション</p>
            {data.allMarkdownRemark.edges.map((edge, index) => (
                <>
                    <div>title / {edge.node.frontmatter.title}</div>
                    <div>date / {edge.node.frontmatter.date}</div>
                    <div>slug / {edge.node.frontmatter.slug}</div>
                </>
            ))}
        </div>
    )
}
export default InformationPage
