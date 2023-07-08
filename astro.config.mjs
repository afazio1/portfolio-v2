import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.alexafazio.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	}
});
