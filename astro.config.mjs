import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://alexafazio.dev',
  integrations: [tailwind(), mdx(), sitemap(), icon({
    include: {
      lucide: ["github", "external-link", "youtube", "twitch", "linkedin", "instagram", "chevron-right"],
    },
  })],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});