import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'foundation',
  title: 'Foundation',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Title', validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug',  options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'description', type: 'text',   title: 'Short description' }),
    defineField({
      name: 'body', title: 'Content', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'figmaUrl', type: 'url', title: 'Figma reference URL' }),
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
})