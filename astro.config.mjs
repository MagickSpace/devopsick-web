import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://devopsick.com',
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    gfm: true
  }), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), partytown({
    config: {
      forward: ['dataLayer.push'],
      debug: false
    }
  }),]
});