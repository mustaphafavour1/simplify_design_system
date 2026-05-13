import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

// useCdn: false — always fetch fresh data, never serve stale cache
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: false })
  : null

export function urlFor(source: any) {
  if (!client) return { width: (_: number) => ({ url: () => '' }), url: () => '' }
  return imageUrlBuilder(client).image(source)
}

// ── Core fetch helper ─────────────────────────────────────────────────────
async function sanityFetch<T>(query: string, params = {}): Promise<T | null> {
  if (!client) return null
  try {
    return await client.fetch<T>(query, params)
  } catch (err) {
    console.error('[Sanity] fetch error:', err)
    return null
  }
}

// ── Components ────────────────────────────────────────────────────────────
export async function getAllComponents(): Promise<any> {
  return sanityFetch(`*[_type == "component" && !(_id in path("drafts.**"))] | order(name asc) { name, slug, category, status, description }`)
}

export async function getComponentBySlug(slug: string): Promise<any> {
  return sanityFetch(
    `*[_type == "component" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      name, slug, category, status, description, dos, donts, figmaUrl
    }`,
    { slug }
  )
}

// ── Foundations ───────────────────────────────────────────────────────────
export async function getAllFoundations(): Promise<any> {
  return sanityFetch(`*[_type == "foundation" && !(_id in path("drafts.**"))] | order(title asc) { title, slug, description }`)
}

export async function getFoundationBySlug(slug: string): Promise<any> {
  return sanityFetch(
    `*[_type == "foundation" && slug.current == $slug && !(_id in path("drafts.**"))][0] { title, slug, description, body, figmaUrl }`,
    { slug }
  )
}

// ── Patterns ──────────────────────────────────────────────────────────────
export async function getAllPatterns(): Promise<any> {
  return sanityFetch(`*[_type == "pattern" && !(_id in path("drafts.**"))] | order(title asc) { title, slug, description }`)
}

export async function getPatternBySlug(slug: string): Promise<any> {
  return sanityFetch(
    `*[_type == "pattern" && slug.current == $slug && !(_id in path("drafts.**"))][0] { title, slug, description, body, figmaUrl }`,
    { slug }
  )
}

// ── Products ──────────────────────────────────────────────────────────────
export async function getAllProducts(): Promise<any> {
  return sanityFetch(`*[_type == "product" && showOnSite != false && !(_id in path("drafts.**"))] | order(name asc) { name, slug, tagline, logo, type, status }`)
}

export async function getProductBySlug(slug: string): Promise<any> {
  // Returns the product regardless of showOnSite — pages check the flag themselves
  return sanityFetch(
    `*[_type == "product" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      name, slug, tagline, description, type, status, showOnSite,
      liveUrl, figmaUrl, logo,
      features[] { iconName, title, description },
      meta[] { key, value },
      colours[] { name, hex },
      screenshots[] { ..., "url": asset->url }
    }`,
    { slug }
  )
}

// ── Changelog ─────────────────────────────────────────────────────────────
export async function getChangelog(): Promise<any> {
  return sanityFetch(`*[_type == "changelogEntry" && !(_id in path("drafts.**"))] | order(releaseDate desc) { version, releaseDate, type, changes }`)
}

// ── Nav sections (dynamic sidebar) ───────────────────────────────────────
export async function getNavSections(): Promise<any> {
  return sanityFetch(`*[_type == "navSection" && !(_id in path("drafts.**"))] | order(order asc) { label, "children": items[] { "label": label, "href": href } }`)
}

// ── Brand Settings (singleton) ────────────────────────────────────────────
export async function getBrandSettings(): Promise<any> {
  return sanityFetch(
    `*[_type == "brandSettings" && _id == "brandSettings"][0] {
      brandName, tagline, description,
      websiteUrl, figmaUrl,
      logoPrimary, logoWhite, logoDark, logoMark, logomarkWhite
    }`
  )
}