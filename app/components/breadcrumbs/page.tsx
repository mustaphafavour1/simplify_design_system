'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = ['Use breadcrumbs on any page that is 2+ levels deep from the root.','Every ancestor link must be clickable and navigate correctly.','On mobile, collapse to just ← and the immediate parent.','Use a right-pointing caret (▶) as separator — not / or >.']
const donts = ["Don't use breadcrumbs on the main section pages (Dashboard, Transactions) — only on detail/sub-pages.","Don't show the current page as a link — it should be bold, non-clickable text.","Don't use breadcrumbs and a separate back button on the same page.","Don't truncate ancestor names with ellipsis — shorten the copy instead."]

export default function BreadcrumbsPage() {
  return (
    <div>
      <PageHeader section="Components / Navigation" title="Breadcrumbs" status="stable"
        description="Shows the user's location within a multi-level hierarchy. Used on all sub-pages and detail pages across SS products alongside a back arrow." />

      <section className="cs">
        <h3 className="ct">Patterns</h3>
        <div className="demos">
          {[
            { label: 'Single level — back arrow only', el: <div className="bc-demo"><span className="bc-back">←</span><span className="bc-current">Collections</span></div> },
            { label: 'Two levels', el: <div className="bc-demo"><span className="bc-back">←</span><span className="bc-link">User Management</span><span className="bc-sep">▶</span><span className="bc-current">Create New User</span></div> },
            { label: 'Three levels', el: <div className="bc-demo"><span className="bc-back">←</span><span className="bc-link">Settings</span><span className="bc-sep">▶</span><span className="bc-link">Security</span><span className="bc-sep">▶</span><span className="bc-current">Change Password</span></div> },
          ].map(d => (
            <div key={d.label} className="demo-card">
              <div className="demo-label">{d.label}</div>
              {d.el}
            </div>
          ))}
        </div>
      </section>

      <DosDonts dos={dos} donts={donts} />

      <style jsx>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .demos { display: flex; flex-direction: column; gap: 10px; }
        .demo-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px 20px; background: var(--color-bg-raised); }
        .demo-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); margin-bottom: 12px; }
        .bc-demo { display: flex; align-items: center; gap: 8px; }
        .bc-back { font-size: 16px; color: var(--color-text-secondary); cursor: pointer; line-height: 1; }
        .bc-link { font-size: 13.5px; color: var(--color-text-secondary); cursor: pointer; text-decoration: none; transition: color .12s; }
        .bc-link:hover { color: var(--color-primary); }
        .bc-sep { font-size: 9px; color: var(--color-primary); opacity: .6; }
        .bc-current { font-size: 13.5px; font-weight: 700; color: var(--color-text); }
      `}</style>
    </div>
  )
}
