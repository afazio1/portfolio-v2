---
title: "Making my Dev Blog using Astro.js 🚀"
description: "Astro.js caught my interest due to its SSG capabilities and compatibility with markdown."
pubDate: "May 07 2023"
heroImage: "/images/astro-logo.webp"
tags: ["development"]
---

## Welcome
Hi, I'm Alexa. A developer, college student, and YouTuber. This is my dev blog.

I plan to use this blog as a way to solidify my thoughts and understandings of certain concepts. Let's talk about how I developed it.

## A Sea of JavaScript Frameworks
I often watch the YouTube channels [Fireship.io](https://www.youtube.com/@Fireship), [ThePrimeagen](https://www.youtube.com/@ThePrimeagen), and [Theo](https://www.youtube.com/@t3dotgg), which focus on an array of programming topics including web development.  It seems like every other day Fireship.io is introducing a new JavaScript framework and ThePrimeagen and Theo are pointing out flaws in old and new ones. The constant debate makes it difficult to choose the "right" one. 

## Why Astro.js
[Astro.js](https://astro.build) is a relatively new all-in-one JavaScript framework. Like most other frameworks, it sells itself on performance (speed) as well as other features like new architecture techniques (Component Islands), support for a bunch of UI frameworks (React, Svelte, Vue, Solid, etc), and customizability (Tailwind, MDX, 100+ other integrations). However, these are not the features that made Astro stand out for me.

### Futuristic SSG
Astro does static site generation (SSG) better than any other framework I've seen. In fact, that is its main purpose. The API functionalities like server-side rendering (SSR) and endpoints are features that devs can **choose** to opt-in to. The focus on SSG and Zero JS makes Astro different from frameworks like Next.js, which aren't as content-focused.

### Markdown Support
After picking up the note-taking software Obsidian in 2021, I've grown accustomed to taking notes in markdown. I wanted to be able to use this same syntax to generate blog posts. Markdown support comes built-in to any Astro project. No need to setup a parser or manually reformat markdown syntax to HTML. 

To get support for LaTeX using dollar sign syntax (this is something Obsidian has out-of-box), I had to do some fiddling with the Astro config files but it was easy enough.

Haters will say it's fake:
$$E=mc^{2}$$
> I accomplished this effect by installing the [remark-math](https://www.npmjs.com/package/remark-math) (for detecting dollar signs in md) and [rehype-katex](https://www.npmjs.com/package/rehype-katex) (for converting latex strings into HTML) npm packages. Then, I configured them inside `astro.config.mjs`. Here's the config [file](https://github.com/afazio1/alexa-blog/blob/development/astro.config.mjs) if you're curious.

## Blog Template, My Beloved
Astro's build tool offers an option to create a project using their Blog Template. Just run
`npm create astro@latest` and select the blog template option. It scaffolds a whole project and configures MDX by default. One thing I noticed is that the template seems to enforce TypeScript even though I selected not to use TypeScript in the build tool prompt. I should probably learn TypeScript anyway!

I found that the project layout was very similar to that of Next.js. For instance, Astro has a `pages` folder for File-System Routing. This makes using Astro a smooth transition for developers who are familiar with Next.js. 

## Astro Syntax
I thought learning Astro syntax would be a pain, but it's very similar to JSX. I enjoyed that `.astro` files are basically just templates rather than a full-fledge UI framework like React or Vue. It reminds me of using a templating package like EJS, but with modern JSX-like syntax.

## Putting it in Perspective
I'm not completely finished with my blog, but Astro has made the development process easy and enjoyable. The learning curve is miniscule, the performance is great, and it just works. It doesn't feel like I'm learning a new framework. I don't feel constrained by Astro at all. It's relatively unopinionated, but still keeps up with cutting-edge web development features. Just last year it took me **2 months** to create my [Developer Portfolio](https://alexafazio.dev) (granted it is technically full stack). I've made more progress using Astro in just **2 hours**. Now that's **developer experience**++!