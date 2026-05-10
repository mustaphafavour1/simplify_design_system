'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = ['Always show "Showing X–Y of Z items" on the left.','Provide a per-page selector (10/25/50) — default 10.','Show prev/next arrows + editable page number input.','Disable prev on page 1 and next on the last page — never hide them.']
const donts = ["Don't show pagination when there is only 1 page of results.","Don't show page number buttons for every page — just prev/next + current input.","Don't reset to page 1 when the user changes the per-page count — stay in context.","Don't change the layout of pagination between pages — it must be identical everywhere."]

export default function PaginationPage() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const total = 50
  const totalPages = Math.ceil(total / perPage)
  const from = (page - 1) * perPage + 1
  const to = Math.min(page * perPage, total)
  return (
    <div>
      <PageHeader section="Components / Navigation" title="Pagination" status="stable"
        description="Navigation between pages of data. Used on every table view across VoxePay, Compliance Engine, and any data-heavy dashboard. Must be identical in layout across all products." />

      <section className="cs">
        <h3 className="ct">Live demo — VoxePay style</h3>
        <div className="pg-demo">
          <span className="pg-count">Showing {from}–{to} of {total} items</span>
          <div className="pg-controls">
            <div className="pp-select" onClick={() => setPerPage(p => p === 10 ? 25 : p === 25 ? 50 : 10)}>
              {perPage} ▲
            </div>
            <span className="pg-label">per page</span>
            <button className="pg-btn" onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}>‹</button>
            <input className="pg-input" value={page} onChange={e => setPage(Math.min(totalPages, Math.max(1, Number(e.target.value))))} />
            <span className="pg-of">of {totalPages}</span>
            <button className="pg-btn primary" onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}>›</button>
          </div>
        </div>
        <p className="demo-note">Click ‹ and › to paginate. Click the per-page selector to switch between 10 / 25 / 50.</p>
      </section>

      <section className="cs">
        <h3 className="ct">Anatomy</h3>
        <div className="anatomy-wrap">
          {[
            { part: 'Item count',       spec: '"Showing X–Y of Z items". Always visible. Updates on page change and per-page change.' },
            { part: 'Per-page selector',spec: 'Dropdown or toggle: 10 / 25 / 50. Default is always 10. Has an up-caret (▲) icon.' },
            { part: 'Previous button',  spec: '‹ arrow. Disabled on page 1 — never hidden. Muted/greyed out when inactive.' },
            { part: 'Page input',       spec: 'Editable number input. User can type a page number directly. Clamps to valid range.' },
            { part: '"of X" label',     spec: 'Shows total page count next to the input. Updates dynamically.' },
            { part: 'Next button',      spec: '› arrow. Disabled on last page — never hidden. Uses product primary colour when active.' },
          ].map(a => (
            <div key={a.part} className="anatomy-row">
              <span className="ap">{a.part}</span>
              <span className="as">{a.spec}</span>
            </div>
          ))}
        </div>
      </section>

      <DosDonts dos={dos} donts={donts} />

      <style jsx>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .pg-demo { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; background: var(--color-bg-raised); border: 1.5px solid var(--color-border); border-radius: 12px; }
        .pg-count { font-size: 13px; color: var(--color-text-muted); }
        .pg-controls { display: flex; align-items: center; gap: 8px; }
        .pp-select { border: 1.5px solid var(--color-border); border-radius: 7px; padding: 5px 12px; font-size: 13px; font-weight: 600; cursor: pointer; color: var(--color-text); background: var(--color-bg-raised); user-select: none; }
        .pg-label { font-size: 13px; color: var(--color-text-muted); }
        .pg-btn { width: 32px; height: 32px; border: 1.5px solid var(--color-border); border-radius: 7px; background: var(--color-bg-raised); font-size: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--color-text); font-family: var(--font-sans); transition: all .12s; }
        .pg-btn:disabled { opacity: .4; cursor: not-allowed; }
        .pg-btn.primary { background: var(--color-primary); color: white; border-color: var(--color-primary); }
        .pg-btn.primary:disabled { background: var(--color-border); border-color: var(--color-border); color: var(--color-text-muted); }
        .pg-input { width: 38px; height: 32px; border: 1.5px solid var(--color-border); border-radius: 7px; text-align: center; font-size: 13px; font-family: var(--font-sans); }
        .pg-of { font-size: 13px; color: var(--color-text-muted); }
        .demo-note { font-size: 12px; color: var(--color-text-muted); margin-top: 10px; }
        .anatomy-wrap { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .anatomy-row { display: grid; grid-template-columns: 180px 1fr; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; }
        .anatomy-row:last-child { border-bottom: none; }
        .ap { font-weight: 700; color: var(--color-text); }
        .as { color: var(--color-text-secondary); line-height: 1.6; }
      `}</style>
    </div>
  )
}
