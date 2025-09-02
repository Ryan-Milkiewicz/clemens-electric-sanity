import {defineField, defineType} from 'sanity'

export const FAQSection = defineType({
  name: 'FAQ-section',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Question',
      name: 'question',
      type: 'array',
      of: [{type: 'reference', to: {type: 'question'}}],
    }),
  ],
})
