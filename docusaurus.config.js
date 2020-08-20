module.exports = {
  title: 'CodeNOW',
  tagline: 'Software factory',
  url: 'https://VitSestak.github.io',
  baseUrl: '/code_now/',
  favicon: 'img/logo_cn.svg',
  organizationName: 'VitSestak', // Usually your GitHub org/user name.
  projectName: 'code_now', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/whiteLogo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        /*{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      //style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Home page',
              href: 'https://www.codenow.com/',
            },
            {
              label: 'Documentation ',
              href: 'https://docs.factory.codenow-dev.codenow.com/docs/',
            },
            {
              label: 'Sign up ',
              href: 'https://www.codenow.com/sign-up/',
            },
          ],
        },
        {
          title: 'Why CodeNOW',
          items: [
            {
              label: 'The Platform',
              href: 'https://www.codenow.com/the-platform/',
            },
            {
              label: 'IT leaders',
              href: 'https://www.codenow.com/it-leaders/',
            },
            {
              label: 'Business leaders',
              href: 'https://www.codenow.com/business-leaders/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About us',
              href: 'https://www.codenow.com/about-us/',
            },
          ],
        },
      ],
      copyright: `© Stratox Cloud Native, s. r. o. 2020. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "docIntro",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/VitSestak/code_now/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/VitSestak/code_now/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
