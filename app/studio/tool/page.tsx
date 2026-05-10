/**
 * Embedded Sanity Studio
 * Accessible at /studio once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
 * Non-technical editors use this to update design system content.
 */
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
