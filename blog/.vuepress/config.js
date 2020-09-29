const path = require("path");
module.exports = {
  title: 'Wei-Lin Cheng',
  description: 'Dad, husband, product engineer. Learning to become a software engineer.',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    directories: [
      {
        id: "zh",
        dirname: "_zh",
        title: "中文",
        path: "/zh/",
        itemPermalink: "/zh/:year/:month/:day/:slug"
      },
      {
        id: "en",
        dirname: "_en",
        title: "English",
        path: "/en/",
        itemPermalink: "/en/:year/:month/:day/:slug"
      }
    ],
    feed: {
      canonical_base: "https://weilincheng.com"
    },
    sitemap: {
      hostname: "https://weilincheng.com"
    },
    nav: [
      {
        text: 'English',
        link: '/en/',
      },
      {
        text: '中文',
        link: '/zh/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/weilincheng',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/weilincheng',
        },
        {
          type: 'facebook',
          link: 'https://www.facebook.com/slashengineer',
        },
      ],
      copyright: [
        {
          text: 'WEI-LIN CHENG @ 2020',
          link: '',
        },
      ],
    },
    smoothScroll: true
  },
  alias: {
    "@assets": path.resolve(__dirname, "../assets")
  }
}
