import {defineField, defineType} from 'sanity'

export const QuestionCategory = defineType({
  name: 'question-category',
  title: 'Question Category',
  type: 'document',
  fields: [
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'category'},
      validation: (rule) => rule.required(),
    }),
  ],
})
