// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yet Another Blog',
  tagline: 'Potatoes are cool',
  url: 'https://blog.protonplus.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Favi.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'protonplus-org', // Usually your GitHub org/user name.
  projectName: 'plusblog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          routeBasePath: '/',// Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logodark.svg',
          srcDark: 'img/logolight.svg',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Discover',
            items: [
              {
                label: 'Apply Maintainership',
                href: 'https://forms.gle/k16DxWGm3QHNwi8EA',
              },
              {
                label: 'Donate',
                href: 'https://t.me/YetAnotherAkatsuki/7',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/protonpluschat',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/helloprotonplus',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
              {
                label: 'Website',
                href: 'https:protonplus.xyz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/protonplus-org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://t.me/YetAnotherAkatsuki">AKATSUKI.<a/><br><span style="color:'FF3509';padding-top:1em"></span>`,
      },  
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
