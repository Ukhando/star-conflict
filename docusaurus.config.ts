import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '(Unofficial) Star Conflict Documentation',
  tagline: 'Small snippets of information about hosting a Star Conflict server',
  favicon: 'img/star-conflict.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ukhando.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/star-conflict',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ukhando', // Usually your GitHub org/user name.
  projectName: 'star-conflict', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch to deploy to GitHub Pages.
  trailingSlash: false, // GitHub Pages does not like trailing slashes in the URLs.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ukhando/star-conflict/tree/main/',
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
            'https://github.com/ukhando/star-conflict/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Star Conflict',
      logo: {
        alt: 'My Site Logo',
        src: 'img/star-conflict.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hostingGuideSidebar',
          position: 'left',
          label: 'Hosting Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'clientGuideSidebar',
          position: 'left',
          label: 'Client Guide',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ukhando/star-conflict',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Official',
          items: [
            {
              label: 'Official Website',
              href: 'https://star-conflict.com/#g-1',
            },
            {
              label: 'Official Wiki',
              href: 'https://wiki.star-conflict.com/index.php?title=Main_Page',
            },
            {
              label: 'Steam Page',
              href: 'https://store.steampowered.com/app/212070/Star_Conflict',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Star Conflict SubReddit',
              href: 'https://reddit.com/r/StarConflict',
            },
            {
              label: 'Star Conflict: The Outpost',
              href: 'https://www.sc-outpost.com/',
            },
            {
              label: 'Star Conflict Community Edition Google Doc',
              href: 'https://docs.google.com/document/d/1FVFKNYQdCZJGlXSTMVnP4IPsPz9fFg5pZaMj2B4lx1w/edit?tab=t.0#heading=h.kd9uivvcy16i',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CoV-Tech. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
