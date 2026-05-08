'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import {
  House, ChartLine, Wallet, ArrowsLeftRight, Receipt,
  Gear, Bell, MagnifyingGlass, User, SignOut,
  Check, X, Warning, Info, ArrowLeft, ArrowRight,
  CaretDown, CaretUp, DotsThree, Download, Upload,
  Eye, EyeSlash, Lock, ShieldCheck, CreditCard,
  Bank, Money, CurrencyNgn, Coins, ArrowClockwise,
  Funnel, Export, Printer, FileText, FilePdf,
  PencilSimple, Trash, Plus, Minus, Copy
} from '@phosphor-icons/react'

const categories = [
  {
    name: 'Navigation',
    icons: [
      { name: 'House',           C: House },
      { name: 'ChartLine',       C: ChartLine },
      { name: 'Wallet',          C: Wallet },
      { name: 'ArrowsLeftRight', C: ArrowsLeftRight },
      { name: 'Receipt',         C: Receipt },
      { name: 'Gear',            C: Gear },
      { name: 'Bell',            C: Bell },
      { name: 'User',            C: User },
      { name: 'SignOut',         C: SignOut },
    ],
  },
  {
    name: 'Actions',
    icons: [
      { name: 'MagnifyingGlass', C: MagnifyingGlass },
      { name: 'Plus',            C: Plus },
      { name: 'Minus',           C: Minus },
      { name: 'PencilSimple',    C: PencilSimple },
      { name: 'Trash',           C: Trash },
      { name: 'Download',        C: Download },
      { name: 'Upload',          C: Upload },
      { name: 'Copy',            C: Copy },
      { name: 'Export',          C: Export },
    ],
  },
  {
    name: 'Feedback & Status',
    icons: [
      { name: 'Check',         C: Check },
      { name: 'X',             C: X },
      { name: 'Warning',       C: Warning },
      { name: 'Info',          C: Info },
      { name: 'ShieldCheck',   C: ShieldCheck },
      { name: 'ArrowClockwise',C: ArrowClockwise },
      { name: 'Eye',           C: Eye },
      { name: 'EyeSlash',      C: EyeSlash },
      { name: 'Lock',          C: Lock },
    ],
  },
  {
    name: 'Finance',
    icons: [
      { name: 'CurrencyNgn', C: CurrencyNgn },
      { name: 'CreditCard',  C: CreditCard },
      { name: 'Bank',        C: Bank },
      { name: 'Money',       C: Money },
      { name: 'Coins',       C: Coins },
      { name: 'Wallet',      C: Wallet },
      { name: 'Receipt',     C: Receipt },
      { name: 'FileText',    C: FileText },
      { name: 'FilePdf',     C: FilePdf },
    ],
  },
  {
    name: 'UI Controls',
    icons: [
      { name: 'CaretDown',  C: CaretDown },
      { name: 'CaretUp',    C: CaretUp },
      { name: 'ArrowLeft',  C: ArrowLeft },
      { name: 'ArrowRight', C: ArrowRight },
      { name: 'DotsThree',  C: DotsThree },
      { name: 'Funnel',     C: Funnel },
      { name: 'Printer',    C: Printer },
    ],
  },
]

const sizes = [
  { label: 'xs — 12px', px: 12, use: 'Dense tables, inline labels' },
  { label: 'sm — 16px', px: 16, use: 'Nav items, button icons, badges' },
  { label: 'md — 20px', px: 20, use: 'Default UI icon size' },
  { label: 'lg — 24px', px: 24, use: 'Section icons, empty state icons' },
  { label: 'xl — 32px', px: 32, use: 'Feature icons, card headers' },
  { label: '2xl — 48px',px: 48, use: 'Modal icons, empty state illustrations' },
]

const weights = ['Thin','Light','Regular','Bold','Fill','Duotone'] as const

