// @ts-check
// docusaurus.config.js — SupCrud by Crudzaso
// Configurado para GitHub Pages desde el inicio (evita retrabajos en D5)

const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SupCrud by Crudzaso',
  tagline: 'Documentación técnica oficial',

  // ⚠️ IMPORTANTE para GitHub Pages:
  // Reemplaza 'TU_ORG_O_USER' con el usuario/org de GitHub donde está el repo supcrud-docs
  url: 'https://SupCrud-Original.github.io',
  baseUrl: '/supcrud-docs/',

  organizationName: 'SupCrud-Original', // GitHub org o username
  projectName: 'supcrud-docs',        // Nombre exacto del repo en GitHub
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',      // ← agregar esta línea (antes probablemente dice 'throw')
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        blog: false, // No usamos blog
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
        title: '',
        logo: {
          alt: 'SupCrud Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/arquitectura/overview',
            label: 'Arquitectura',
            position: 'left',
          },
          {
            to: '/docs/addons/overview',
            label: 'Add-ons',
            position: 'left',
          },
          {
            to: 'docs/despliegue/links',
            label: 'Despliegue',
            position: 'left',
          },
          {
            href: 'https://github.com/SupCrud-Original/supcrud-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              { label: 'Introducción', to: '/' },
              { label: 'Arquitectura', to: '/docs/arquitectura/overview' },
              { label: 'Flujos', to: '/docs/flujos/creacion-ticket' },
            ],
          },
          {
            title: 'Proyecto',
            items: [
              { label: 'Add-ons', to: '/docs/addons/overview' },
              { label: 'Despliegue', to: '/docs/despliegue/links' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Crudzaso — Clan Turing Tesla McCarthy. Documentación construida con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'javascript'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
