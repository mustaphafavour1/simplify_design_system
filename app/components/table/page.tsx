'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'
import { PropsTable } from '@/components/docs/PropsTable'

const props = [
  { name: 'columns',    type: 'Column[]',            default: '[]',    required: true,  description: 'Column definitions — key, label, width, align, render.' },
  { name: 'data',       type: 'Record<string,any>[]',default: '[]',    required: true,  description: 'Array of row data objects.' },
  { name: 'loading',    type: 'boolean',             default: 'false', required: false, description: 'Shows skeleton rows while data loads.' },
  { name: 'emptyTitle', type: 'string',              default: '"No Records Yet"', required: false, description: 'Empty state headline.' },
  { name: 'emptyDesc',  type: 'string',              default: '—',     required: false, description: 'Empty state description.' },
  { name: 'onRowClick', type: '(row) => void',       default: '—',     required: false, description: 'Makes rows clickable — adds hover state.' },
]

const dos = [
  'Always show both empty and filled states in Figma — design both before handoff.',
  'Right-align all monetary amounts. Always two decimal places.',
  'Use a Badge component for Status columns — never plain text.',
  'Truncate long text (descriptions, emails) with ellipsis. Show full text on hover.',
  'Place a three-dot (•••) Actions button as the last column for row-level operations.',
]
const donts = [
  "Don't show a completely blank page while loading — always show skeleton rows.",
  "Don't use more than 9 columns. If you need more, consider progressive disclosure.",
  "Don't left-align currency columns — right-alignment is non-negotiable.",
  "Don't mix font sizes inside table rows — every cell uses the same 13px body size.",
]

const rows = [
  { sn:1, ref:'TRF-0102-2929392', type:'Transfer', amt:'200,000.50', party:'Ugochukwu Jameson', status:'Successful', date:'19 Jan 2026' },
  { sn:2, ref:'TRF-0103-2929393', type:'Transfer', amt:'145,000.00', party:'Chinonso Eze',       status:'Pending',    date:'19 Jan 2026' },
  { sn:3, ref:'TRF-0104-2929394', type:'Transfer', amt:'75,000.00',  party:'Chidi Okafor',       status:'Successful', date:'19 Jan 2026' },
  { sn:4, ref:'TRF-0105-2929395', type:'Transfer', amt:'90,000.00',  party:'Sola Adebayo',       status:'Failed',     date:'19 Jan 2026' },
  { sn:5, ref:'TRF-0106-2929396', type:'Transfer', amt:'200,000.00', party:'Ify Onwuka',         status:'Pending',    date:'19 Jan 2026' },
]

const statusStyles: Record<string, React.CSSProperties> = {
  Successful: { color:'#166534', background:'#F0FDF4', border:'1px solid #BBF7D0' },
  Pending:    { color:'#92400E', background:'#FFFBEB', border:'1px solid #FDE68A' },
  Failed:     { color:'#991B1B', background:'#FFF5F5', border:'1px solid #FECACA' },
}

