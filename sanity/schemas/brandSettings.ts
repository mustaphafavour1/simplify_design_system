import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'brandSettings',
  title: 'Brand Settings',
  type: 'document',
  groups: [
    { name: 'logos',   title: 'Logos' },
    { name: 'links',   title: 'Links' },
    { name: 'brand',   title: 'Brand Info' },
  ],
  fields: [
    // ── Logos ────────────────────────────────────────────────────────────
    defineField({
      name: 'logoPrimary',
      title: 'Primary logo',
      type: 'image',
      group: 'logos',
      description: 'Full colour logo on light background. Used on the website and docs.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoWhite',
      title: 'White / reversed logo',
      type: 'image',
      group: 'logos',
      description: 'All-white version for dark backgrounds.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoDark',
      title: 'Dark logo',
      type: 'image',
      group: 'logos',
      description: 'Dark version for light or coloured backgrounds.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoMark',
      title: 'Logo mark / icon',
      type: 'image',
      group: 'logos',
      description: 'The standalone S mark without wordmark. Used as favicon and app icon.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logomarkWhite',
      title: 'Logo mark — white version',
      type: 'image',
      group: 'logos',
      options: { hotspot: true },
    }),

    // ── Links ─────────────────────────────────────────────────────────────
    defineField({
      name: 'websiteUrl',
      title: 'Brand website URL',
      type: 'url',
      group: 'links',
      description: 'e.g. https://simplifysynergy.com — shows as a button on the brand page.',
    }),
    defineField({
      name: 'figmaUrl',
      title: 'Brand Figma file URL',
      type: 'url',
      group: 'links',
      description: 'Link to the main SS brand Figma file.',
    }),

    // ── Brand info ────────────────────────────────────────────────────────
    defineField({
      name: 'brandName',
      title: 'Brand name',
      type: 'string',
      group: 'brand',
      initialValue: 'Simplify Synergy',
    }),
    defineField({
      name: 'tagline',
      title: 'Brand tagline',
      type: 'string',
      group: 'brand',
    }),
    defineField({
      name: 'description',
      title: 'Brand description',
      type: 'text',
      group: 'brand',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'brandName' },
    prepare({ title }: any) {
      return { title: title || 'Brand Settings', subtitle: 'Simplify Synergy identity' }
    },
  },
})