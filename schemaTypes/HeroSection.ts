import {defineField, defineType} from 'sanity'

export const HeroSection = defineType({
  name: 'hero-section',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'headerTitle',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
  ],
})
