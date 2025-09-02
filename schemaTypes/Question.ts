import {defineField, defineType} from 'sanity'

export const Question = defineType({
  title: 'Question',
  name: 'question',
  type: 'document',
  fields: [
    defineField({
      title: 'Question',
      name: 'question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Answer',
      name: 'answer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'question-category'}}],
    }),
  ],
})
