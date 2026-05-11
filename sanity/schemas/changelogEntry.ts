import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'changelogEntry',
  title: 'Changelog Entry',
  type: 'document',
  fields: [
    defineField({ name: 'version',     type: 'string', title: 'Version (e.g. v1.0.0)', validation: R => R.required() }),
    defineField({ name: 'releaseDate', type: 'date',   title: 'Release date', validation: R => R.required() }),
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
          {
            name: 'changeType', type: 'string', title: 'Type',
            options: { list: [{ value: 'added', title: '✅ Added' }, { value: 'changed', title: '🔄 Changed' }, { value: 'fixed', title: '🐛 Fixed' }, { value: 'removed', title: '🗑️ Removed' }] },
          },
          { name: 'description', type: 'string', title: 'Description' },
        ],
      }],
    }),
  ],
  orderings: [{ title: 'Newest first', name: 'releaseDateDesc', by: [{ field: 'releaseDate', direction: 'desc' }] }],
  preview: { select: { title: 'version', subtitle: 'releaseDate' } },
})