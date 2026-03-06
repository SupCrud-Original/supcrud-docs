// sidebars.js — Estructura de navegación lateral de SupCrud Docs

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Introducción',
    },
    {
      type: 'category',
      label: '🏗️ Arquitectura',
      collapsible: true,
      collapsed: false,
      items: [
        'arquitectura/overview',
        'arquitectura/stack',
        'arquitectura/modelo-datos',
      ],
    },
    {
      type: 'category',
      label: '🔄 Flujos',
      collapsible: true,
      collapsed: false,
      items: [
        'flujos/creacion-ticket',
        'flujos/consulta-publica',
        'flujos/otp',
      ],
    },
    {
      type: 'category',
      label: '🧩 Add-ons',
      collapsible: true,
      collapsed: false,
      items: [
        'addons/overview',
        'addons/attachments',
        'addons/ai-assist',
      ],
    },
    {
      type: 'category',
      label: '🚀 Despliegue',
      collapsible: true,
      collapsed: false,
      items: [
        'despliegue/variables-entorno',
        'despliegue/links',
      ],
    },
  ],
};

module.exports = sidebars;
