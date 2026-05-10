'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = ['Use tabs to switch between views of the same data set — All / Inflow / Outflow.','Keep tab labels short — 1–2 words. Never use icons alone in tabs.','Show the active tab count in a badge when the number is meaningful.','Underline style for content tabs. Background/pill style for segmented controls.']
const donts = ["Don't use tabs for navigation between different pages — use the sidebar.","Don't use more than 5 tabs. Beyond that, consider a dropdown filter.","Don't truncate tab labels — if they're too long, shorten the copy.","Don't use tabs and a sidebar nav to represent the same level of hierarchy."]

export default function TabsPage() {
  const [active, setActive] = useState('All')
  const [segActive, setSegActive] = useState('Personal')
  const tabs = ['All','Successful','Pending','Failed']
  const segs = ['Personal','Business','Developers']
  return (
    <div>
      <PageHeader section="Components / Navigation" title="Tabs" status="stable"
        description="Tabs switch between views of related content. SS products use two styles — underline tabs for data filtering and pill/segmented tabs for view switching." />

      <section className="cs">
        <h3 className="ct">Underline tabs — data filtering</h3>
        <p className="cd">Used on every table view: Transactions, Collections, User Management. Active tab has a 2px underline in the product primary colour.</p>
        <div className="demo-block">
          <div className="underline-tabs">
            {tabs.map(t => (
              <button key={t} className={`ut ${active===t?'active':''}`} onClick={() => setActive(t)}>
                {t}
                {t==='All' && <span className="tab-badge">50</span>}
                {t==='Successful' && <span className="tab-badge success">32</span>}
                {t==='Pending' && <span className="tab-badge warn">10</span>}
                {t==='Failed' && <span className="tab-badge err">8</span>}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <p style={{fontSize:13, color:'var(--color-text-muted)', textAlign:'center', padding:'32px 0'}}>
              Showing <strong style={{color:'var(--color-text)'}}>{active}</strong> records
            </p>
          </div>
        </div>
      </section>

      <section className="cs">
        <h3 className="ct">Segmented / pill tabs — view switching</h3>
        <p className="cd">Used on the VoxePay public site (Personal / Business / Developers) and anywhere you need to toggle between two distinct views rather than filter a list.</p>
        <div className="demo-block">
          <div className="seg-tabs">
            {segs.map(s => (
              <button key={s} className={`seg ${segActive===s?'active':''}`} onClick={() => setSegActive(s)}>{s}</button>
            ))}
          </div>
        </div>
      </section>

      <DosDonts dos={dos} donts={donts} />

      <style jsx>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
        .cd { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px; }
        .demo-block { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }

        .underline-tabs { display: flex; border-bottom: 1.5px solid var(--color-border); padding: 0 16px; background: var(--color-bg-subtle); }
        .ut { display: flex; align-items: center; gap: 6px; padding: 12px 4px; margin-right: 20px; background: none; border: none; border-bottom: 2.5px solid transparent; font-size: 13.5px; font-weight: 500; color: var(--color-text-muted); cursor: pointer; font-family: var(--font-sans); margin-bottom: -1.5px; transition: all .15s; }
        .ut:hover { color: var(--color-text); }
        .ut.active { color: var(--color-primary); border-bottom-color: var(--color-primary); font-weight: 700; }
        .tab-badge { font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 99px; background: var(--color-bg); border: 1px solid var(--color-border); color: var(--color-text-muted); }
        .tab-badge.success { background: #F0FDF4; border-color: #BBF7D0; color: #166534; }
        .tab-badge.warn    { background: #FFFBEB; border-color: #FDE68A; color: #92400E; }
        .tab-badge.err     { background: #FFF5F5; border-color: #FECACA; color: #991B1B; }
        .tab-content { padding: 0 16px; }

        .seg-tabs { display: flex; background: var(--color-bg-subtle); border-radius: 99px; padding: 4px; width: fit-content; margin: 20px auto; border: 1.5px solid var(--color-border); }
        .seg { padding: 8px 20px; border-radius: 99px; border: none; font-size: 13.5px; font-weight: 500; background: none; color: var(--color-text-muted); cursor: pointer; font-family: var(--font-sans); transition: all .15s; }
        .seg.active { background: var(--color-primary); color: white; font-weight: 700; box-shadow: 0 2px 8px rgba(151,83,232,.25); }
      `}</style>
    </div>
  )
}
