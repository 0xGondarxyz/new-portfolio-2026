import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diary = defineCollection({
  loader: glob({ base: './src/content/diary', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    youtube: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),
  }),
});

export const collections = { diary };
