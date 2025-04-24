// docusaurus.config.js
module.exports = {
  title: 'Portifólio Mauricio Alves RPA & Hiperautomação',
  tagline: 'Transformando processos com tecnologia',
  url: 'https://msantostkd.github.io/',
  baseUrl: '/portifolio-mauricio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'msantostkd',
  projectName: 'portifolio-mauricio',
  themeConfig: {
    navbar: {
      title: 'Portifolio',
      items: [
        { to: 'docs/sobre', label: 'Sobre', position: 'left' },
        { to: 'docs/projetos', label: 'Projetos', position: 'left' },
        { to: 'docs/solucoes', label: 'Soluções', position: 'left' },
        { to: 'docs/curriculo', label: 'Currículo', position: 'left' },
        { href: 'https://msantostkd.github.io/portifolio-mauricio/', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Consultor em RPA`,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js'), editUrl: undefined },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};