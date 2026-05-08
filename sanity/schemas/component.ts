import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'component',
  title: 'Component',
  type: 'document',
  groups: [
    { name: 'overview',    title: 'Overview' },
    { name: 'usage',       title: 'Usage' },
    { name: 'props',       title: 'Props & API' },
    { name: 'assets',      title: 'Assets' },
    { name: 'meta',        title: 'Meta' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Component name',
      type: 'string',
      group: 'overview',
      validation: R => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'meta',
      options: { source: 'name' },
      validation: R => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { value: 'actions',      title: 'Actions' },
          { value: 'forms',        title: 'Forms & Inputs' },
          { value: 'navigation',   title: 'Navigation' },
          { value: 'data-display', title: 'Data Display' },
          { value: 'feedback',     title: 'Feedback & Overlays' },
          { value: 'layout',       title: 'Layout' },
          { value: 'mobile',       title: 'Mobile' },
        ],
      },
      validation: R => R.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { value: 'stable', title: '✅ Stable' },
          { value: 'beta',   title: '🟡 Beta' },
          { value: 'draft',  title: '⚪ Draft' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 3,
      group: 'overview',
      description: 'One or two sentences. Shown in the page header and component index.',
      validation: R => R.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Full documentation',
      type: 'array',
      group: 'usage',
      description: 'Detailed usage, anatomy, behaviour, and guidelines.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
            { name: 'alt',     type: 'string', title: 'Alt text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'dos',
      title: "Do's",
      type: 'array',
      group: 'usage',
      of: [{ type: 'string' }],
      description: 'What to do. Keep each item to one sentence.',
    }),
    defineField({
      name: 'donts',
      title: "Don'ts",
      type: 'array',
      group: 'usage',
      of: [{ type: 'string' }],
      description: 'What not to do. Keep each item to one sentence.',
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      group: 'overview',
      of: [{
        type: 'object',
        name: 'variant',
        fields: [
          { name: 'name',        type: 'string', title: 'Variant name' },
          { name: 'description', type: 'text',   title: 'When to use' },
          { name: 'preview',     type: 'image',  title: 'Preview image', options: { hotspot: true } },
        ],
      }],
    }),
    defineField({
      name: 'props',
      title: 'Props / API',
      type: 'array',
      group: 'props',
      of: [{
        type: 'object',
        name: 'prop',
        fields: [
          { name: 'name',        type: 'string',  title: 'Prop name',     validation: (R: any) => R.required() },
          { name: 'propType',    type: 'string',  title: 'Type',          validation: (R: any) => R.required() },
          { name: 'defaultVal',  type: 'string',  title: 'Default value' },
          { name: 'required',    type: 'boolean', title: 'Required?',     initialValue: false },
          { name: 'description', type: 'text',    title: 'Description',   rows: 2 },
        ],
      }],
    }),
    defineField({
      name: 'codeExamples',
      title: 'Code examples',
      type: 'array',
      group: 'props',
      of: [{
        type: 'object',
        name: 'codeExample',
        fields: [
          { name: 'title',   type: 'string', title: 'Title (e.g. "Basic usage")' },
          { name: 'code',    type: 'text',   title: 'Code snippet' },
          { name: 'language', type: 'string', title: 'Language', options: { list: ['tsx', 'jsx', 'html', 'css'] }, initialValue: 'tsx' },
        ],
      }],
    }),
    defineField({
      name: 'figmaUrl',
      title: 'Figma component URL',
      type: 'url',
      group: 'assets',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview image',
      type: 'image',
      group: 'assets',
      description: 'Main component screenshot from Figma.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'relatedComponents',
      title: 'Related components',
      type: 'array',
      group: 'meta',
      of: [{ type: 'reference', to: [{ type: 'component' }] }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'previewImage' },
    prepare({ title, subtitle, media }: any) {
      return { title, subtitle: subtitle?.replace('-', ' '), media }
    },
  },
})