export default function IconographyPage() {
  return (
    <div>
      <PageHeader section="Foundations" title="Iconography"
        description="Simplify Synergy uses the Phosphor icon set across all products — consistent, clean, and available in 6 weights. Icons are never decorative; every icon must serve a clear functional purpose." />

      {/* Library */}
      <section className="fs">
        <h2 className="ft">Icon library — Phosphor Icons</h2>
        <div className="lib-meta">
          <div className="lib-card">
            <div className="lib-card-title">Library</div>
            <div className="lib-card-val">Phosphor Icons</div>
          </div>
          <div className="lib-card">
            <div className="lib-card-title">Package</div>
            <code className="lib-card-val">@phosphor-icons/react</code>
          </div>
          <div className="lib-card">
            <div className="lib-card-title">Total icons</div>
            <div className="lib-card-val">1,256+</div>
          </div>
          <div className="lib-card">
            <div className="lib-card-title">Weights</div>
            <div className="lib-card-val">6 variants</div>
          </div>
          <div className="lib-card">
            <div className="lib-card-title">Website</div>
            <a href="https://phosphoricons.com" target="_blank" rel="noopener" className="lib-card-link">phosphoricons.com ↗</a>
          </div>
        </div>
        <div className="install-block">
          <div className="install-label">Install</div>
          <code className="install-code">npm install @phosphor-icons/react</code>
        </div>
        <div className="install-block">
          <div className="install-label">Usage</div>
          <code className="install-code">{'import { House, Wallet, CurrencyNgn } from "@phosphor-icons/react"'}<br />{'<House size={20} weight="regular" />'}</code>
        </div>
      </section>

      {/* Sizes */}
      <section className="fs">
        <h2 className="ft">Icon sizes</h2>
        <p className="fd">Use the size that matches the context density. Never scale icons with CSS transforms — always use the size prop.</p>
        <div className="sizes-row">
          {sizes.map(s => (
            <div key={s.label} className="size-item">
              <div className="size-preview">
                <CurrencyNgn size={s.px} weight="regular" color="var(--color-primary)" />
              </div>
              <div className="size-label">{s.label}</div>
              <div className="size-use">{s.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Weights */}
      <section className="fs">
        <h2 className="ft">Icon weights</h2>
        <p className="fd">Phosphor supports 6 weights. SS products primarily use <strong>Regular</strong> for UI icons and <strong>Bold</strong> for active/selected states. Fill is used sparingly for status indicators.</p>
        <div className="weights-row">
          {weights.map(w => (
            <div key={w} className="weight-item">
              <House size={28} weight={w.toLowerCase() as any} color="var(--color-text)" />
              <div className="weight-label">{w}</div>
              {w === 'Regular' && <div className="weight-badge">Default</div>}
              {w === 'Bold' && <div className="weight-badge active">Active states</div>}
              {w === 'Fill' && <div className="weight-badge">Status icons</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      {categories.map(cat => (
        <section key={cat.name} className="fs">
          <h2 className="ft">{cat.name}</h2>
          <div className="icon-grid">
            {cat.icons.map(({ name, C }) => (
              <div key={name} className="icon-tile">
                <C size={24} weight="regular" color="var(--color-text)" />
                <code className="icon-name">{name}</code>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Usage rules */}
      <section className="fs">
        <h2 className="ft">Usage rules</h2>
        <div className="rules-grid">
          {[
            { rule: 'Always pair with a label', body: 'Icons alone are not accessible. Every standalone icon must have a tooltip or aria-label describing what it does.' },
            { rule: 'Use Regular weight by default', body: 'Switch to Bold only for active/selected states. Never use Thin in fintech UI — it reads poorly at small sizes.' },
            { rule: 'Consistent sizing within a context', body: 'All icons in a nav bar should be the same size. All icons in a data table should be the same size. Never mix sizes in one row.' },
            { rule: 'Never use icons decoratively', body: 'Every icon must serve a functional purpose — navigation, action, status, or feedback. If it has no job, remove it.' },
            { rule: 'Colour reflects meaning', body: 'Icon colour should match its semantic context — primary for actions, success green for confirmed states, error red for failures.' },
            { rule: 'Use Fill weight for status', body: 'For filled status indicators (success check, warning triangle), use Fill weight — it reads more clearly at 16px and smaller.' },
          ].map(r => (
            <div key={r.rule} className="rule-card">
              <div className="rule-title">{r.rule}</div>
              <div className="rule-body">{r.body}</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .fs { margin-bottom: 52px; }
        .ft { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .fd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .lib-meta { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 16px; }
        .lib-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 14px 16px; background: var(--color-bg-raised); }
        .lib-card-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); margin-bottom: 4px; }
        .lib-card-val { font-size: 13px; font-weight: 600; color: var(--color-text); }
        .lib-card-link { font-size: 13px; font-weight: 600; color: var(--color-primary); text-decoration: none; }
        .install-block { background: var(--sidebar-bg); border-radius: 10px; padding: 14px 18px; margin-bottom: 8px; }
        .install-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: rgba(151,83,232,.6); margin-bottom: 6px; }
        .install-code { font-family: var(--font-mono); font-size: 13px; color: #C8BDED; line-height: 1.8; }

        .sizes-row { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
        .size-item { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px 12px; background: var(--color-bg-raised); text-align: center; }
        .size-preview { display: flex; align-items: center; justify-content: center; height: 56px; }
        .size-label { font-size: 11px; font-weight: 700; color: var(--color-text); margin-bottom: 4px; }
        .size-use { font-size: 11px; color: var(--color-text-muted); line-height: 1.4; }

        .weights-row { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
        .weight-item { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px 12px; background: var(--color-bg-raised); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .weight-label { font-size: 12px; font-weight: 600; color: var(--color-text); }
        .weight-badge { font-size: 10px; font-weight: 700; background: var(--color-bg-subtle); border: 1px solid var(--color-border); color: var(--color-text-muted); padding: 2px 6px; border-radius: 99px; }
        .weight-badge.active { background: var(--color-primary-faint); border-color: var(--color-primary-subtle); color: var(--color-primary); }

        .icon-grid { display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px; }
        .icon-tile { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 14px 10px; background: var(--color-bg-raised); display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: default; transition: all .12s; }
        .icon-tile:hover { border-color: var(--color-primary); background: var(--color-primary-faint); }
        .icon-name { font-size: 10px; font-family: var(--font-mono); color: var(--color-text-muted); text-align: center; }

        .rules-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .rule-card { border: 1.5px solid var(--color-border); border-radius: 10px; padding: 16px 18px; background: var(--color-bg-raised); }
        .rule-title { font-size: 13px; font-weight: 600; color: var(--color-text); margin-bottom: 5px; }
        .rule-body { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }
      `}</style>
    </div>
  )
}