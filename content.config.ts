import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    tools: defineCollection({
      source: 'tools/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        link: z.string(),
        svg: z.string(),
        alt: z.string(),
        description: z.string(),
        category: z.array(z.string())
      })
    }),
    projects: defineCollection({
      source: 'projects/*.md',
      type: 'page'
    }),
    works: defineCollection({
      source: 'works/*.md',
      type: 'page'
    })
  }
})
