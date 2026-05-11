import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'brandPage',
  title: 'Brand Page',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Title', validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug', options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'description', type: 'text',   title: 'Description' }),
    defineField({
      name: 'body', title: 'Content', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: { select: { title: 'title' } },
})