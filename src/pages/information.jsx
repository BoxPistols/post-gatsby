import React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { Link } from 'gatsby'
const InformationPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        frontmatter {
                            date
                            title
                            thumbnail {
                                name
                                childImageSharp {
                                    fluid {
                                        src
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                comment: path.resolve(`./src/posts/information.jsx`),
                content: { slig: node.fields.slug },
            })
        })
        return nnull
    })
    console.log(data)
    return (
        <div>
            <Seo title='インフォメーション' />
            <p>インフォメーション</p>
            <p>{data.allMarkdownRemark.totalCount}件表示</p>

            {data.allMarkdownRemark.edges.map((edge, index) => (
                <div key={index}>
                    <div>title / {edge.node.frontmatter.title}</div>
                    <div>date / {edge.node.frontmatter.date}</div>

                    <Link to={`../posts/${edge.node.fields.slug}`}>
                        {edge.node.frontmatter.title}
                    </Link>

                    <img
                        src={
                            edge.node.frontmatter.thumbnail.childImageSharp
                                .fluid.src
                        }
                        alt={edge.node.frontmatter.thumbnail.name}
                    />
                </div>
            ))}
        </div>
    )
}

export default InformationPage
