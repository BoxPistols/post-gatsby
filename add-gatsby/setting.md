---
description: 既存のフォルダにGatsbyを追加
---

# Step1 Setting

{% embed url="https://www.gatsbyjs.com/docs/reference/gatsby-cli/" %}

```rust

yarn add global gatsby-cli

gatsby new

What would you like to call your site?
✔ · My Gatsby

What would you like to name the folder where your site will be created?
✔ gatsby/ my-gatsby

? Will you be using a CMS?
(Single choice) Arrow keys to move, enter to confirm
No (or I'll add it later)
–
WordPress
❯ Contentful
Sanity
DatoCMS
Shopify
Netlify CMS

? Would you like to install a styling system?
(Single choice) Arrow keys to move, enter to confirm
  No (or I'll add it later)
  –
  Sass
  styled-components
❯ Emotion
  PostCSS
  Theme UI

? Would you like to install additional features with other plugins?
(Multiple choice) Use arrow keys to move, enter to select, and choose "Done" to confirm your choices
 ◉ Build and host for free on Gatsby Cloud
 ◉ Add responsive images
 ◉ Add the Google Analytics tracking script
 ◉ Add page meta tags with React Helmet
 ◉ Add an automatic sitemap
 ◉ Generate a manifest file
 ◉ Add Markdown support (without MDX)
❯◉ Add Markdown and MDX support

✔ Would you like to install additional features with other plugins?
· Build and host for free on Gatsby Cloud
· Add responsive images
· Add the Google Analytics tracking script
· Add page meta tags with React Helmet
· Add an automatic sitemap
· Generate a manifest file
· Add Markdown support (without MDX)

Great! A few of the selections you made need to be configured. Please fill in the options for each plugin now:


? Configure the Contentful plugin.
See the plugin docs for help.
Use arrow keys to move between fields, and enter to finish
⊙  accessToken :
                 Contentful delivery api key, when using the Preview API use your Preview API key
⊙      spaceId : …
```



