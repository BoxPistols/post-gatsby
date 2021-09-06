module.exports = {
    siteMetadata: {
        title: `Gatsby DesignOps`,
        description: ` DesignOps with Great Gatsby`,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `posts`,
        //         path: `./src/content/posts`,
        //     },
        // },

        // マークダウン関連の設定
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 640,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                // Override the file regex for Sass
                sassRuleTest: /\.global\.s(a|c)ss$/,
                // Override the file regex for CSS modules
                sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
