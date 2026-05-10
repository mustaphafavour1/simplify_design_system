import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schema'
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'ss-design-system',
  title: 'SS Design System',
  projectId: 'bjcr45l7',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
  ],
  schema: {
    types: schemaTypes,
  },
})
