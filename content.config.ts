import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    tools: defineCollection({
      source: 'tools/*.md',
      type: 'page'
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
