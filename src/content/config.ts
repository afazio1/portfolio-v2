import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: image().optional(),
		heroAlt: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

const projects = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		heroImage: image().optional(),
		heroAlt: z.string().optional(),
		techstack: z.array(z.string()),
		github: z.string(),
		demo: z.string().optional(),
	}),
});

export const collections = { blog, projects };
