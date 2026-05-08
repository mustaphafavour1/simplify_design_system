import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navSection',
  title: 'Nav Section',
  type: 'document',
  description: 'Add custom sections to the design system sidebar. They appear between Products and Contributing.',
  fields: [
    defineField({
      name: 'label',
      title: 'Section label',
      type: 'string',
      description: 'What appears in the sidebar (e.g. "Guidelines", "Mobile", "Dark Mode")',
      validation: R => R.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 99,
    }),
    defineField({
      name: 'items',
      title: 'Nav items',
      type: 'array',
      of: [{
        type: 'object',
        name: 'navItem',
        fields: [
          defineField({ name: 'label', type: 'string', title: 'Label', validation: R => R.required() }),
          defineField({ name: 'slug',  type: 'string', title: 'Path slug', description: 'e.g. "guidelines/dark-mode" → becomes /guidelines/dark-mode', validation: R => R.required() }),
        ],
        preview: { select: { title: 'label', subtitle: 'slug' } },
      }],
    }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'label', subtitle: 'order' },
    prepare({ title, subtitle }: any) {
      return { title, subtitle: `Order: ${subtitle}` }
    },
  },
})