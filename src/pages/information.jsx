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
        </div>
    )
}
export default InformationPage
