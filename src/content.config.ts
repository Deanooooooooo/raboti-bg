import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const agents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/agents" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string(),
    status: z.enum(["live", "soon"]),
    price: z.number().nullable(),
    priceLabel: z.string(),
    currency: z.string().default("EUR"),
    startTime: z.string(),
    summary: z.string(),
    description: z.string(),
    accent: z.string(),
    accentSoft: z.string(),
    duties: z.array(z.string()),
    integrations: z.array(z.string()),
    features: z.array(z.string()),
    faqs: z.array(faqSchema),
    seoTitle: z.string(),
    seoDescription: z.string(),
    externalUrl: z.url().optional(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    directAnswer: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    relatedAgent: z.string(),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    sources: z.array(z.object({ name: z.string(), url: z.url() })).optional(),
  }),
});

export const collections = { agents, blog };
