import {defineField, defineType} from 'sanity'

export const DynamicCityPages = defineType({
  title: 'Dynamic City Pages',
  name: 'dynamic-city-pages',
  type: 'document',
  fields: [
    defineField({
    name: 'pageType',
    type: 'string',
    options: {
        list: [
        {title: 'Electrician', value: 'electrician'},
        {title: 'EV Charger', value: 'ev-charger'},
        {title: 'Solar Installer', value: 'solar-installer'},
        {title: 'Standby Generator', value: 'standby-generator'},
        ]
    },
  validation: (rule) => rule.required().error('Please select a page type.'),
}),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
        defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})