// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const uri = process.env.NEXT_PUBLIC_VERCEL_URL
   ? process.env.NEXT_PUBLIC_VERCEL_URL
   : "http://localhost:3000/";

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: "SukiBlog",
   tagline: "Rising from thr Dawn",
   url: uri,
   baseUrl: "/blog",
   onBrokenLinks: "throw",
   onBrokenMarkdownLinks: "warn",
   favicon: "img/Favi.ico",

   // GitHub pages deployment config.
   // If you aren't using GitHub pages, you don't need these.
   organizationName: "Akatsuki", // Usually your GitHub org/user name.
   projectName: "SukiBlog", // Usually your repo name.

   // Even if you don't use internalization, you can use this field to set useful
   // metadata like html lang. For example, if your site is Chinese, you may want
   // to replace "en" with "zh-Hans".
   i18n: {
      defaultLocale: "en",
      locales: ["en"],
   },

   presets: [
      [
         "classic",
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            blog: {
               showReadingTime: true,
               routeBasePath: "/", // Please change this to your repo.
               // Remove this to remove the "edit this page" links.
            },
            theme: {
               customCss: require.resolve("./src/css/custom.css"),
            },
         }),
      ],
   ],

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         navbar: {
            logo: {
               alt: "My Site Logo",
               src: "img/logolight.svg",
               srcDark: "img/logodark.svg",
            },
            items: [],
         },
         footer: {
            style: "dark",
            links: [
               {
                  title: "Discover",
                  items: [
                     {
                        label: "Apply Maintainership",
                        href: "https://genesisos.dev/joinus",
                     },
                     {
                        label: "Donate",
                        href: "https://t.me/AkatsukiProjects/9",
                     },
                  ],
               },
               {
                  title: "Community",
                  items: [
                     {
                        label: "Telegram",
                        href: "https://t.me/GenesisOSChat",
                     },
                     {
                        label: "Twitter",
                        href: "https://twitter.com/TheGenesisOS",
                     },
                  ],
               },
               {
                  title: "About Us",
                  items: [
                     {
                        label: "Website",
                        href: "https://genesisos.dev",
                     },
                     {
                        label: "GitHub",
                        href: "https://github.com/GenesisOS",
                     },
                  ],
               },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://t.me/AkatsukiProjects">AKATSUKI.<a/><br><span style="color:'FF3509';padding-top:1em"></span>`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
         },
      }),
};

module.exports = config;
