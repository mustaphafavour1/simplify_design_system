'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'
import { MagnifyingGlass, Plus, Gear, Bell, Trash, X, ArrowLeft, DotsThree } from '@phosphor-icons/react'

const props = [
  { name: 'icon',      type: 'ReactNode',                                     default: '—',          required: true,  description: 'The icon to display. Use a Phosphor icon component.' },
  { name: 'variant',   type: '"primary" | "secondary" | "ghost" | "danger"',  default: '"ghost"',    required: false, description: 'Visual style.' },
  { name: 'size',      type: '"sm" | "md" | "lg"',                            default: '"md"',       required: false, description: 'Controls button and icon size.' },
  { name: 'label',     type: 'string',                                         default: '—',          required: true,  description: 'Accessible label (aria-label). Never omit.' },
  { name: 'disabled',  type: 'boolean',                                        default: 'false',      required: false, description: 'Disables the button.' },
  { name: 'onClick',   type: '() => void',                                     default: '—',          required: false, description: 'Click handler.' },
]

const dos = [
  'Always provide a label prop for screen readers — icon-only buttons have no visible text.',
  'Use tooltips on hover to reveal the action label.',
  'Use ghost variant by default — primary only when the action is the most important on the page.',
  'Group related icon buttons together with consistent sizing.',
]

const donts = [
  "Don't use icon buttons for primary CTAs — use a full Button with label instead.",
  "Don't use more than 3–4 icon buttons in a row without clear visual grouping.",
  "Don't change icon weight between sizes — always use Regular weight.",
  "Don't rely on colour alone to communicate the button's purpose.",
]

const sizes = [
  { size: 'sm', px: 28, iconPx: 14 },
  { size: 'md', px: 36, iconPx: 18 },
  { size: 'lg', px: 44, iconPx: 22 },
]

export default function IconButtonPage() {
  return (
    <div>
      <PageHeader section="Components / Actions" title="Icon Button" status="stable"
        description="A square button containing only an icon. Used for compact actions in toolbars, table rows, and navigation headers. Always requires an accessible label." />

      <ComponentPreview title="Variants"
        code={`<IconButton icon={<Gear />} label="Settings" variant="ghost" />\n<IconButton icon={<Plus />} label="Add" variant="primary" />\n<IconButton icon={<Gear />} label="Settings" variant="secondary" />\n<IconButton icon={<Trash />} label="Delete" variant="danger" />`}>
        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          {[
            { Icon: Gear,  label:'Settings', cls:'ib-ghost'   },
            { Icon: Plus,  label:'Add',      cls:'ib-primary' },
            { Icon: Gear,  label:'Edit',     cls:'ib-secondary'},
            { Icon: Trash, label:'Delete',   cls:'ib-danger'  },
          ].map(({ Icon, label, cls }) => (
            <button key={cls} className={`ib ${cls}`} aria-label={label} title={label}>
              <Icon size={18} weight="regular" />
            </button>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sizes"
        code={`<IconButton size="sm" icon={<Bell />} label="Notifications" />\n<IconButton size="md" icon={<Bell />} label="Notifications" />\n<IconButton size="lg" icon={<Bell />} label="Notifications" />`}>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}>
          {sizes.map(s => (
            <div key={s.size} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
              <button className="ib ib-ghost" style={{ width:s.px, height:s.px }} aria-label="Notifications" title="Notifications">
                <Bell size={s.iconPx} weight="regular" />
              </button>
              <span style={{ fontSize:11, color:'var(--color-text-muted)', fontWeight:600 }}>{s.size}</span>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="In context — table toolbar"
        description="How icon buttons appear in a data table header row."
        code={`<IconButton icon={<MagnifyingGlass />} label="Search" />\n<IconButton icon={<ArrowLeft />} label="Back" />\n<IconButton icon={<DotsThree />} label="More options" />`}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 16px', background:'var(--color-bg-raised)', border:'1.5px solid var(--color-border)', borderRadius:10, width:'100%' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <button className="ib ib-ghost" aria-label="Back" title="Back"><ArrowLeft size={18} /></button>
            <span style={{ fontSize:14, fontWeight:700, color:'var(--color-text)' }}>Transactions</span>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            <button className="ib ib-ghost" aria-label="Search" title="Search"><MagnifyingGlass size={18} /></button>
            <button className="ib ib-ghost" aria-label="Notifications" title="Notifications"><Bell size={18} /></button>
            <button className="ib ib-ghost" aria-label="More options" title="More options"><DotsThree size={18} /></button>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />

      <style jsx global>{`
        .ib {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 8px;
          border: 1.5px solid transparent;
          cursor: pointer; transition: all .15s; flex-shrink: 0;
        }
        .ib-ghost     { background: none; color: var(--color-text-secondary); border-color: transparent; }
        .ib-ghost:hover { background: var(--color-bg-subtle); color: var(--color-text); border-color: var(--color-border); }
        .ib-primary   { background: var(--color-primary); color: white; border-color: var(--color-primary); }
        .ib-primary:hover { background: var(--color-primary-dark); }
        .ib-secondary { background: transparent; color: var(--color-primary); border-color: var(--color-primary); }
        .ib-secondary:hover { background: var(--color-primary-faint); }
        .ib-danger    { background: none; color: #DC2626; border-color: transparent; }
        .ib-danger:hover { background: #FFF5F5; border-color: #FECACA; }
      `}</style>
    </div>
  )
}