export default function TablePage() {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <PageHeader section="Components / Data Display" title="Table" status="stable"
        description="The most-used data component across SS products. Every dashboard view — VoxePay Transactions, Collections, Compliance User Management — uses this pattern." />

      {/* Filled */}
      <section className="cs">
        <h3 className="ct">Filled state</h3>
        <div className="tbl-wrap">
          <div className="tbl-toolbar">
            <div className="tbl-tabs">
              {['All','Inflow','Outflow'].map((t,i)=>(
                <span key={t} className={`ttab ${i===0?'active':''}`}>{t}</span>
              ))}
            </div>
            <div className="tbl-search">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              Search by reference or related party
            </div>
            <div className="tbl-filter">All Status ▾</div>
          </div>
          <div className="tbl">
            <div className="thead">
              <span>S/N</span><span>Reference ID</span><span>Type</span>
              <span className="right">Amount (₦)</span><span>Related Party</span>
              <span>Status</span><span>Date</span><span>Actions</span>
            </div>
            {(loading ? Array(5).fill(null) : rows).map((r, i) => (
              loading ? (
                <div key={i} className="trow skel-row">
                  {[40,120,70,100,130,90,90,40].map((w,j)=>(
                    <span key={j} className="skel-cell" style={{width:w}}/>
                  ))}
                </div>
              ) : (
                <div key={r.sn} className="trow">
                  <span className="muted">{r.sn}.</span>
                  <code className="ref">{r.ref}</code>
                  <span><span className="chip">{r.type}</span></span>
                  <span className="right mono">-₦{r.amt}</span>
                  <span>{r.party}</span>
                  <span><span className="badge" style={statusStyles[r.status]}>{r.status}</span></span>
                  <span>{r.date}</span>
                  <span className="dots">•••</span>
                </div>
              )
            ))}
          </div>
          <div className="tbl-foot">
            <span>Showing 1–5 of 50 items</span>
            <div className="pg">
              <span className="pg-pp">10 ▲</span> per page
              <button className="pg-b">‹</button>
              <input className="pg-i" defaultValue="1" readOnly />
              <span>of 5</span>
              <button className="pg-b active">›</button>
            </div>
          </div>
        </div>
        <button className="toggle-btn" onClick={() => setLoading(l => !l)}>
          Toggle loading state
        </button>
      </section>

      {/* Empty */}
      <section className="cs">
        <h3 className="ct">Empty state</h3>
        <div className="tbl-wrap">
          <div className="tbl">
            <div className="thead">
              <span>S/N</span><span>Reference ID</span><span>Type</span>
              <span className="right">Amount (₦)</span><span>Related Party</span>
              <span>Status</span><span>Date</span><span>Actions</span>
            </div>
            <div className="empty-body">
              <svg width="64" height="64" viewBox="0 0 80 80" fill="none">
                <rect x="16" y="10" width="38" height="48" rx="4" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
                <rect x="22" y="20" width="26" height="2.5" rx="1.25" fill="#D8D5E8"/>
                <rect x="22" y="27" width="20" height="2.5" rx="1.25" fill="#D8D5E8"/>
                <circle cx="50" cy="50" r="16" fill="white" stroke="#D8D5E8" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="10" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
                <line x1="57" y1="57" x2="63" y2="63" stroke="#D8D5E8" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <p className="empty-title">No Records Yet</p>
              <p className="empty-sub">When there are transactions, they will show here.</p>
            </div>
          </div>
          <div className="tbl-foot"><span>Showing 0 of 0 items</span></div>
        </div>
      </section>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .tbl-wrap { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .tbl-toolbar { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--color-border); flex-wrap: wrap; }
        .tbl-tabs { display: flex; gap: 18px; }
        .ttab { font-size: 13px; color: var(--color-text-muted); font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; padding-bottom: 2px; }
        .ttab.active { color: var(--color-primary); border-bottom-color: var(--color-primary); font-weight: 700; }
        .tbl-search { display: flex; align-items: center; gap: 6px; border: 1.5px solid var(--color-border); border-radius: 7px; padding: 7px 11px; font-size: 12px; color: var(--color-text-muted); flex: 1; }
        .tbl-filter { border: 1.5px solid var(--color-border); border-radius: 7px; padding: 7px 12px; font-size: 12px; color: var(--color-text-muted); cursor: pointer; white-space: nowrap; }
        .tbl { }
        .thead { display: grid; grid-template-columns: 36px 1fr 80px 110px 1fr 100px 100px 50px; gap: 8px; padding: 10px 14px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--color-text-muted); }
        .trow { display: grid; grid-template-columns: 36px 1fr 80px 110px 1fr 100px 100px 50px; gap: 8px; padding: 11px 14px; border-bottom: 1px solid var(--color-border); align-items: center; font-size: 12.5px; color: var(--color-text-secondary); cursor: pointer; transition: background .1s; }
        .trow:last-child { border-bottom: none; }
        .trow:hover { background: var(--color-bg-subtle); }
        .skel-row { cursor: default; }
        .skel-row:hover { background: transparent; }
        .skel-cell { display: block; height: 10px; background: linear-gradient(90deg, var(--color-bg-subtle) 25%, var(--color-border) 50%, var(--color-bg-subtle) 75%); background-size: 200%; border-radius: 4px; animation: shimmer 1.4s infinite; }
        @keyframes shimmer { to { background-position: -200% 0; } }
        .muted { color: var(--color-text-muted); }
        .ref { font-family: var(--font-mono); font-size: 11px; color: var(--color-text); }
        .chip { background: var(--color-bg-subtle); border: 1px solid var(--color-border); font-size: 11px; padding: 2px 7px; border-radius: 5px; color: var(--color-text-secondary); }
        .right { text-align: right; }
        .mono { font-family: var(--font-mono); font-size: 12px; color: var(--color-text); font-weight: 500; }
        .badge { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 99px; }
        .dots { text-align: center; letter-spacing: .05em; color: var(--color-text-muted); }
        .empty-body { padding: 56px 20px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .empty-title { font-size: 14px; font-weight: 600; color: var(--color-text-secondary); margin: 0; }
        .empty-sub { font-size: 12.5px; color: var(--color-text-muted); margin: 0; }
        .tbl-foot { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-top: 1.5px solid var(--color-border); background: var(--color-bg-subtle); font-size: 12px; color: var(--color-text-muted); }
        .pg { display: flex; align-items: center; gap: 8px; }
        .pg-pp { border: 1.5px solid var(--color-border); border-radius: 6px; padding: 3px 9px; font-size: 12px; cursor: pointer; }
        .pg-b { width: 28px; height: 28px; border: 1.5px solid var(--color-border); border-radius: 6px; background: var(--color-bg-raised); font-size: 13px; cursor: pointer; }
        .pg-b.active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
        .pg-i { width: 32px; height: 28px; border: 1.5px solid var(--color-border); border-radius: 6px; text-align: center; font-size: 12px; font-family: var(--font-sans); }
        .toggle-btn { margin-top: 10px; padding: 7px 14px; border: 1.5px solid var(--color-border); border-radius: 7px; background: none; font-size: 12.5px; font-weight: 600; color: var(--color-text-secondary); cursor: pointer; font-family: var(--font-sans); }
        .toggle-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
      `}</style>
    </div>
  )
}
