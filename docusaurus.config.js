// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'APRENDE A USAR EL INSPECTOR DE ELEMENTOS',
  tagline: 'Una guía gratuita que te servirá de mucho y navegar como un profesional',
  favicon: 'static/img/maddigi.ico',

  // Set the production url of your site here
  url: 'https://900112022.senati.chat.pe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // Agregamos las hojas de estilo para las fuentes personalizadas
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Vannicin',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Vannicin',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'INICIA TU APRENDIZAJE',
        logo: {
          alt: 'Mi Sitio Logo',
          src: 'https://i.ibb.co/wrgsXB67/MADDIGI-removebg-preview-1.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'CONTENIDO',
          },
          {
            href: 'https://github.com/Vannicin',
            label: 'GITHUB',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DOCUMENTACIÓN',
            items: [
              {
                label: 'INTRODUCCIÓN',
                to: '/docs/intro',
              },
              {
                label: 'GUÍAS',
                to: '/docs/category/tutorial-basics',
              },
            ],
          },
          {
            title: 'COMUNIDAD',
            items: [
              {
                label: 'DISCORD',
                href: 'https://discord.gg/yRDvZcsmZk',
              },
              {
                label: 'WHATSAPP',
                href: 'https://wa.me/51987654321',
              },
            ],
          },
          {
            title: 'MÁS',
            items: [
              {
                label: 'GITHUB',
                href: 'https://github.com/Vannicin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} APRENDE A USAR EL INSPECTOR DE ELEMENTOS. Construido con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;