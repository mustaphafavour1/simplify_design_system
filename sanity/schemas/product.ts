import { defineField, defineType } from 'sanity'

// Curated Phosphor icon names for the dropdown
const ICON_LIST = [
  'ArrowsLeftRight','Receipt','Bank','ChartBar','ChartLine','ChartPie',
  'Code','ShieldCheck','ShieldStar','CurrencyNgn','Users','User',
  'FileText','FilePdf','Gear','House','Bell','MagnifyingGlass',
  'Wallet','CreditCard','Money','Coins','Handshake',
  'Buildings','Factory','Globe','MapPin','Envelope','Calendar',
  'Lightning','Star','Package','Cube','Stack','Laptop','DeviceMobile',
  'Monitor','Database','CloudArrowUp','CloudArrowDown',
  'PlugsConnected','LinkSimple','UserPlus','UsersThree',
  'Certificate','Clipboard','ClipboardText','Wrench','SlidersHorizontal',
  'CheckCircle','XCircle','Warning','Info','Lock','Key',
  'IdentificationCard','IdentificationBadge','Headset','ChatText',
  'TrendUp','TrendDown','Download','Upload','PaperPlaneTilt',
].sort().map(v => ({ value: v, title: v }))

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    { name: 'overview',   title: 'Overview' },
    { name: 'features',   title: 'Features' },
    { name: 'design',     title: 'Design Notes' },
    { name: 'assets',     title: 'Assets & Links' },
  ],
  fields: [
    defineField({ name: 'name',        type: 'string',  title: 'Product name',  group: 'overview', validation: R => R.required() }),
    defineField({ name: 'slug',        type: 'slug',    title: 'Slug',          group: 'overview', options: { source: 'name' }, validation: R => R.required() }),
    defineField({ name: 'tagline',     type: 'string',  title: 'Tagline',       group: 'overview', description: 'One-line product description shown in the header.' }),
    defineField({ name: 'description', type: 'text',    title: 'Description',   group: 'overview', rows: 4 }),
    defineField({ name: 'logo',        type: 'image',   title: 'Product logo',  group: 'assets',   options: { hotspot: true } }),
    defineField({
      name: 'type', title: 'Product type', type: 'string', group: 'overview',
      options: { list: [{ value: 'web', title: 'Web App' }, { value: 'mobile', title: 'Mobile App' }, { value: 'portal', title: 'Portal / Enterprise' }] },
    }),
    defineField({ name: 'status', title: 'Status', type: 'string', group: 'overview',
      options: { list: [{ value: 'live', title: '✅ Live' }, { value: 'delivered', title: '📦 Delivered' }, { value: 'beta', title: '🟡 Beta' }, { value: 'internal', title: '🔒 Internal' }] },
      initialValue: 'live',
    }),

    // ── Live URL + Figma ──
    defineField({ name: 'liveUrl',   type: 'url',  title: 'Live URL',        group: 'assets', description: 'e.g. https://voxepay.com' }),
    defineField({ name: 'figmaUrl',  type: 'url',  title: 'Figma file URL',  group: 'assets' }),

    // ── Features — editable from Studio ──
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'features',
      description: 'Add, remove, or reorder features. Pick an icon from the dropdown.',
      of: [{
        type: 'object',
        name: 'feature',
        fields: [
          defineField({
            name: 'iconName',
            type: 'string',
            title: 'Icon',
            description: 'Phosphor icon name',
            options: { list: ICON_LIST },
            validation: R => R.required(),
          }),
          defineField({ name: 'title',       type: 'string', title: 'Feature title',   validation: R => R.required() }),
          defineField({ name: 'description', type: 'text',   title: 'Description',     rows: 2 }),
        ],
        preview: {
          select: { title: 'title', subtitle: 'iconName' },
          prepare({ title, subtitle }: any) { return { title, subtitle: `Icon: ${subtitle}` } },
        },
      }],
    }),

    // ── Design notes (Portable Text) ──
    defineField({
      name: 'designNotes', title: 'Design notes', type: 'array', group: 'design',
      of: [{ type: 'block' }],
    }),

    // ── Screenshots ──
    defineField({
      name: 'screenshots', title: 'Screenshots', type: 'array', group: 'assets',
      description: 'Use the Figma naming convention: "Module - Screen - State" e.g. "Login - Empty"',
      of: [{
        type: 'image', options: { hotspot: true },
        fields: [
          defineField({ name: 'caption', type: 'string', title: 'Screen name (Figma naming)', description: 'e.g. Dashboard - Overview, Login - Filled' }),
          defineField({ name: 'alt',     type: 'string', title: 'Alt text' }),
        ],
      }],
    }),

    // ── Meta ──
    defineField({
      name: 'meta', title: 'Additional metadata', type: 'array', group: 'overview',
      description: 'Key-value pairs shown in the product info table (e.g. Licence, Integrations)',
      of: [{
        type: 'object', name: 'metaItem',
        fields: [
          defineField({ name: 'key',   type: 'string', title: 'Label' }),
          defineField({ name: 'value', type: 'string', title: 'Value' }),
        ],
        preview: { select: { title: 'key', subtitle: 'value' } },
      }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'tagline', media: 'logo' } },
})