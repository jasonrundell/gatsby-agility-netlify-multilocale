require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const agilityConfig = {
  guid: process.env.AGILITY_GUID,
  accessToken: process.env.AGILITY_API_KEY,
}

module.exports = {
  siteMetadata: {
    title: 'A Gatsby + AgilityCMS + Netlify bolierplate multi-locale project',
  },
  plugins: [
    {
      resolve: '@agility/gatsby-source-agilitycms', //the name of the plugin
      options: {
        guid: agilityConfig.guid, //your Agility Content Fetch API Guid
        apiKey: agilityConfig.accessToken, //your Agility Content Fetch API Key
        sharedContent: ['posts', 'globalheader'], //a list of reference names you want to include in your GraphQL store
        languages: ['en-ca', 'fr-ca'], //the languages you want to include
        channels: ['website'], //the channels you want to include
        defaultPageTemplate: './src/templates/AgilityPage.js', //the page template that will be used to render Agility CMS pages
        indexPage: '/home', //If you want an Agility CMS page to be your home page (i.e. '/home' to be used as '/'), set the page path here
      },
    },
  ],
}