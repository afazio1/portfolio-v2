---
title: "Breaking the Cycle: Strategies for Finishing Software Projects"
description: "Here's how I stay motivated and focused during the development process."
pubDate: "Jun 08 2023"
tags: ["development"]
---

As a software developer, the fact that I can just open my computer and create almost anything is still mind-boggling. I would argue that today computer science is more accessibly than any other engineering field. When creating a (small) software, there's often no initial cost or materials that could act as barriers. In an ecosystem curated for turning ideas into products, why was I never able to hit the ground running? Specifically, why did I always leave projects unfinished?

>By **finished** project, I mean the project is deployed to production or ready to be showcased. A software project is never truly "finished". 95% of the time it needs to be maintained and continuously updated.

## The Problem
I often have a lot of ideas when it comes to software creation. The trouble I run into is bringing these ideas to life in a timely manner. At my first university Hackathon, I really felt this struggle. 

I was confident I had a good idea for the project. I began planning tons of features before I had even started coding. By the time the Hackathon was over, I had not even completed a single feature. I vowed that I would finish the project in my free time, but this never happened. I had planned so many complicated features that I didn't even want to start the project. This is when I realized my development process was flawed. 

## Minimum Viable Product
Recently, I released [Markdown Blogger](https://github.com/afazio1/obsidian-markdown-blogger), a plugin for [Obsidian](https://obsidian.md) that makes it easy to publish my markdown notes as a post on my blog site. During the planning process, I approached this project differently.

![Markdown Blogger Demo](https://raw.githubusercontent.com/afazio1/obsidian-markdown-blogger/main/images/md-blogger-demo.gif)

I think the concept of a "Minimum Viable Product" (MVP) really helped me to ship my plugin, let alone in just 4 days. This kept me focused on building something that first and foremost is usable. 

### Know Your Strengths
I envisioned adding a nice little UI component with buttons to push and pull notes. After some research, I realized that this would be harder to implement than I expected. I'm also just more experienced in backend. With this in mind, I decided to start by creating the features in the simplest way possible. For the Obsidian API (and my skill set), this happened to be through Commands where I didn't have to worry about the UI as much. 

>I'm not saying to complete all side-projects in the easiest way possible. Sometimes people create side-projects with the intentions of learning a new technology and have no interest in deploying it. 

### Core Features
When I plan projects, I tend to get excited and start adding tons of features. Soon, I'm adding features on top of my features to fix other features. Doing this in the planning phase is dangerous. Any dev finds a huge feature list daunting, and this often prevented me from even *starting* a project. 

Originally, in Markdown Blogger, I had wanted users to be able to:
- push and pull notes between Obsidian and their local project
- deploy their site from Obsidian
- parse out Obsidian-specific `md` syntax like Backlinks and Tags

I ended up only implementing one of these features: the push & pull. I deemed this feature to be the only one truly *essential* to the plugin. I sorted the other features into "Nice to have" and "Future features" categories. Why spend time developing features that users might not even want?

## Get Feedback
Sticking to the MVP forced me to capitalize on my strengths and simplify the functionality of my plugin. This strategy allowed me to build faster, test better, and stay motivated throughout the development process. Now, I just have to wait and see how the community uses (or doesn't use) the plugin. Once I get feedback, I can add requested features and tweak existing ones knowing I am not "wasting" my time on features users don't want. 

























