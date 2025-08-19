import {defineField, defineType} from 'sanity'

export const ServicesSection = defineType({
  name: 'services-section',
  title: 'Services',
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
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{type: 'reference', to: {type: 'service'}}],
    }),
  ],
})
