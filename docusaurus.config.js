// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MALmetrics Docs',
  tagline: 'Documentación oficial y guías de usuario',
  favicon: 'img/malmetrics-logo.svg',

  url: 'https://Afard-max.github.io',
  baseUrl: '/malmetrics-docs/',
  organizationName: 'Afard-max',
  projectName: 'malmetrics-docs', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, 
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'MALmetrics',
        // Redirigimos el título al propio manual para que actúe como "Home" de la documentación
        logo: {
          src: 'img/malmetrics-logo.svg', 
          href: '/', 
          target: '_self',
        },
        items: [
          {
            href: 'http://localhost:5173/', // <-- Este es tu único portal de salida hacia la App
            label: 'Volver a la App',
            position: 'right',
            target: '_self',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contáctame',
            items: [
              {
                label: 'Correo Electrónico',
                href: 'mailto:af.alexander.rd@gmail.com', // El protocolo 'mailto:' invoca el selector nativo del SO
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ruizdiazalexandertech/', 
              },
            ],
          },
          {
            title: 'Desarrollo',
            items: [
              {
                label: 'Perfil de GitHub',
                href: 'https://github.com/Afard-max', 
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'API de MyAnimeList',
                href: 'https://myanimelist.net/apiconfig/references/api/v2',
              },
              {
                label: 'Repositorio Original',
                href: 'https://github.com/Afard-max/malmetrics',
              },
            ],
          },
          {
            title: 'Navegación',
            items: [
              {
                label: 'Volver a la parte superior ⭡',
                to: '#', 
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MALmetrics. Desarrollado por: Ruiz Díaz, Alexander.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;