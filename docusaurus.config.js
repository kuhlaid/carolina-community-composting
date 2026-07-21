// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carrrboro Composting',
  tagline: 'The Composting Guide to Carolina Community Composting data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // trying https://github.com/cmfcmf/docusaurus-search-local
  // plugins: ["@cmfcmf/docusaurus-search-local"],

  // waiting on fix for https://github.com/askorama/orama/issues/728 before adding search capabilities
  // plugins: ["@orama/plugin-docusaurus-v3"],

  // (does not work as of Aug. 2 due to .docusaurus/orama-search-index-current.json.gz file not existing)trying orama cloud search index
  // plugins: [
  //   [
  //     "@orama/plugin-docusaurus-v3",
  //     {
  //       cloud: {
  //         indexId: "https://cloud.orama.run/v1/indexes/go-unc-edu-bogqoa",
  //         oramaCloudAPIKey: process.env.ORAMA_CLOUD_API_KEY, // Env variable suggested
  //         deploy: "default" // Enables deploy while building/starting
  //       },
  //     },
  //   ],
  // ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true, // show date on documents
          showLastUpdateAuthor: true,  // show author who performed update
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'The Composting Guide to Carolina Community Composting',
        logo: {
          alt: 'The Composting Guide Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'leftSidebar',
            position: 'left',
            label: 'Menu',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kuhlaid/carolina-community-composting',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Read the Composting Guide',
                to: '/composting-options',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact Us',
                to: '/contact',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carrrboro Composting Project. Site built with the open Docusaurus site generation framework.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
