import { defineField, defineType } from 'sanity'

// ─── Foundation ────────────────────────────────────────────────────────────
export const foundation = defineType({
  name: 'foundation',
  title: 'Foundation',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string', title: 'Title',    validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',   title: 'Slug',     options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',   title: 'Short description' }),
    defineField({
      name: 'body', title: 'Body content', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'figmaUrl', type: 'url', title: 'Figma reference URL' }),
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
})

// ─── Pattern ───────────────────────────────────────────────────────────────
export const pattern = defineType({
  name: 'pattern',
  title: 'Pattern',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',  title: 'Pattern name',   validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',    title: 'Slug',           options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',    title: 'Description' }),
    defineField({ name: 'coverImage',  type: 'image',   title: 'Cover image',    options: { hotspot: true } }),
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

// ─── Brand Page ────────────────────────────────────────────────────────────
export const brandPage = defineType({
  name: 'brandPage',
  title: 'Brand Page',
  type: 'document',
  fields: [
    defineField({ name: 'title',       type: 'string',  title: 'Title',          validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',    title: 'Slug',           options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text',    title: 'Description' }),
    defineField({
      name: 'body', title: 'Content', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: { select: { title: 'title' } },
})

// ─── Product ───────────────────────────────────────────────────────────────
export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name',        type: 'string',  title: 'Product name',   validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',    title: 'Slug',           options: { source: 'name' } }),
    defineField({ name: 'tagline',     type: 'string',  title: 'Tagline' }),
    defineField({ name: 'description', type: 'text',    title: 'Description' }),
    defineField({ name: 'logo',        type: 'image',   title: 'Product logo',   options: { hotspot: true } }),
    defineField({
      name: 'type', title: 'Product type', type: 'string',
      options: { list: [{ value: 'web', title: 'Web App' }, { value: 'mobile', title: 'Mobile App' }, { value: 'portal', title: 'Portal' }] },
    }),
    defineField({
      name: 'body', title: 'Documentation', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'figmaUrl',    type: 'url',     title: 'Figma file URL' }),
    defineField({
      name: 'screenshots', title: 'Screenshots', type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'caption', type: 'string', title: 'Caption' }] }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'tagline', media: 'logo' } },
})

// ─── Changelog Entry ───────────────────────────────────────────────────────
export const changelogEntry = defineType({
  name: 'changelogEntry',
  title: 'Changelog Entry',
  type: 'document',
  fields: [
    defineField({ name: 'version',     type: 'string',  title: 'Version (e.g. v1.0.0)', validation: R => R.required() }),
    defineField({ name: 'releaseDate', type: 'date',    title: 'Release date',           validation: R => R.required() }),
    defineField({
      name: 'type', title: 'Release type', type: 'string',
      options: { list: [{ value: 'major', title: 'Major' }, { value: 'minor', title: 'Minor' }, { value: 'patch', title: 'Patch' }] },
      initialValue: 'minor',
    }),
    defineField({
      name: 'changes', title: 'Changes', type: 'array',
      of: [{
        type: 'object', name: 'change',
        fields: [
          { name: 'changeType', type: 'string', title: 'Type', options: { list: [{ value: 'added', title: '✅ Added' }, { value: 'changed', title: '🔄 Changed' }, { value: 'fixed', title: '🐛 Fixed' }, { value: 'deprecated', title: '⚠️ Deprecated' }, { value: 'removed', title: '🗑️ Removed' }] } },
          { name: 'description', type: 'string', title: 'Description' },
        ],
      }],
    }),
  ],
  orderings: [{ title: 'Newest first', name: 'releaseDateDesc', by: [{ field: 'releaseDate', direction: 'desc' }] }],
  preview: { select: { title: 'version', subtitle: 'releaseDate' } },
})

export default { foundation, pattern, brandPage, product, changelogEntry }
