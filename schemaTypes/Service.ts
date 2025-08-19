import {defineField, defineType} from 'sanity'

export const Service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'image',
    }),
  ],
})
