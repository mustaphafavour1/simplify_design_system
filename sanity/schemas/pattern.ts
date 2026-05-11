import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pattern',
  title: 'Pattern',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Pattern name', validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug', options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'description', type: 'text',   title: 'Description' }),
    defineField({ name: 'coverImage',  type: 'image',  title: 'Cover image', options: { hotspot: true } }),
    defineField({
      name: 'body', title: 'Body', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'relatedComponents', title: 'Related components', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'component' }] }],
    }),
    defineField({ name: 'figmaUrl', type: 'url', title: 'Figma URL' }),
  ],
  preview: { select: { title: 'title', media: 'coverImage' } },
})