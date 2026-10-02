import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = ['Destinations', 'Guides', 'Essays'] as const;

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      dek: z.string(),
      date: z.coerce.date(),
      category: z.enum(CATEGORIES),
      author: z.enum(['imogen', 'theo', 'aiko']),
      cover: image(),
      coverAlt: z.string(),
      coverCredit: z.object({ name: z.string(), url: z.string().url() }),
      featured: z.boolean().default(false),
    }),
});

export const collections = { posts };
