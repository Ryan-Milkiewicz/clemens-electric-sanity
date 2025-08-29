import {defineField, defineType} from 'sanity'

export const AboutSection = defineType({
  name: 'about-section',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Alt Text',
      name: 'altText',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
  ],
})
