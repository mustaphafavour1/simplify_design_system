import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('SS Design System')
    .items([

      // ── Brand (singleton) ──────────────────────────────────────────────
      S.listItem()
        .title('🎨 Brand')
        .child(
          S.list().title('Brand').items([

            // Brand Settings — singleton, one document only
            S.listItem()
              .title('Brand Settings')
              .id('brandSettings')
              .child(
                S.document()
                  .schemaType('brandSettings')
                  .documentId('brandSettings')
                  .title('Brand Settings')
              ),

            S.divider(),

            // Brand page docs (colours, typography etc) — keep as list
            S.listItem()
              .title('Brand Pages')
              .child(S.documentTypeList('brandPage').title('Brand Pages')),
          ])
        ),

      // ── Foundations ────────────────────────────────────────────────────
      S.listItem()
        .title('🧱 Foundations')
        .child(S.documentTypeList('foundation').title('Foundations')),

      // ── Components ────────────────────────────────────────────────────
      S.listItem()
        .title('🔘 Components')
        .child(
          S.list().title('Components').items([
            S.listItem().title('Actions').child(S.documentList().title('Actions').filter('_type == "component" && category == "actions"')),
            S.listItem().title('Forms & Inputs').child(S.documentList().title('Forms').filter('_type == "component" && category == "forms"')),
            S.listItem().title('Navigation').child(S.documentList().title('Navigation').filter('_type == "component" && category == "navigation"')),
            S.listItem().title('Data Display').child(S.documentList().title('Data Display').filter('_type == "component" && category == "data-display"')),
            S.listItem().title('Feedback & Overlays').child(S.documentList().title('Feedback').filter('_type == "component" && category == "feedback"')),
            S.listItem().title('Layout').child(S.documentList().title('Layout').filter('_type == "component" && category == "layout"')),
            S.divider(),
            S.documentTypeListItem('component').title('All Components'),
          ])
        ),

      // ── Patterns ──────────────────────────────────────────────────────
      S.listItem()
        .title('📐 Patterns')
        .child(S.documentTypeList('pattern').title('Patterns')),

      // ── Products ──────────────────────────────────────────────────────
      S.listItem()
        .title('📱 Products')
        .child(S.documentTypeList('product').title('Products')),

      S.divider(),

      // ── Changelog ─────────────────────────────────────────────────────
      S.listItem()
        .title('📋 Changelog')
        .child(S.documentTypeList('changelogEntry').title('Changelog')),

      S.divider(),

      // ── Nav Sections ──────────────────────────────────────────────────
      S.listItem()
        .title('🗂️ Nav Sections')
        .child(S.documentTypeList('navSection').title('Nav Sections')),
    ])