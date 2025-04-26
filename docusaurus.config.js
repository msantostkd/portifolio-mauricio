// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mauricio Alves',
  tagline: 'Explorando soluções em automação, processos e arquitetura de soluções',
  url: 'https://msantostkd.github.io',
  baseUrl: '/portifolio-mauricio/',
  favicon: 'img/msahiperautomation.ico',

  organizationName: 'msantostkd', // Nome de usuário do GitHub
  projectName: 'portifolio-mauricio', // Nome do repositório no GitHub

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  themeConfig: {
    image: 'img/PerfilMauricio.JPG',
    navbar: {
      title: 'Mauricio Alves',
      logo: {
        alt: 'Logo Mauricio Alves',
        src: 'img/logo.png',
      },
      items: [
        { to: '/sobre', label: 'Sobre', position: 'left' },
        { to: '/projetos', label: 'Projetos', position: 'left' },
        { to: '/solucoes', label: 'Soluções', position: 'left' },
        { to: '/curriculo', label: 'Currículo', position: 'left' },
        { to: '/carreira', label: 'Carreira', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'mySidebar',
          position: 'left',
          label: 'Conteúdos Técnicos',
        },
        {
          href: 'https://github.com/msantostkd/portifolio-mauricio',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/mauricio-santos-alves/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://wa.me/5511974290558',
          label: 'WhatsApp',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conteúdo',
          items: [
            { label: 'Conteúdos Técnicos', to: '/intro' },
            { label: 'Carreira', to: '/carreira' },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/mauricio-santos-alves/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/msantostkd',
            },
            {
              label: 'WhatsApp',
              href: 'https://wa.me/5511974290558',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mauricio Alves.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // se quiser que os docs sejam a home
          editUrl: undefined,
        },
        blog: false, // Desativa blog, se não for usar
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
