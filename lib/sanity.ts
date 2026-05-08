import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// ─── Queries ─────────────────────────────────────────────────────────────

export async function getAllComponents() {
  return client.fetch(`
    *[_type == "component"] | order(name asc) {
      name, slug, category, status, description, previewImage
    }
  `)
}

export async function getComponentBySlug(slug: string) {
  return client.fetch(`
    *[_type == "component" && slug.current == $slug][0] {
      name, slug, category, status, description, body,
      dos, donts, variants, props, codeExamples,
      figmaUrl, previewImage,
      "relatedComponents": relatedComponents[]->{ name, slug, previewImage }
    }
  `, { slug })
}

export async function getAllFoundations() {
  return client.fetch(`*[_type == "foundation"] | order(title asc) { title, slug, description }`)
}

export async function getAllPatterns() {
  return client.fetch(`*[_type == "pattern"] | order(title asc) { title, slug, description, coverImage }`)
}

export async function getAllProducts() {
  return client.fetch(`*[_type == "product"] | order(name asc) { name, slug, tagline, logo, type }`)
}

export async function getNavSections() {
  return client.fetch(`
    *[_type == "navSection"] | order(order asc) {
      label,
      "children": items[] { "label": label, "href": "/" + slug }
    }
  `)
}