import {defineField, defineType} from 'sanity'

export const MarketSection = defineType({
  name: 'market-section',
  title: 'Markets',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Markets',
      name: 'markets',
      type: 'array',
      of: [{type: 'reference', to: {type: 'market'}}],
    }),
  ],
})
