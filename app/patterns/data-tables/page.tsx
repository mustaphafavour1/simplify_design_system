'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function DataTablesPage() {
  return (
    <div>
      <PageHeader section="Patterns" title="Data Tables"
        description="The primary data pattern across all SS dashboards. Every table page follows the same structure — stat cards at top, tabs and search below, table in the middle, pagination at the bottom. Always design both empty and filled states." />

      {/* Figma naming */}
      <section className="ps">
        <div className="figma-callout">
          <div className="figma-label">Figma naming — Table screens</div>
          <div className="figma-names">
            <code>Transactions - Empty</code>
            <code>Transactions - Filled</code>
            <code>Collections - Empty</code>
            <code>Collections - Filled</code>
            <code>User Management - Empty</code>
            <code>User Management - Filled</code>
          </div>
        </div>
      </section>

      {/* Page anatomy */}
      <section className="ps">
        <h2 className="pt">Page anatomy — top to bottom</h2>
        <div className="anatomy-list">
          {[
            { n: '01', title: 'Page header',       desc: 'Back arrow + page title (breadcrumb). Optionally a subtitle describing the page purpose.' },
            { n: '02', title: 'Stat cards',         desc: '3–5 summary metrics relevant to the table — total, successful, pending, failed. Each with a semantic icon. Always show ₦ values with two decimals.' },
            { n: '03', title: 'Table toolbar',      desc: 'Row of: tabs (All / filter options) on the left, search input + status filter dropdown, Download Record (PDF/XLSX/HTML/CSV) on the right.' },
            { n: '04', title: 'Table header row',   desc: 'Column labels in UPPERCASE, small. S/N always first. Amount columns labelled "AMOUNT (₦)". ACTIONS always last.' },
            { n: '05', title: 'Table rows',         desc: 'Zebra striping optional. Status as a badge. Amounts right-aligned. Description text truncated with ellipsis. Three-dot menu for ACTIONS.' },
            { n: '06', title: 'Empty state',        desc: 'When no data: illustration centred, "No Records Yet", "When there are [items], they will show here." No action button unless user can directly add.' },
            { n: '07', title: 'Pagination',         desc: '"Showing X–Y of Z items" on the left. Per-page selector (10/25/50) + prev/next arrows + page number input on the right.' },
          ].map(a => (
            <div key={a.n} className="anatomy-row">
              <div className="an-num">{a.n}</div>
              <div>
                <div className="an-title">{a.title}</div>
                <div className="an-desc">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filled state */}
      <section className="ps">
        <h2 className="pt">Filled state — Transactions</h2>
        <p className="pd">Based on VoxePay Transactions. Shows the standard layout with stat cards, toolbar, and populated table rows.</p>
        <div className="table-demo">
          {/* Stat cards */}
          <div className="td-stats">
            {[
              { label: 'Total Inflow',          value: '₦10,315,120,300.00', icon: '⇩', iconColor: '#1B56F4' },
              { label: 'Total Outflow',         value: '₦0.00',              icon: '⇧', iconColor: '#DC2626' },
              { label: 'Pending Funds',         value: '₦10,315,120,300.00', icon: '⏳', iconColor: '#D97706' },
              { label: 'Pending Transactions',  value: '23',                  icon: '◎', iconColor: '#D97706' },
              { label: 'Failed Transactions',   value: '23',                  icon: '⚠', iconColor: '#DC2626' },
            ].map(s => (
              <div key={s.label} className="td-stat">
                <div className="td-stat-top">
                  <span className="td-stat-label">{s.label}</span>
                  <span style={{ fontSize: 14, color: s.iconColor }}>{s.icon}</span>
                </div>
                <div className="td-stat-value">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div className="td-toolbar">
            <div className="td-tabs">
              {['All', 'Inflow', 'Outflow'].map((t, i) => (
                <span key={t} className={`td-tab ${i === 0 ? 'active' : ''}`}>{t}</span>
              ))}
            </div>
            <div className="td-right">
              <div className="td-search">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                Search by reference, description or related party
              </div>
              <div className="td-filter">All Status ▾</div>
              <div className="td-download">
                Download Record
                <span className="dl-btn pdf">PDF</span>
                <span className="dl-btn xls">XLS</span>
                <span className="dl-btn html">HTML</span>
                <span className="dl-btn csv">CSV</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="td-table-wrap">
            <div className="td-thead">
              <span>S/N</span><span>Reference ID</span><span>Type</span><span className="right">Amount (₦)</span><span>Related Party</span><span>Status</span><span>Date</span><span>Description</span><span>Actions</span>
            </div>
            {[
              { ref: 'TRF-0102-2929392', type: 'Transfer', amt: '-200,000.50', party: 'Ugochukwu Jameson', status: 'Successful', date: '19 Jan 2026', desc: 'Purchase of Recent goods and...' },
              { ref: 'TRF-0103-2929393', type: 'Transfer', amt: '-145,000.00', party: 'Chinonso Eze',       status: 'Pending',    date: '19 Jan 2026', desc: 'Payment for services...' },
              { ref: 'TRF-0104-2929394', type: 'Transfer', amt: '-75,000.00',  party: 'Chidi Okafor',      status: 'Successful', date: '19 Jan 2026', desc: 'Invoice settlement...' },
              { ref: 'TRF-0105-2929395', type: 'Transfer', amt: '-90,000.00',  party: 'Sola Adebayo',      status: 'Failed',     date: '19 Jan 2026', desc: 'Purchase of goods...' },
            ].map((r, i) => (
              <div key={i} className="td-row">
                <span className="td-sn">{i + 1}.</span>
                <span className="td-ref">{r.ref}</span>
                <span><span className="type-chip">{r.type}</span></span>
                <span className="right mono-amt">₦{r.amt}</span>
                <span>{r.party}</span>
                <span>
                  <span className={`td-status ${r.status.toLowerCase()}`}>{r.status}</span>
                </span>
                <span>{r.date}</span>
                <span className="td-desc">{r.desc}</span>
                <span className="td-actions">•••</span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="td-pagination">
            <span className="pg-count">Showing 1–4 of 50 items</span>
            <div className="pg-controls">
              <span className="pg-perpage">10 ▲</span>
              <span className="pg-label">per page</span>
              <button className="pg-btn">‹</button>
              <input className="pg-input" defaultValue="1" />
              <span className="pg-of">of 5</span>
              <button className="pg-btn active">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Empty state */}
      <section className="ps">
        <h2 className="pt">Empty state — Transactions</h2>
        <p className="pd">Same structure as the filled state. Stat cards show ₦0.00 / zero. The table body is replaced by the empty state illustration.</p>
        <div className="table-demo">
          <div className="td-stats">
            {['Total Inflow', 'Total Outflow', 'Pending Funds', 'Pending Transactions', 'Failed Transactions'].map(l => (
              <div key={l} className="td-stat">
                <div className="td-stat-label" style={{marginBottom:6}}>{l}</div>
                <div className="td-stat-value" style={{fontSize:'1.1rem'}}>₦0.00</div>
              </div>
            ))}
          </div>
          <div className="td-toolbar" style={{justifyContent:'flex-end'}}>
            <div className="td-tabs">
              {['All', 'Inflow', 'Outflow'].map((t, i) => (
                <span key={t} className={`td-tab ${i === 0 ? 'active' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="td-table-wrap">
            <div className="td-thead">
              <span>S/N</span><span>Reference ID</span><span>Type</span><span className="right">Amount (₦)</span><span>Related Party</span><span>Status</span><span>Date</span><span>Description</span><span>Actions</span>
            </div>
            <div className="td-empty-state">
              <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
                <rect x="16" y="10" width="38" height="48" rx="4" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
                <rect x="22" y="20" width="26" height="2.5" rx="1.25" fill="#D8D5E8"/>
                <rect x="22" y="27" width="20" height="2.5" rx="1.25" fill="#D8D5E8"/>
                <rect x="22" y="34" width="23" height="2.5" rx="1.25" fill="#D8D5E8"/>
                <circle cx="50" cy="50" r="16" fill="white" stroke="#D8D5E8" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="10" fill="#F1F0F5" stroke="#D8D5E8" strokeWidth="1.5"/>
                <line x1="57" y1="57" x2="63" y2="63" stroke="#D8D5E8" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div className="empty-title">No Records Yet</div>
              <div className="empty-sub">When there are transactions, they will show here.</div>
            </div>
          </div>
          <div className="td-pagination">
            <span className="pg-count">Showing 0 of 0 items</span>
            <div className="pg-controls">
              <span className="pg-perpage">10 ▲</span>
              <span className="pg-label">per page</span>
              <button className="pg-btn">‹</button>
              <input className="pg-input" defaultValue="1" />
              <span className="pg-of">of 1</span>
              <button className="pg-btn">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Column patterns */}
      <section className="ps">
        <h2 className="pt">Standard column patterns</h2>
        <div className="col-grid">
          {[
            { col: 'S/N',         rule: 'Always first. Sequential number with full stop: "1." "2." etc.' },
            { col: 'Reference ID',rule: 'Monospace or slightly smaller font. Format: prefix-NNNN-NNNNNNN. Truncate if long.' },
            { col: 'Type',        rule: 'Shown as a chip/tag, not plain text — visually separates it from text columns.' },
            { col: 'Amount (₦)',  rule: 'ALWAYS right-aligned. Always two decimal places. Outflows shown negative (-₦200,000.50).' },
            { col: 'Status',      rule: 'Badge component. Successful = green, Pending = amber, Failed = red, Processing = amber.' },
            { col: 'Date',        rule: 'Format: 19 Jan 2026. Never use slashes. Optionally add time on hover.' },
            { col: 'Description', rule: 'Text truncated with ellipsis at ~30 chars. Full text visible on row hover or expand.' },
            { col: 'Actions',     rule: 'Three-dot (•••) icon button, always last. Opens a dropdown with row-level actions.' },
          ].map(c => (
            <div key={c.col} className="col-row">
              <code className="col-name">{c.col}</code>
              <span className="col-rule">{c.rule}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .ps { margin-bottom: 52px; }
        .pt { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .pd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .figma-callout { display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; background: var(--color-primary-faint); border: 1.5px solid var(--color-primary-subtle); border-radius: 10px; flex-direction: column; }
        .figma-label { font-size: 11px; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: .06em; }
        .figma-names { display: flex; flex-wrap: wrap; gap: 6px; }
        .figma-names code { font-size: 11.5px; font-family: var(--font-mono); background: white; border: 1px solid var(--color-primary-subtle); color: var(--color-text); padding: 3px 8px; border-radius: 5px; }

        .anatomy-list { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .anatomy-row { display: flex; gap: 16px; padding: 13px 16px; border-bottom: 1px solid var(--color-border); align-items: flex-start; }
        .anatomy-row:last-child { border-bottom: none; }
        .an-num { font-size: 12px; font-weight: 800; color: var(--color-primary); opacity: 0.5; flex-shrink: 0; width: 28px; }
        .an-title { font-size: 13px; font-weight: 700; color: var(--color-text); margin-bottom: 3px; }
        .an-desc { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }

        /* Table demo */
        .table-demo { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); font-size: 12.5px; }

        .td-stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px; background: var(--color-border); border-bottom: 1.5px solid var(--color-border); }
        .td-stat { background: var(--color-bg-raised); padding: 14px 16px; }
        .td-stat-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .td-stat-label { font-size: 11px; color: var(--color-text-secondary); font-weight: 500; line-height: 1.4; }
        .td-stat-value { font-size: 1rem; font-weight: 700; color: var(--color-text); font-family: 'Poppins', sans-serif; }

        .td-toolbar { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--color-border); flex-wrap: wrap; }
        .td-tabs { display: flex; align-items: center; gap: 20px; }
        .td-tab { font-size: 13px; font-weight: 500; color: var(--color-text-muted); cursor: pointer; border-bottom: 2px solid transparent; padding-bottom: 2px; }
        .td-tab.active { color: #1B56F4; border-bottom-color: #1B56F4; font-weight: 700; }
        .td-right { display: flex; align-items: center; gap: 8px; margin-left: auto; }
        .td-search { display: flex; align-items: center; gap: 6px; border: 1.5px solid var(--color-border); border-radius: 8px; padding: 7px 12px; font-size: 12px; color: var(--color-text-muted); background: var(--color-bg); min-width: 220px; }
        .td-filter { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 7px 12px; font-size: 12px; color: var(--color-text-muted); cursor: pointer; }
        .td-download { font-size: 12px; font-weight: 600; color: var(--color-text-secondary); display: flex; align-items: center; gap: 6px; }
        .dl-btn { font-size: 10px; font-weight: 700; padding: 3px 6px; border-radius: 4px; border: 1px solid; cursor: pointer; }
        .dl-btn.pdf { color: #DC2626; border-color: #FECACA; background: #FFF5F5; }
        .dl-btn.xls { color: #16A34A; border-color: #BBF7D0; background: #F0FDF4; }
        .dl-btn.html { color: #D97706; border-color: #FDE68A; background: #FFFBEB; }
        .dl-btn.csv { color: #16A34A; border-color: #BBF7D0; background: #F0FDF4; }

        .td-table-wrap {}
        .td-thead { display: grid; grid-template-columns: 40px 1fr 80px 120px 1fr 100px 100px 1fr 70px; gap: 8px; padding: 10px 14px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--color-text-muted); }
        .td-row { display: grid; grid-template-columns: 40px 1fr 80px 120px 1fr 100px 100px 1fr 70px; gap: 8px; padding: 11px 14px; border-bottom: 1px solid var(--color-border); align-items: center; font-size: 12.5px; color: var(--color-text-secondary); transition: background .1s; }
        .td-row:last-child { border-bottom: none; }
        .td-row:hover { background: var(--color-bg-subtle); }
        .td-sn { color: var(--color-text-muted); }
        .td-ref { font-family: var(--font-mono); font-size: 11.5px; color: var(--color-text); }
        .type-chip { background: var(--color-bg-subtle); border: 1px solid var(--color-border); color: var(--color-text-secondary); font-size: 11px; padding: 2px 8px; border-radius: 5px; font-weight: 500; }
        .right { text-align: right; }
        .mono-amt { font-family: var(--font-mono); font-size: 12px; color: var(--color-text); font-weight: 500; }
        .td-status { font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 99px; border: 1px solid; }
        .td-status.successful { color: #166534; background: #F0FDF4; border-color: #BBF7D0; }
        .td-status.pending { color: #92400E; background: #FFFBEB; border-color: #FDE68A; }
        .td-status.failed { color: #991B1B; background: #FFF5F5; border-color: #FECACA; }
        .td-desc { color: var(--color-text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .td-actions { cursor: pointer; color: var(--color-text-muted); letter-spacing: .05em; text-align: center; }

        .td-empty-state { padding: 56px 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .empty-title { font-size: 14px; font-weight: 600; color: var(--color-text-secondary); }
        .empty-sub { font-size: 12.5px; color: var(--color-text-muted); text-align: center; }

        .td-pagination { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-top: 1.5px solid var(--color-border); background: var(--color-bg-subtle); }
        .pg-count { font-size: 12.5px; color: var(--color-text-muted); }
        .pg-controls { display: flex; align-items: center; gap: 8px; }
        .pg-perpage { font-size: 12px; font-weight: 600; border: 1.5px solid var(--color-border); border-radius: 6px; padding: 4px 10px; cursor: pointer; }
        .pg-label { font-size: 12px; color: var(--color-text-muted); }
        .pg-btn { width: 30px; height: 30px; border: 1.5px solid var(--color-border); border-radius: 6px; background: var(--color-bg-raised); font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .pg-btn.active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
        .pg-input { width: 36px; height: 30px; border: 1.5px solid var(--color-border); border-radius: 6px; text-align: center; font-size: 12.5px; font-family: var(--font-sans); }
        .pg-of { font-size: 12.5px; color: var(--color-text-muted); }

        .col-grid { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .col-row { display: grid; grid-template-columns: 150px 1fr; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; align-items: start; }
        .col-row:last-child { border-bottom: none; }
        .col-name { font-family: var(--font-mono); font-size: 12px; color: var(--color-primary); background: var(--color-primary-faint); padding: 2px 8px; border-radius: 4px; }
        .col-rule { color: var(--color-text-secondary); line-height: 1.6; }
      `}</style>
    </div>
  )
}
