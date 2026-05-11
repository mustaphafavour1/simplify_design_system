/**
 * Sanity Seed Script
 * Populates the Studio with all existing static content from the design system.
 * Run once: node scripts/seed.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'bjcr45l7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ── Components ────────────────────────────────────────────────────────────
const components = [
  { name: 'Button',       slug: 'button',       category: 'actions',      status: 'stable', description: 'Buttons trigger actions. They communicate what happens when clicked and carry a clear visual hierarchy.' },
  { name: 'Icon Button',  slug: 'icon-button',  category: 'actions',      status: 'stable', description: 'A square button containing only an icon. Always requires an accessible label.' },
  { name: 'Link',         slug: 'link',         category: 'actions',      status: 'stable', description: 'Text links for navigation — inline within body text, standalone, and external.' },
  { name: 'Text Input',   slug: 'text-input',   category: 'forms',        status: 'stable', description: 'The foundational form element. Used across onboarding, KYC flows, transfer forms, and settings.' },
  { name: 'Select',       slug: 'select',       category: 'forms',        status: 'stable', description: 'Select menus allow users to choose from a predefined list.' },
  { name: 'Checkbox',     slug: 'checkbox',     category: 'forms',        status: 'stable', description: 'Checkboxes let users select one or more items from a list.' },
  { name: 'Toggle',       slug: 'toggle',       category: 'forms',        status: 'stable', description: 'Toggles control binary on/off settings that take effect immediately.' },
  { name: 'Date Picker',  slug: 'date-picker',  category: 'forms',        status: 'stable', description: 'Allows users to select a date. Used in transaction filtering and report generation.' },
  { name: 'Sidebar Nav',  slug: 'sidebar-nav',  category: 'navigation',   status: 'stable', description: 'The primary navigation pattern for all SS web dashboards.' },
  { name: 'Tabs',         slug: 'tabs',         category: 'navigation',   status: 'stable', description: 'Tabs switch between views of related content.' },
  { name: 'Breadcrumbs',  slug: 'breadcrumbs',  category: 'navigation',   status: 'stable', description: 'Shows the user\'s location within a multi-level hierarchy.' },
  { name: 'Pagination',   slug: 'pagination',   category: 'navigation',   status: 'stable', description: 'Navigation between pages of data. Used on every table view.' },
  { name: 'Table',        slug: 'table',        category: 'data-display', status: 'stable', description: 'The most-used data component across SS products.' },
  { name: 'Stat Card',    slug: 'stat-card',    category: 'data-display', status: 'stable', description: 'Stat cards surface key metrics at the top of dashboard views.' },
  { name: 'Badge',        slug: 'badge',        category: 'data-display', status: 'stable', description: 'Badges communicate status, state, or category at a glance.' },
  { name: 'Avatar',       slug: 'avatar',       category: 'data-display', status: 'stable', description: 'Represents a user, account holder, or organisation.' },
  { name: 'Alert',        slug: 'alert',        category: 'feedback',     status: 'stable', description: 'Alerts communicate system-level messages inline within page content.' },
  { name: 'Toast',        slug: 'toast',        category: 'feedback',     status: 'stable', description: 'Short-lived non-blocking notifications that confirm an action.' },
  { name: 'Modal',        slug: 'modal',        category: 'feedback',     status: 'stable', description: 'Modals interrupt the current flow to request a decision.' },
  { name: 'Tooltip',      slug: 'tooltip',      category: 'feedback',     status: 'stable', description: 'Floating labels that appear on hover or focus.' },
  { name: 'Empty State',  slug: 'empty-state',  category: 'feedback',     status: 'stable', description: 'Shown when a data view has no content to display.' },
  { name: 'Skeleton',     slug: 'skeleton',     category: 'feedback',     status: 'stable', description: 'Skeleton screens replace content while data is loading.' },
  { name: 'Card',         slug: 'card',         category: 'layout',       status: 'stable', description: 'The primary surface container across all SS dashboards.' },
  { name: 'Accordion',    slug: 'accordion',    category: 'layout',       status: 'stable', description: 'Collapsible content sections for settings and FAQ.' },
  { name: 'Divider',      slug: 'divider',      category: 'layout',       status: 'stable', description: 'A thin line used to separate content groups.' },
]

// ── Products ──────────────────────────────────────────────────────────────
const products = [
  { name: 'VoxePay',              slug: 'voxepay',    tagline: 'Simplify Bills & Money Transfers',                    type: 'web',    description: 'A licensed PSSP payment platform for individuals, businesses, and developers.' },
  { name: 'Maestro MFB',          slug: 'maestro',    tagline: 'Smarter Finance, Smarter You.',                       type: 'mobile', description: 'A CBN-regulated microfinance bank offering mobile-first banking.' },
  { name: 'Compliance Engine',    slug: 'compliance', tagline: 'Internal compliance API management platform.',         type: 'portal', description: 'Internal B2B platform for managing compliance API integrations across all SS products.' },
  { name: 'OAGF Treasury Portal', slug: 'oagf',       tagline: 'Treasury Management System for the OAGF.',            type: 'portal', description: 'Custom Treasury Management System for the Office of the Accountant General of the Federation.' },
]

// ── Foundations ───────────────────────────────────────────────────────────
const foundations = [
  { title: 'Design Tokens',   slug: 'tokens',          description: 'Named variables that store the raw values of the SS design language.' },
  { title: 'Spacing & Grid',  slug: 'spacing',         description: 'All spacing is built on a 4px base unit.' },
  { title: 'Elevation',       slug: 'elevation',       description: 'Box shadows that communicate depth and hierarchy.' },
  { title: 'Border Radius',   slug: 'border-radius',   description: 'Consistent radius scale from 0px to 9999px.' },
  { title: 'Iconography',     slug: 'iconography',     description: 'Phosphor icon set — 1,256+ icons in 6 weights.' },
  { title: 'Motion',          slug: 'motion',          description: 'Purposeful and restrained animation principles.' },
  { title: 'Accessibility',   slug: 'accessibility',   description: 'WCAG 2.1 AA compliance standards and guidelines.' },
  { title: 'Data Formatting', slug: 'data-formatting', description: 'Currency, date, and number formatting standards.' },
]

// ── Changelog ─────────────────────────────────────────────────────────────
const changelog = [
  {
    version: 'v1.0.0',
    releaseDate: '2026-05-11',
    type: 'major',
    changes: [
      { changeType: 'added', description: 'Design system website launched.' },
      { changeType: 'added', description: 'Brand foundations: colours, typography, logo, voice & tone.' },
      { changeType: 'added', description: 'Design tokens, spacing, elevation, border radius, iconography, motion, accessibility, data formatting.' },
      { changeType: 'added', description: '25 core components — Button, Input, Table, Modal, Badge, Card, Toast, Alert, Avatar, Sidebar Nav, Tabs, Pagination, Stat Card, Empty State, Skeleton, and more.' },
      { changeType: 'added', description: 'Pattern library — Authentication, Dashboard Layout, Data Tables, Forms & Validation, Empty & Error States.' },
      { changeType: 'added', description: 'Product showcase — VoxePay, Maestro MFB, Compliance Engine, OAGF Treasury.' },
    ],
  },
]

async function seed() {
  console.log('🌱 Starting Sanity seed...\n')

  // Components
  console.log('📦 Creating components...')
  for (const comp of components) {
    await client.createIfNotExists({
      _type: 'component',
      _id: `component-${comp.slug}`,
      name: comp.name,
      slug: { _type: 'slug', current: comp.slug },
      category: comp.category,
      status: comp.status,
      description: comp.description,
    })
    process.stdout.write(`  ✓ ${comp.name}\n`)
  }

  // Products
  console.log('\n🚀 Creating products...')
  for (const prod of products) {
    await client.createIfNotExists({
      _type: 'product',
      _id: `product-${prod.slug}`,
      name: prod.name,
      slug: { _type: 'slug', current: prod.slug },
      tagline: prod.tagline,
      type: prod.type,
      description: prod.description,
    })
    process.stdout.write(`  ✓ ${prod.name}\n`)
  }

  // Foundations
  console.log('\n🧱 Creating foundations...')
  for (const found of foundations) {
    await client.createIfNotExists({
      _type: 'foundation',
      _id: `foundation-${found.slug}`,
      title: found.title,
      slug: { _type: 'slug', current: found.slug },
      description: found.description,
    })
    process.stdout.write(`  ✓ ${found.title}\n`)
  }

  // Changelog
  console.log('\n📋 Creating changelog...')
  for (const entry of changelog) {
    await client.createIfNotExists({
      _type: 'changelogEntry',
      _id: `changelog-${entry.version.replace(/\./g, '-')}`,
      version: entry.version,
      releaseDate: entry.releaseDate,
      type: entry.type,
      changes: entry.changes.map(c => ({ _type: 'change', _key: Math.random().toString(36).slice(2), ...c })),
    })
    process.stdout.write(`  ✓ ${entry.version}\n`)
  }

  console.log('\n✅ Seed complete! Open https://ss-design-system.sanity.studio to see your content.\n')
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
