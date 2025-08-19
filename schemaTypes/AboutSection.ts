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
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Why Choose Us',
      name: 'whyChooseUs',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
  ],
})
