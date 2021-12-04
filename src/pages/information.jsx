import React from 'react';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { Link } from 'gatsby';
const InformationPage = () => {
    const data = useStaticQuery(graphql`

		query {
			allContentfulBlogPost(sort: { fields: createdDate, order: DESC }) {
				edges {
					node {
						title
						slug
						createdDate(formatString: "YYYY-MM-DD")
						thumbnail {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	`);
    // console.log(data)
    return (
        <div>
            <Seo title="インフォメーション" />
            <p>インフォメーション</p>
            <p>{data.allContentfulBlogPost.totalCount}件表示</p>

            {data.allContentfulBlogPost.edges.map((edge, index) => (
                <div key={index}>
                    <div>title / {edge.node.title}</div>
                    <div>date / {edge.node.createdDate}</div>

                    <Link to={edge.node.slug}>Show More: {edge.node.title}</Link>

                    <img
                        src={edge.node.thumbnail.fluid.src}
                        alt={edge.node.thumbnail.description}
                    />
                </div>
            ))}
        </div>
    );
};
export default InformationPage;
