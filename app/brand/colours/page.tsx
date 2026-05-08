import { PageHeader } from '@/components/docs/PageHeader'
import { ColorPalette } from '@/components/docs/ColorPalette'

export const metadata = { title: 'Colours — SS Design System' }

export default function ColoursPage() {
  return (
    <div>
      <PageHeader
        section="Brand"
        title="Colours"
        description="The Simplify Synergy colour palette is built around a confident purple that signals innovation and trust — values central to everything we build in fintech."
      />

      <ColorPalette />
    </div>
  )
}
