# Simplify Synergy — Design System

The official design system for all Simplify Synergy products.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — utility styles
- **Sanity CMS** — content management for non-technical editors
- **TypeScript**
- **Vercel** — deployment

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Then fill in your Sanity project ID (from [sanity.io/manage](https://sanity.io/manage)).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Sanity Studio

The Sanity Studio is embedded in the project. Once you've added your project ID:

```bash
npx sanity init --env .env.local
```

Then access the Studio at `/studio` (after adding the Sanity Studio route — see the Sanity Next.js docs).

---

## Project structure

```
app/
  page.tsx              ← Overview / homepage
  brand/                ← Logo, Colours, Typography, Voice
  foundations/          ← Tokens, Spacing, Elevation, etc.
  components/           ← All component documentation pages
  patterns/             ← UX patterns
  products/             ← Maestro MFB, VoxePay, OAGF Treasury
  contributing/         ← Process, checklist, changelog

components/
  layout/               ← Sidebar, TopBar
  docs/                 ← PageHeader, ComponentPreview, PropsTable, etc.

sanity/
  schemas/              ← All Sanity document schemas
  structure.ts          ← Custom Studio sidebar

lib/
  sanity.ts             ← Sanity client, image URL builder, GROQ queries
```

---

## Deploying to Vercel

1. Push to GitHub
2. Connect repo in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy

---

## Design tokens

All tokens are in `app/globals.css` as CSS custom properties.
**Never hardcode raw values** — always reference a token.

---

*Built by Favour · Simplify Synergy · 2026*
