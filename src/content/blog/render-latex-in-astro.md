---
title: "How To Render LaTeX In Markdown With Astro.js"
description: "A guide to bootstraping your Astro project with LaTeX support"
pubDate: "Sep 11 2023"
tags: ["development"]
---

After picking up the note-taking software Obsidian in 2021, I’ve grown accustomed to taking notes in markdown. I wanted to be able to use this same syntax to write blog posts. Markdown support comes built-in to any Astro project, but I found that LaTeX does not.

To get support for LaTeX using dollar sign syntax (this is something Obsidian has out-of-box), I had to install some packages and do some fiddling with the Astro config files.

#### Example
---

| Rendered | Source |
|---|---|
| $$E = mc^{2}$$  | `$$E = mc^{2}$$`|

---

## Install Packages
We have to install two packages that help with parsing the LaTeX at *build-time*. 

>It's important to note that these packages will convert your LaTeX to HTML just as Astro converts Markdown to HTML. 

### `remark-math`
This package will be used to detect dollar sign syntax in `.md` files. Essentially, any LaTeX we want to render will be wrapped in single `$` for inline and double `$$` for multi-line. 

To install run:
```sh
npm install remark-math
```

### `rehype-katex`
This package actually does the parsing and renders the math LaTeX. Again, at build-time, so our page load time doesn't suffer.

To install run:
```sh
npm install rehype-katex
```

## Tell Astro.js To Use It!
We'll need to tell Astro we want to use these two packages to render markdown at build-time. To do this we'll need to edit the `astro.config.mjs` file.

Our config file should look like this:
```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	site: 'https://blog.alexafazio.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	}
});
```
## Styling Our LaTeX
At this point, if we try to put LaTeX in our markdown and view it in the browser, we'll see that it doesn't look like the LaTeX we were promised. Inspecting this element, we can see that it's a bunch of `<span>`'s. 

To get the fancy LaTeX formatting we are looking for, **we must include the katex stylesheet** in our code. This stylesheet will know how to style all the `<span>`'s generated from the rendering step.

We can paste this somewhere in the `<head>` of our html. I usually put it inside a `BaseHead.astro` component, which is used on all my pages:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.css" integrity="sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM" crossorigin="anonymous">
```

> Note: This will add some overhead to our page load since the stylesheet has to be loaded.

## Done!
Enjoy your LaTeX in markdown! 