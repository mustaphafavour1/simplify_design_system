'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { DosDonts } from '@/components/docs/DosDonts'

const dos = ['Show skeleton screens immediately — never show a blank page during loading.','Match the skeleton layout to the actual content it represents.','Use the shimmer animation (moving gradient) to signal active loading.','Remove skeletons as soon as data arrives — never animate them once content loads.']
const donts = ["Don't use a spinner for page-level or table loading — use skeletons instead.","Don't show skeleton for less than 300ms — it's more jarring than the content appearing.","Don't use skeleton for small inline updates like badge counts — update directly.","Don't make skeleton elements significantly different in size from the actual content."]

export default function SkeletonPage() {
  return (
    <div>
      <PageHeader section="Components / Feedback" title="Skeleton Loader" status="stable"
        description="Skeleton screens replace content while data is loading. Used for table rows, stat cards, and dashboard sections. Always prefer skeleton over a blank page or spinner." />

      <section className="cs">
        <h3 className="ct">Stat cards</h3>
        <div className="skel-cards">
          {[1,2,3,4].map(i => (
            <div key={i} className="skel-card">
              <div className="sk-row"><div className="sk sk-label" /><div className="sk sk-icon" /></div>
              <div className="sk sk-value" style={{marginTop:10}} />
              <div className="sk sk-sub" style={{marginTop:6}} />
            </div>
          ))}
        </div>
      </section>

      <section className="cs">
        <h3 className="ct">Table rows</h3>
        <div className="skel-table">
          <div className="skel-thead">
            {['S/N','Reference ID','Type','Amount','Status','Date','Actions'].map(h => (
              <span key={h} style={{fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em', color:'var(--color-text-muted)'}}>{h}</span>
            ))}
          </div>
          {[1,2,3,4,5].map(i => (
            <div key={i} className="skel-row">
              {[30, 120, 70, 90, 80, 90, 30].map((w, j) => (
                <div key={j} className="sk" style={{width:w, height:10}} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .cs { margin-bottom: 40px; }
        .ct { font-size: 15px; font-weight: 600; color: var(--color-text); margin-bottom: 12px; }
        .sk {
          border-radius: 6px; display: block;
          background: linear-gradient(90deg, var(--color-bg-subtle) 25%, var(--color-border) 50%, var(--color-bg-subtle) 75%);
          background-size: 200%; animation: sk-shimmer 1.4s infinite;
        }
        @keyframes sk-shimmer { to { background-position: -200% 0; } }
        .sk-label { height: 10px; width: 60%; }
        .sk-icon  { height: 16px; width: 16px; border-radius: 4px; }
        .sk-value { height: 24px; width: 85%; border-radius: 8px; }
        .sk-sub   { height: 9px;  width: 45%; }
        .skel-cards { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; }
        .skel-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 16px 18px; background: var(--color-bg-raised); }
        .sk-row { display: flex; align-items: center; justify-content: space-between; }
        .skel-table { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; background: var(--color-bg-raised); }
        .skel-thead { display: grid; grid-template-columns: 40px 1fr 70px 90px 90px 90px 50px; gap: 8px; padding: 10px 14px; background: var(--color-bg-subtle); border-bottom: 1.5px solid var(--color-border); }
        .skel-row { display: grid; grid-template-columns: 40px 1fr 70px 90px 90px 90px 50px; gap: 8px; padding: 14px 14px; border-bottom: 1px solid var(--color-border); align-items: center; }
        .skel-row:last-child { border-bottom: none; }
      `}</style>
    </div>
  )
}
