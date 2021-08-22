# Add Blog use MarkDown

## Flow

### \[WIP\] 導入フロー

### Slug

[https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/\#onCreateNode](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode)

```javascript
query{
  allMarkdownRemark{
    edges{
      node {
        fields{
          slug
        }
      }
    }
  }
}

```

