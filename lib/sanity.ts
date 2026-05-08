import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

// Only initialise when a real projectId exists.
// The site builds and runs fine without it — Sanity queries just return [].
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: process.env.NODE_ENV === 'production' })
  : null

export function urlFor(source: any) {
  if (!client) return { url: () => '' }
  return imageUrlBuilder(client).image(source)
}

// ── Queries ──────────────────────────────────────────────────────────────

async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  if (!client) return [] as unknown as T
  return client.fetch<T>(query, params)
}

export async function getAllComponents() {
  return sanityFetch(`*[_type == "component"] | order(name asc) { name, slug, category, status, description, previewImage }`)
}

export async function getComponentBySlug(slug: string) {
  return sanityFetch(`*[_type == "component" && slug.current == $slug][0] { name, slug, category, status, description, body, dos, donts, variants, props, codeExamples, figmaUrl, previewImage, "relatedComponents": relatedComponents[]->{ name, slug, previewImage } }`, { slug })
}

export async function getAllFoundations() {
  return sanityFetch(`*[_type == "foundation"] | order(title asc) { title, slug, description }`)
}

export async function getAllPatterns() {
  return sanityFetch(`*[_type == "pattern"] | order(title asc) { title, slug, description, coverImage }`)
}

export async function getAllProducts() {
  return sanityFetch(`*[_type == "product"] | order(name asc) { name, slug, tagline, logo, type }`)
}

export async function getNavSections(): Promise<any[]> {
  return sanityFetch(`*[_type == "navSection"] | order(order asc) { label, "children": items[] { "label": label, "href": "/" + slug } }`)
}