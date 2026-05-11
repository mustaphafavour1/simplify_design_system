import { PageHeader } from '@/components/docs/PageHeader'
import { getChangelog } from '@/lib/sanity'

export const revalidate = 0

const STATIC_CHANGELOG = [
  {
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
    ],
  },
]

const TYPE_STYLE: Record<string, string> = {
  major: 'changelog-type changelog-type-major',
  minor: 'changelog-type changelog-type-minor',
  patch: 'changelog-type changelog-type-patch',
}

const CHANGE_STYLE: Record<string, string> = {
  added:   'changelog-change-type change-added',
  changed: 'changelog-change-type change-changed',
  fixed:   'changelog-change-type change-fixed',
  removed: 'changelog-change-type change-removed',
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function ContributingPage() {
  const sanityChangelog = await getChangelog()
  const entries = (sanityChangelog && (sanityChangelog as any[]).length > 0)
    ? sanityChangelog as any[]
    : STATIC_CHANGELOG

  return (
    <div>
      <PageHeader section="" title="Contributing"
        description="How to propose changes, add components, and keep the system healthy. Plus the full changelog of every version released." />

      {/* Proposal process */}
      <section style={{ marginBottom: 52 }}>
        <h2 style={{ fontSize:'1.125rem', fontWeight:600, color:'var(--color-text)', marginBottom:16 }}>Proposing a change</h2>
        <div style={{ border:'1.5px solid var(--color-border)', borderRadius:12, overflow:'hidden', background:'var(--color-bg-raised)' }}>
          {[
            { step:'01', title:'Open a discussion',     desc:'Create a GitHub Discussion or Slack thread in #design-system describing the change, the problem it solves, and which products it affects.' },
            { step:'02', title:'Design in Figma first', desc:'New components must be designed in Figma before any code is written. Follow the Figma naming convention: Module - Screen - State.' },
            { step:'03', title:'Get sign-off',          desc:'At least one designer and one engineer must review and approve the Figma spec before implementation begins.' },
            { step:'04', title:'Build to the checklist',desc:'Use the component checklist below. Every item must be complete before a PR is opened.' },
            { step:'05', title:'Open a PR',             desc:'PR title format: "feat(component): Add [ComponentName]" or "fix(component): [description]". Link to the Figma spec.' },
            { step:'06', title:'Update the changelog',  desc:'Add your change to the changelog in Sanity Studio. Version bumps follow semver: major for breaking, minor for new features, patch for fixes.' },
          ].map(s => (
            <div key={s.step} style={{ display:'flex', gap:16, padding:'14px 20px', borderBottom:'1px solid var(--color-border)', alignItems:'flex-start' }}>
              <span style={{ fontSize:12, fontWeight:800, color:'var(--color-primary)', opacity:.5, flexShrink:0, minWidth:24, paddingTop:1 }}>{s.step}</span>
              <div>
                <div style={{ fontSize:13.5, fontWeight:700, color:'var(--color-text)', marginBottom:3 }}>{s.title}</div>
                <div style={{ fontSize:13, color:'var(--color-text-secondary)', lineHeight:1.65 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component checklist */}
      <section style={{ marginBottom: 52 }}>
        <h2 style={{ fontSize:'1.125rem', fontWeight:600, color:'var(--color-text)', marginBottom:16 }}>Component checklist</h2>
        <div style={{ border:'1.5px solid var(--color-border)', borderRadius:12, overflow:'hidden', background:'var(--color-bg-raised)' }}>
          {[
            'Figma spec complete — all variants, states, and responsive behaviour documented',
            'Component props defined — all props typed, defaulted, and documented in PropsTable',
            'All interactive states — default, hover, focus, active, disabled, loading, error',
            'Empty state defined — for any component that can receive data',
            'Keyboard accessible — fully operable via keyboard, focus ring visible',
            'ARIA labels — all icon-only elements and non-obvious UI labelled for screen readers',
            'Colour contrast passes WCAG AA — 4.5:1 for normal text, 3:1 for large text',
            'Responsive — tested at 320px, 768px, and 1280px viewport widths',
            'Dark mode compatible — uses CSS variables, not hardcoded colours',
            'Do\'s and Don\'ts written — at least 3 of each',
            'Sanity entry added — component registered in Studio',
            'Changelog updated — entry added to the correct version in Sanity Studio',
          ].map((item, i) => (
            <div key={i} style={{ display:'flex', gap:12, padding:'11px 20px', borderBottom: i < 11 ? '1px solid var(--color-border)' : 'none', alignItems:'flex-start' }}>
              <div style={{ width:18, height:18, border:'1.5px solid var(--color-border)', borderRadius:4, flexShrink:0, marginTop:1 }} />
              <span style={{ fontSize:13, color:'var(--color-text-secondary)', lineHeight:1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Figma naming */}
      <section style={{ marginBottom: 52 }}>
        <h2 style={{ fontSize:'1.125rem', fontWeight:600, color:'var(--color-text)', marginBottom:8 }}>Figma naming convention</h2>
        <p style={{ fontSize:13.5, color:'var(--color-text-secondary)', lineHeight:1.7, marginBottom:16 }}>
          All screens follow the format: <strong style={{ color:'var(--color-text)' }}>Module - Screen Name - State</strong>. Within a product&apos;s own Figma file, no product prefix is needed.
        </p>
        <div style={{ border:'1.5px solid var(--color-border)', borderRadius:12, overflow:'hidden', background:'var(--color-bg-raised)' }}>
          {[
            { ex:'Login - Empty',                              note:'Auth screen, empty state' },
            { ex:'Login - Filled',                             note:'Auth screen, filled state' },
            { ex:'User Management - Create New User - Empty',  note:'Sub-page, empty state' },
            { ex:'User Management - Create New User - Filled', note:'Sub-page, filled state' },
            { ex:'Transactions - View Transaction Details',    note:'Detail page' },
            { ex:'Change Password - Error',                    note:'Modal with error state' },
          ].map(r => (
            <div key={r.ex} style={{ display:'flex', gap:16, padding:'11px 16px', borderBottom:'1px solid var(--color-border)', alignItems:'center', flexWrap:'wrap' }}>
              <code style={{ fontSize:12, fontFamily:'var(--font-mono)', color:'var(--color-primary)', background:'var(--color-primary-faint)', padding:'2px 8px', borderRadius:4, flexShrink:0 }}>{r.ex}</code>
              <span style={{ fontSize:12.5, color:'var(--color-text-muted)' }}>{r.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Changelog */}
      <section>
        <h2 style={{ fontSize:'1.125rem', fontWeight:600, color:'var(--color-text)', marginBottom:8 }}>Changelog</h2>
        <p style={{ fontSize:13, color:'var(--color-text-muted)', marginBottom:28 }}>
          Managed in Sanity Studio — add new entries there after each release.
        </p>

        {entries.map((entry: any) => (
          <div key={entry.version} className="changelog-entry">
            <div className="changelog-header">
              <span className="changelog-version">{entry.version}</span>
              <span className={TYPE_STYLE[entry.type] ?? 'changelog-type changelog-type-minor'}>{entry.type}</span>
              <span className="changelog-date">{formatDate(entry.releaseDate)}</span>
            </div>
            <div className="changelog-changes">
              {entry.changes?.map((c: any, i: number) => (
                <div key={i} className="changelog-change-row">
                  <span className={CHANGE_STYLE[c.changeType] ?? CHANGE_STYLE.changed}>{c.changeType}</span>
                  <span className="changelog-change-desc">{c.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}