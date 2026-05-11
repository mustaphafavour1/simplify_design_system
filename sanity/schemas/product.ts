import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name',        type: 'string', title: 'Product name', validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug', options: { source: 'name' }, validation: R => R.required() }),
    defineField({ name: 'tagline',     type: 'string', title: 'Tagline' }),
    defineField({ name: 'description', type: 'text',   title: 'Description' }),
    defineField({ name: 'logo',        type: 'image',  title: 'Product logo', options: { hotspot: true } }),
    defineField({
      name: 'type', title: 'Product type', type: 'string',
      options: { list: [{ value: 'web', title: 'Web App' }, { value: 'mobile', title: 'Mobile App' }, { value: 'portal', title: 'Portal' }] },
    }),
    defineField({
      name: 'body', title: 'Documentation', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'figmaUrl', type: 'url', title: 'Figma file URL' }),
    defineField({
      name: 'screenshots', title: 'Screenshots', type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'caption', type: 'string', title: 'Caption' }] }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'tagline', media: 'logo' } },
})