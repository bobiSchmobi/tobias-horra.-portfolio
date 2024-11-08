import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
export default defineConfig({
  name: 'default',
  title: 'bobolio',

  projectId: '59g1mn44',
  dataset: 'production',
  basePath:"/admin",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
