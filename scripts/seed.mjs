/**
 * SS Design System — Sanity Seed Script
 * Populates Studio with all current website content.
 * 
 * Usage:
 *   SANITY_API_TOKEN=your_token node scripts/seed.mjs
 *
 * Get token: sanity.io/manage → your project → API → Tokens → Add (Editor)
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'bjcr45l7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌  Missing SANITY_API_TOKEN\n   Run: SANITY_API_TOKEN=your_token node scripts/seed.mjs')
  process.exit(1)
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
const components = [
  {
    slug: 'button', name: 'Button', category: 'actions', status: 'stable',
    description: 'Buttons trigger actions. They communicate what happens when clicked and carry a clear visual hierarchy — primary for the most important action, secondary and ghost for supporting ones.',
    dos: ['Use primary buttons for the single most important action on the page.','Keep button labels short, verb-led, and specific — "Save changes", "Add account".','Use loading state when an action triggers an async operation.','Maintain at most 1 primary button per section.'],
    donts: ["Don't stack more than 2 buttons in a single group.","Don't use primary for destructive actions — use the danger variant.","Don't disable a button without explaining why elsewhere on the page.","Don't use vague labels like 'Submit' or 'Click here'."],
  },
  {
    slug: 'icon-button', name: 'Icon Button', category: 'actions', status: 'stable',
    description: 'A square button containing only an icon. Used for compact actions in toolbars, table rows, and navigation headers. Always requires an accessible label.',
    dos: ['Always provide a label prop for screen readers — icon-only buttons have no visible text.','Use tooltips on hover to reveal the action label.','Use ghost variant by default — primary only when the action is the most important on the page.'],
    donts: ["Don't use icon buttons for primary CTAs — use a full Button with label.","Don't rely on colour alone to communicate the button's purpose."],
  },
  {
    slug: 'link', name: 'Link', category: 'actions', status: 'stable',
    description: 'Text links for navigation — inline within body text, standalone, and external.',
    dos: ['Use descriptive link text — "View transaction details" not "Click here".','Use ArrowUpRight icon for external links.','Underline links inside body text.'],
    donts: ["Don't use links for actions that change data — use a Button.","Don't open internal links in a new tab."],
  },
  {
    slug: 'text-input', name: 'Text Input', category: 'forms', status: 'stable',
    description: 'The foundational form element. Used across onboarding, KYC flows, transfer forms, and settings across all SS products.',
    dos: ['Always pair an input with a label — never use placeholder text as the only label.','Show inline error messages directly beneath the field they relate to.','Use helper text to set expectations — e.g. "Enter the 10-digit account number".','Use the appropriate input type — tel for phone numbers, number for amounts.'],
    donts: ["Don't use placeholder text as a substitute for a label — it disappears on focus.","Don't show error state before the user has interacted with the field.","Don't use a generic error like 'Invalid input' — say exactly what is wrong."],
  },
  {
    slug: 'select', name: 'Select', category: 'forms', status: 'stable',
    description: 'Select menus allow users to choose from a predefined list. Used extensively in forms — user roles, status filters, product assignment.',
    dos: ['Use placeholder text that describes what to choose — "Choose one e.g. Product Admin".','Show a caret (▾) on the right side always.','For multi-select, show selected items as removable chips inside the input.'],
    donts: ["Don't use a native <select> element — use the custom component.","Don't leave the placeholder blank.","Don't use select for binary choices — use a Toggle."],
  },
  {
    slug: 'checkbox', name: 'Checkbox', category: 'forms', status: 'stable',
    description: 'Checkboxes let users select one or more items from a list. Seen on auth screens (Remember me) and multi-select patterns.',
    dos: ['Always pair a checkbox with a visible, clickable label.','Use checkboxes for multi-select lists. Use a toggle for on/off settings.'],
    donts: ["Don't use a checkbox for a single binary setting — use a Toggle.","Don't make checkboxes smaller than 16×16px."],
  },
  {
    slug: 'toggle', name: 'Toggle', category: 'forms', status: 'stable',
    description: 'Toggles control binary on/off settings. Used in Change Password (re-enter on all devices) and throughout Settings pages.',
    dos: ['Use toggles for immediate on/off settings that take effect without a save button.','Label the setting being toggled, not the action — "Dark mode" not "Enable dark mode".'],
    donts: ["Don't use a toggle where the change requires a form submit — use a checkbox.","Don't use toggle for mutually exclusive choices — use radio buttons."],
  },
  {
    slug: 'date-picker', name: 'Date Picker', category: 'forms', status: 'stable',
    description: 'Allows users to select a date. Used in transaction filtering, report generation, and any form requiring a date input.',
    dos: ['Always display the selected date in DD MMM YYYY format.','Show a calendar icon on the right side of the input.','Support manual text entry as well as calendar picker.'],
    donts: ["Don't use slashes in displayed dates.","Don't auto-submit the form when a date is selected."],
  },
  {
    slug: 'sidebar-nav', name: 'Sidebar Nav', category: 'navigation', status: 'stable',
    description: 'The primary navigation pattern for all SS web dashboards. Supports collapsible groups, badge counts, and a user profile section.',
    dos: ['Show the active item with a branded background (100 stop) and text colour (500 stop).','Group related nav items under a collapsible parent — keep max depth at 2 levels.','Show badge counts on items that have pending actions.'],
    donts: ["Don't nest more than 2 levels deep.","Don't use icons without labels in the full sidebar.","Don't change the sidebar width between pages — it must stay fixed at 240px."],
  },
  {
    slug: 'tabs', name: 'Tabs', category: 'navigation', status: 'stable',
    description: 'Tabs switch between views of related content. SS products use two styles — underline tabs for data filtering and pill/segmented tabs for view switching.',
    dos: ['Use tabs to switch between views of the same data set — All / Inflow / Outflow.','Keep tab labels short — 1–2 words.'],
    donts: ["Don't use tabs for navigation between different pages — use the sidebar.","Don't use more than 5 tabs."],
  },
  {
    slug: 'breadcrumbs', name: 'Breadcrumbs', category: 'navigation', status: 'stable',
    description: 'Shows the user\'s location within a multi-level hierarchy. Used on all sub-pages and detail pages alongside a back arrow.',
    dos: ['Use breadcrumbs on any page that is 2+ levels deep from the root.','Every ancestor link must be clickable and navigate correctly.'],
    donts: ["Don't use breadcrumbs on main section pages — only on detail/sub-pages.","Don't show the current page as a link."],
  },
  {
    slug: 'pagination', name: 'Pagination', category: 'navigation', status: 'stable',
    description: 'Navigation between pages of data. Used on every table view across all SS products. Must be identical in layout across all products.',
    dos: ['Always show "Showing X–Y of Z items" on the left.','Provide a per-page selector (10/25/50) — default 10.','Disable prev on page 1 and next on the last page — never hide them.'],
    donts: ["Don't show pagination when there is only 1 page of results.","Don't show page number buttons for every page."],
  },
  {
    slug: 'table', name: 'Table', category: 'data-display', status: 'stable',
    description: 'The most-used data component across SS products. Every dashboard view uses this pattern with stat cards, search/filter, and pagination.',
    dos: ['Always show both empty and filled states in Figma — design both before handoff.','Right-align all monetary amounts. Always two decimal places.','Use a Badge component for Status columns — never plain text.','Place a three-dot (•••) Actions button as the last column.'],
    donts: ["Don't show a completely blank page while loading — always show skeleton rows.","Don't use more than 9 columns.","Don't left-align currency columns."],
  },
  {
    slug: 'stat-card', name: 'Stat Card', category: 'data-display', status: 'stable',
    description: 'Stat cards surface key metrics at the top of dashboard views. The most-used component across Maestro MFB, VoxePay, and the OAGF Treasury Portal.',
    dos: ['Always show two decimal places for monetary stat card values — ₦1,200,000.00 not ₦1,200,000.','Use trend indicators consistently — up is always green, down is context-dependent.'],
    donts: ["Don't put more than 4 stat cards in a single row on desktop.","Don't show 0 or empty as a placeholder — use skeleton."],
  },
  {
    slug: 'badge', name: 'Badge', category: 'data-display', status: 'stable',
    description: 'Badges communicate status, state, or category at a glance. Used for transaction statuses, account tiers, KYC levels, and verification states.',
    dos: ['Use badges to communicate status — transaction states, account tiers.','Keep badge labels to 1–2 words maximum.','Use semantic variants consistently.'],
    donts: ["Don't use badges for counts or numbers.","Don't stack multiple badges next to each other."],
  },
  {
    slug: 'avatar', name: 'Avatar', category: 'data-display', status: 'stable',
    description: 'Represents a user, account holder, or organisation. Used in transaction lists, transfer flows, profile sections, and the Maestro MFB home screen.',
    dos: ['Always provide a name prop as fallback so initials display when the image fails.','Use circle avatars for people, square avatars for organisations.'],
    donts: ["Don't use avatars for decorative purposes.","Don't show status dots on avatars in transaction history."],
  },
  {
    slug: 'alert', name: 'Alert', category: 'feedback', status: 'stable',
    description: 'Alerts communicate system-level messages — confirmations, warnings, errors, and informational notices. They sit inline within page content, not as overlays.',
    dos: ['Use alerts for system-level messages that affect the whole page or a major section.','Include an action link or button in the alert when the user can do something about it.'],
    donts: ["Don't use error alerts for form field validation — use inline field errors instead.","Don't use more than one alert variant on the same page at once."],
  },
  {
    slug: 'toast', name: 'Toast', category: 'feedback', status: 'stable',
    description: 'Short-lived non-blocking notifications that confirm an action or surface a system event. They appear and disappear automatically — except for errors.',
    dos: ['Use toasts for transient feedback — actions the user just performed.','Keep toast messages to one short sentence.','Position toasts at the bottom-right on desktop.'],
    donts: ["Don't use toasts for critical errors — use an Alert or Modal instead.","Don't auto-dismiss error toasts."],
  },
  {
    slug: 'modal', name: 'Modal', category: 'feedback', status: 'stable',
    description: 'Modals interrupt the current flow to request a decision. SS products use four distinct modal patterns — confirmation, destructive, success with entity, success simple.',
    dos: ['Always name the specific entity in confirmation modals — account number, name, and bank.','Show a success modal after a destructive action completes.','Require typed confirmation for irreversible permanent actions.'],
    donts: ["Don't stack modals.","Don't use vague titles — 'Confirm Removal' not 'Are you sure?'"],
  },
  {
    slug: 'tooltip', name: 'Tooltip', category: 'feedback', status: 'stable',
    description: 'Floating labels that appear on hover or focus. Used primarily to label icon-only buttons and provide supplementary context.',
    dos: ['Use tooltips to reveal the label of icon-only buttons on hover.','Keep tooltip text to one short sentence — maximum 10 words.'],
    donts: ["Don't put interactive content inside a tooltip.","Don't use tooltips for critical information.","Don't show tooltips on mobile."],
  },
  {
    slug: 'empty-state', name: 'Empty State', category: 'feedback', status: 'stable',
    description: 'Shown when a data view has no content. Guides the user rather than leaving them with a blank screen. The copy formula: "No [Items] Yet" / "When there are [items], they will show here."',
    dos: ['Always explain what will appear here when data exists.','Keep titles short and factual — "No Records Yet".'],
    donts: ["Don't use empty states to show errors — use an Alert.","Don't add multiple CTAs — one action maximum."],
  },
  {
    slug: 'skeleton', name: 'Skeleton', category: 'feedback', status: 'stable',
    description: 'Skeleton screens replace content while data is loading. Always prefer skeleton over a blank page or spinner for table and dashboard loading.',
    dos: ['Show skeleton screens immediately — never show a blank page during loading.','Match the skeleton layout to the actual content it represents.'],
    donts: ["Don't use a spinner for page-level or table loading — use skeletons.","Don't use skeleton for small inline updates like badge counts."],
  },
  {
    slug: 'card', name: 'Card', category: 'layout', status: 'stable',
    description: 'The primary surface container across all SS dashboards. Wraps stat cards, form sections, table areas, and content groups.',
    dos: ['Use --radius-lg (12px) for cards — consistent with all SS dashboards.','Keep card padding at 20px or 24px.','Group related information inside one card.'],
    donts: ["Don't nest cards inside cards.","Don't use more than one primary action per card."],
  },
  {
    slug: 'accordion', name: 'Accordion', category: 'layout', status: 'stable',
    description: 'Collapsible content sections. Used in Settings pages and FAQ sections to organise dense information.',
    dos: ['Use accordions for FAQ sections and settings categories.','Show a clear caret icon that rotates 180° when open.'],
    donts: ["Don't use accordions for primary navigation.","Don't hide critical information in an accordion."],
  },
  {
    slug: 'divider', name: 'Divider', category: 'layout', status: 'stable',
    description: 'A thin line used to separate content groups. Used between form sections, sidebar sections, and the user profile area.',
    dos: ['Use dividers to separate logically distinct groups of content.','Keep divider colour subtle — var(--color-border) is always the right choice.'],
    donts: ["Don't use dividers between every item in a list — use spacing instead.","Don't make dividers thicker than 1px."],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────────────────────
const products = [
  {
    slug: 'voxepay', name: 'VoxePay', type: 'web', status: 'live',
    tagline: 'Simplify Bills & Money Transfers.',
    description: 'VoxePay is Simplify Synergy\'s payment gateway — positioned alongside Paystack and Flutterwave in the Nigerian payments ecosystem. It enables individuals to pay bills and transfer money, businesses to collect payments and reconcile transactions, and developers to integrate payment capabilities via API. Licensed PSSP serving individuals, businesses, and developers.',
    liveUrl: null,
    meta: [
      { _key: 'm1', key: 'Type',         value: 'Web Application + Mobile App + API' },
      { _key: 'm2', key: 'Licence',       value: 'Licensed PSSP (Payment Solution Service Provider)' },
      { _key: 'm3', key: 'Integrations',  value: 'NIBSS Inward, Interswitch (Cards), Maestro MFB (Virtual Accounts)' },
      { _key: 'm4', key: 'Segments',      value: 'Personal · Business · Developers' },
    ],
    features: [
      { _key: 'f1', iconName: 'ArrowsLeftRight', title: 'Money Transfers',        description: 'Send and receive money instantly across accounts and banks.' },
      { _key: 'f2', iconName: 'Receipt',          title: 'Bill Payments',          description: 'Pay utilities, subscriptions, and service providers in-platform.' },
      { _key: 'f3', iconName: 'Bank',             title: 'Virtual Bank Accounts',  description: 'Auto-assigned dedicated virtual accounts for collections.' },
      { _key: 'f4', iconName: 'ChartBar',         title: 'Business Dashboard',     description: 'Transaction data and reconciliation for finance teams.' },
      { _key: 'f5', iconName: 'Code',             title: 'Developer API',          description: 'Integrate VoxePay collections and payouts via REST API.' },
      { _key: 'f6', iconName: 'ShieldCheck',      title: 'KYC / KYB',             description: 'Identity and business verification built into onboarding.' },
    ],
  },
  {
    slug: 'maestro', name: 'Maestro MFB', type: 'mobile', status: 'live',
    tagline: 'Smarter Finance, Smarter You.',
    description: 'Maestro MFB is a mobile-first microfinance bank — designed around the idea that banking should be smarter, not harder. Users get a full bank account, can send and receive money, save, and track every transaction — all from a mobile app. CBN Regulated, NDIC Insured, and NDPR Compliant.',
    meta: [
      { _key: 'm1', key: 'Type',         value: 'Mobile App (iOS & Android) + Web' },
      { _key: 'm2', key: 'Regulation',   value: 'CBN Regulated · NDIC Insured · NDPR Compliant' },
      { _key: 'm3', key: 'Category',     value: 'Microfinance Bank (MFB)' },
      { _key: 'm4', key: 'Audience',     value: 'Individuals — personal banking and savings' },
    ],
    features: [
      { _key: 'f1', iconName: 'CreditCard',      title: 'Account & Balance',     description: 'View total account balance, account number, and recent activity at a glance.' },
      { _key: 'f2', iconName: 'ArrowsLeftRight',  title: 'Transfers',             description: 'Send money to other accounts instantly. Interbank transfers via NIBSS.' },
      { _key: 'f3', iconName: 'Coins',            title: 'Save',                  description: 'Built-in savings features to help users grow their money over time.' },
      { _key: 'f4', iconName: 'ArrowLineDown',    title: 'Add Funds',             description: 'Top up via card, bank transfer, or USSD.' },
      { _key: 'f5', iconName: 'ClipboardText',    title: 'Transaction History',   description: 'Filterable log of all inflows and outflows with status and timestamps.' },
      { _key: 'f6', iconName: 'Bell',             title: 'Notifications',         description: 'Real-time push notifications for every account activity.' },
    ],
  },
  {
    slug: 'compliance', name: 'Simplify Compliance Engine', type: 'portal', status: 'internal',
    tagline: 'Internal compliance API management platform.',
    description: 'An internal B2B platform for Simplify Synergy staff to manage compliance API integrations across all SS products — BVN verification, identity checks, KYC workflows, and user access control across multiple subsidiaries.',
    meta: [
      { _key: 'm1', key: 'Type',      value: 'Internal web application' },
      { _key: 'm2', key: 'Audience',  value: 'Simplify Synergy staff only — not public-facing' },
      { _key: 'm3', key: 'Purpose',   value: 'Manage compliance API integrations and KYC workflows across SS products' },
    ],
    features: [
      { _key: 'f1', iconName: 'PlugsConnected',  title: 'API Integrations',    description: 'Manage third-party compliance API providers — BVN, NIN, CAC, AML screening.' },
      { _key: 'f2', iconName: 'Users',            title: 'User Management',     description: 'Create and manage users across subsidiaries. Assign roles and permissions.' },
      { _key: 'f3', iconName: 'ChartBar',         title: 'Costs & Usage',       description: 'Monitor API consumption and costs per product/subsidiary.' },
      { _key: 'f4', iconName: 'Gear',             title: 'Workflows',           description: 'Configure compliance workflows and automated processes.' },
      { _key: 'f5', iconName: 'ChartLine',        title: 'Analytics & Logs',    description: 'Audit trail of all compliance checks and API calls.' },
      { _key: 'f6', iconName: 'Buildings',        title: 'Multi-subsidiary',    description: 'Manage multiple SS products from a single compliance dashboard.' },
    ],
  },
  {
    slug: 'oagf', name: 'OAGF Treasury Portal', type: 'portal', status: 'delivered',
    tagline: 'Treasury Management System for the Office of the Accountant General of the Federation.',
    description: 'A custom Treasury Management System built for the OAGF. Manages government payment flows, reconciliation, and treasury analytics for ministries, departments, and agencies (MDAs) across Nigeria.',
    meta: [
      { _key: 'm1', key: 'Type',     value: 'Web Portal (Enterprise)' },
      { _key: 'm2', key: 'Client',   value: 'Office of the Accountant General of the Federation (OAGF)' },
      { _key: 'm3', key: 'Audience', value: 'Government finance officers, treasury managers, MDA staff' },
      { _key: 'm4', key: 'Built by', value: 'Simplify Synergy' },
    ],
    features: [
      { _key: 'f1', iconName: 'ArrowsLeftRight', title: 'Payment Management',     description: 'Manage and track government payment flows across ministries and agencies.' },
      { _key: 'f2', iconName: 'ChartBar',         title: 'Treasury Analytics',    description: 'Real-time dashboards for cash position, inflows, outflows, and forecasting.' },
      { _key: 'f3', iconName: 'Table',            title: 'Transaction Reporting', description: 'Detailed transaction logs with export to PDF, XLSX, HTML, and CSV.' },
      { _key: 'f4', iconName: 'ShieldCheck',      title: 'Compliance Controls',   description: 'Built-in audit trails and approval workflows for regulatory compliance.' },
      { _key: 'f5', iconName: 'Users',            title: 'Multi-agency Access',   description: 'Role-based access for multiple MDAs.' },
      { _key: 'f6', iconName: 'FileText',         title: 'Reconciliation',        description: 'Automated reconciliation of government accounts against transaction records.' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// FOUNDATIONS
// ─────────────────────────────────────────────────────────────────────────────
const foundations = [
  { slug: 'tokens',          title: 'Design Tokens',    description: 'Named variables that store the raw values of the SS design language — colours, spacing, radius, shadows. The contract between Figma and code. Always reference a token, never hardcode raw values.' },
  { slug: 'spacing',         title: 'Spacing & Grid',   description: 'All spacing is built on a 4px base unit. Every gap, padding, and margin in SS products is a multiple of 4. 12-column grid on desktop, 4-column on mobile. Standard dashboard layout: 240px fixed sidebar + scrollable content.' },
  { slug: 'elevation',       title: 'Elevation',        description: 'Six shadow levels from flat (0) to highest overlay (5). Each level has a specific semantic purpose. Components that appear above others in the UI should have a higher elevation level.' },
  { slug: 'border-radius',   title: 'Border Radius',    description: 'Consistent radius scale from none (0px) to full (9999px). Larger radii signal softer, more approachable surfaces. Never use arbitrary values — always use a token.' },
  { slug: 'iconography',     title: 'Iconography',      description: 'Simplify Synergy uses the Phosphor icon set across all products. 1,256+ icons in 6 weights. Use Regular weight by default, Bold for active states, Fill for status icons. Every icon must serve a clear functional purpose.' },
  { slug: 'motion',          title: 'Motion',           description: 'Motion in SS products is purposeful and restrained. Financial interfaces carry weight — animation should guide attention and confirm actions, never entertain. Default duration: 200ms. Always respect prefers-reduced-motion.' },
  { slug: 'accessibility',   title: 'Accessibility',    description: 'SS products target WCAG 2.1 AA compliance. All text meets 4.5:1 contrast ratio, all interactive elements are keyboard operable, focus is always visible. Accessibility is built in from the start, not added later.' },
  { slug: 'data-formatting', title: 'Data Formatting',  description: 'Binding standards for currency (₦ symbol, always 2 decimal places, right-aligned in tables), dates (DD MMM YYYY), and numbers (commas as thousand separators) across all SS products.' },
]

// ─────────────────────────────────────────────────────────────────────────────
// PATTERNS (as brandPage documents)
// ─────────────────────────────────────────────────────────────────────────────
const patterns = [
  {
    slug: 'auth-pattern', title: 'Authentication',
    description: 'Login, sign-up, and password reset flows. Two layout formats: split-screen (image left, form right) and fullscreen background with overlay. Button always disabled until required fields are filled. Error states use red border + red caption under the affected input.',
  },
  {
    slug: 'dashboard-pattern', title: 'Dashboard Layout',
    description: 'The master layout for all SS web products. Fixed sidebar (240px) + sticky top bar (56px) + scrollable content. Top bar shows "Good Morning [Name]" greeting on the dashboard, page description on sub-pages, plus date (DD Mon. MMM YYYY format), mail icon, bell icon, and tier badge on the right.',
  },
  {
    slug: 'data-tables-pattern', title: 'Data Tables',
    description: 'Standard pattern for all data views. Anatomy top-to-bottom: page header with breadcrumb → stat cards (3–5 metrics) → table toolbar (tabs, search, filter, download record) → table header row → table rows or empty state → pagination. Always design both empty and filled states.',
  },
  {
    slug: 'forms-pattern', title: 'Forms & Validation',
    description: 'Max two columns. Short forms (fewer than 5 fields) use single centred column. Longer forms use two equal columns. Required fields marked with red asterisk (*). Primary button is muted/grey and disabled until ALL required fields are filled. Validate on blur, not on keystroke. Errors show as red border + red caption below the affected field.',
  },
  {
    slug: 'empty-error-pattern', title: 'Empty & Error States',
    description: 'Empty state formula: "No [Items] Yet" + "When there are [items], they will show here." Two error types: field validation (red border + red caption) and error modal (info icon in red circle, specific title and message, single OK button). Never use generic errors like "Something went wrong".',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CHANGELOG
// ─────────────────────────────────────────────────────────────────────────────
const changelog = [{
  version: 'v1.0.0',
  releaseDate: '2026-05-11',
  type: 'major',
  changes: [
    { changeType: 'added', description: 'Design system website launched with full component, foundation, and pattern documentation.' },
    { changeType: 'added', description: 'Brand foundations: colours (25–900 scale), typography (Poppins + Nunito), logo guidelines, voice & tone.' },
    { changeType: 'added', description: 'Design tokens, spacing (4px base unit), elevation (6 levels), border radius, iconography (Phosphor), motion, accessibility, data formatting.' },
    { changeType: 'added', description: '25 components: Button, Icon Button, Link, Text Input, Select, Checkbox, Toggle, Date Picker, Sidebar Nav, Tabs, Breadcrumbs, Pagination, Table, Stat Card, Badge, Avatar, Alert, Toast, Modal, Tooltip, Empty State, Skeleton, Card, Accordion, Divider.' },
    { changeType: 'added', description: 'Pattern library: Authentication (2 formats), Dashboard Layout, Data Tables, Forms & Validation, Empty & Error States.' },
    { changeType: 'added', description: 'Product showcase: VoxePay, Maestro MFB, Simplify Compliance Engine, OAGF Treasury Portal.' },
    { changeType: 'added', description: 'Sanity CMS integration — content editable from Studio without code changes.' },
    { changeType: 'added', description: 'Contributing guide with proposal process, component checklist, naming conventions (Figma: Module - Screen - State).' },
  ],
}]

// ─────────────────────────────────────────────────────────────────────────────
// SEED RUNNER
// ─────────────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('🌱  SS Design System — Sanity Seed\n')

  // Components
  console.log('📦  Components...')
  for (const c of components) {
    await client.createOrReplace({
      _type: 'component',
      _id: `component-${c.slug}`,
      name: c.name,
      slug: { _type: 'slug', current: c.slug },
      category: c.category,
      status: c.status,
      description: c.description,
      dos:   c.dos?.map((d, i) => ({ _key: `do-${i}`,   _type: 'string', value: d })) ?? [],
      donts: c.donts?.map((d, i) => ({ _key: `dont-${i}`, _type: 'string', value: d })) ?? [],
    })
    process.stdout.write(`  ✓ ${c.name}\n`)
  }

  // Products
  console.log('\n🚀  Products...')
  for (const p of products) {
    await client.createOrReplace({
      _type: 'product',
      _id: `product-${p.slug}`,
      name: p.name,
      slug: { _type: 'slug', current: p.slug },
      tagline: p.tagline,
      description: p.description,
      type: p.type,
      status: p.status,
      liveUrl: p.liveUrl ?? undefined,
      meta: p.meta,
      features: p.features,
    })
    process.stdout.write(`  ✓ ${p.name}\n`)
  }

  // Foundations
  console.log('\n🧱  Foundations...')
  for (const f of foundations) {
    await client.createOrReplace({
      _type: 'foundation',
      _id: `foundation-${f.slug}`,
      title: f.title,
      slug: { _type: 'slug', current: f.slug },
      description: f.description,
    })
    process.stdout.write(`  ✓ ${f.title}\n`)
  }

  // Patterns
  console.log('\n📐  Patterns...')
  for (const p of patterns) {
    await client.createOrReplace({
      _type: 'pattern',
      _id: `pattern-${p.slug}`,
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      description: p.description,
    })
    process.stdout.write(`  ✓ ${p.title}\n`)
  }

  // Changelog
  console.log('\n📋  Changelog...')
  for (const entry of changelog) {
    await client.createOrReplace({
      _type: 'changelogEntry',
      _id: `changelog-${entry.version.replace(/\./g, '-')}`,
      version: entry.version,
      releaseDate: entry.releaseDate,
      type: entry.type,
      changes: entry.changes.map((c, i) => ({ _type: 'change', _key: `c${i}`, ...c })),
    })
    process.stdout.write(`  ✓ ${entry.version}\n`)
  }

  console.log('\n✅  Seed complete!')
  console.log('   Open https://ss-design-system.sanity.studio to see and edit your content.\n')
}

seed().catch(err => {
  console.error('\n❌  Seed failed:', err.message)
  process.exit(1)
})
