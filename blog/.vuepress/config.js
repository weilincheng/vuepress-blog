module.exports = {
  title: 'Wei-Lin Cheng',
  description: 'Dad, husband, product engineer. Learning to become a software engineer.',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    feed: {
      canonical_base: "https://weilincheng.com"
    },
    sitemap: {
      hostname: "https://weilincheng.com"
    },
    nav: [
      {
        text: 'Blog',
        link: '/',
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
  },
}
