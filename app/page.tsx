'use client'
import Link from 'next/link'
import {
  PaintBrush, Cube, SquaresFour, AppWindow,
  Laptop, GitBranch, ArrowRight
} from '@phosphor-icons/react'

const sections = [
  {
    title: 'Brand',
    Icon: PaintBrush,
    description: 'Logo, colours, typography, and voice guidelines that define the Simplify Synergy identity.',
    href: '/brand/colours',
    items: ['Logo', 'Colours', 'Typography', 'Voice & Tone'],
  },
  {
    title: 'Foundations',
    Icon: Cube,
    description: 'The building blocks — spacing, tokens, elevation, and accessibility standards.',
    href: '/foundations/tokens',
    items: ['Design Tokens', 'Spacing', 'Elevation', 'Iconography'],
  },
  {
    title: 'Components',
    Icon: SquaresFour,
    description: 'Reusable UI components for building consistent, accessible product interfaces.',
    href: '/components/button',
    items: ['Button', 'Input', 'Table', 'Modal', '+28 more'],
  },
  {
    title: 'Patterns',
    Icon: AppWindow,
    description: 'Composed solutions for common UX scenarios across SS products.',
    href: '/patterns/dashboard',
    items: ['Authentication', 'Dashboard', 'Data Tables', 'Forms'],
  },
  {
    title: 'Products',
    Icon: Laptop,
    description: 'Design language and specific patterns for each Simplify Synergy product.',
    href: '/products/voxepay',
    items: ['Maestro MFB', 'VoxePay', 'Compliance Engine'],
  },
  {
    title: 'Contributing',
    Icon: GitBranch,
    description: 'Proposal process, component checklist, naming conventions, and changelog.',
    href: '/contributing',
    items: ['Proposing Changes', 'Component Checklist', 'Naming Rules', 'Changelog'],
  },
]

const stats = [
  { value: '32+',  label: 'Components' },
  { value: '4',    label: 'Products' },
  { value: '1',    label: 'Design Language' },
  { value: 'v1.0', label: 'Release' },
]

export default function Home() {
  return (
    <div className="overview">
      {/* Hero */}
      <div className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          <span>Simplify Synergy Design System</span>
          <span className="badge">v1.0</span>
        </div>
        <h1 className="hero-title">
          One language.<br />
          <span className="title-accent">Every product.</span>
        </h1>
        <p className="hero-desc">
          The single source of truth for design and engineering across
          Maestro MFB, VoxePay, Compliance Engine, and all Simplify Synergy products.
          Built for consistency, built for speed.
        </p>
        <div className="hero-ctas">
          <Link href="/brand/colours" className="cta-primary">Get started →</Link>
          <Link href="/components/button" className="cta-secondary">Browse components</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="section-divider"><span>What&apos;s inside</span></div>

      {/* Sections Grid */}
      <div className="sections-grid">
        {sections.map(s => (
          <Link key={s.title} href={s.href} className="section-card">
            <div className="card-icon-wrap">
              <s.Icon size={20} weight="duotone" color="var(--color-primary)" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.description}</p>
              <ul className="card-items">
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <ArrowRight size={16} className="card-arrow" weight="bold" />
          </Link>
        ))}
      </div>

      {/* Principles */}
      <div className="principles">
        <h2 className="principles-title">Design Principles</h2>
        <div className="principles-grid">
          {[
            { title: 'Clarity first',         body: 'Every interface element should communicate one thing well. Especially in fintech — ambiguity costs trust.' },
            { title: 'Calm & trustworthy',    body: 'Financial products carry weight. Our design language should feel stable, professional, and reassuring.' },
            { title: 'Purposeful motion',     body: 'Animations exist to guide attention and confirm actions — not to decorate. When in doubt, don\'t animate.' },
            { title: 'Accessible by default', body: 'AA colour contrast, keyboard navigation, and ARIA labels are not optional. They\'re built in from day one.' },
          ].map(p => (
            <div key={p.title} className="principle-item">
              <div className="principle-mark" />
              <h4 className="principle-title">{p.title}</h4>
              <p className="principle-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .overview { max-width: 860px; }
        .hero { padding-bottom: 48px; border-bottom: 1px solid var(--color-border); }
        .hero-eyebrow { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary); margin-bottom: 20px; }
        .eyebrow-dot { width: 6px; height: 6px; background: var(--color-primary); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        .badge { background: var(--color-primary-faint); color: var(--color-primary); font-size: 11px; padding: 2px 8px; border-radius: 99px; border: 1px solid var(--color-primary-subtle); }
        .hero-title { font-size: clamp(2.4rem,5vw,3.5rem); font-weight: 700; line-height: 1.1; color: var(--color-text); margin-bottom: 16px; letter-spacing: -0.02em; }
        .title-accent { color: var(--color-primary); }
        .hero-desc { font-size: 1rem; line-height: 1.75; color: var(--color-text-secondary); max-width: 540px; margin-bottom: 28px; }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .cta-primary { display: inline-flex; align-items: center; padding: 10px 22px; background: var(--color-primary); color: #fff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 700; transition: all .15s; }
        .cta-primary:hover { background: var(--color-primary-dark); transform: translateY(-1px); }
        .cta-secondary { display: inline-flex; align-items: center; padding: 10px 22px; background: transparent; color: var(--color-text); text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; border: 1.5px solid var(--color-border); transition: all .15s; }
        .cta-secondary:hover { border-color: var(--color-primary); color: var(--color-primary); }

        .stats-row { display: flex; gap: 0; margin: 40px 0; }
        .stat-item { flex: 1; text-align: center; padding: 20px 0; border-right: 1px solid var(--color-border); }
        .stat-item:last-child { border-right: none; }
        .stat-item:first-child { text-align: left; }
        .stat-value { display: block; font-size: 2rem; font-weight: 700; color: var(--color-primary); letter-spacing: -0.02em; }
        .stat-label { display: block; font-size: 12px; font-weight: 500; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: .06em; margin-top: 4px; }

        .section-divider { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; color: var(--color-text-muted); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; font-weight: 700; }
        .section-divider::before,.section-divider::after { content: ''; flex: 1; height: 1px; background: var(--color-border); }

        .sections-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; margin-bottom: 56px; }
        .section-card { display: flex; align-items: flex-start; gap: 14px; padding: 20px; background: var(--color-bg-raised); border: 1.5px solid var(--color-border); border-radius: 12px; text-decoration: none; transition: all .15s; }
        .section-card:hover { border-color: var(--color-primary); box-shadow: 0 4px 24px rgba(151,83,232,.1); transform: translateY(-1px); }
        .card-icon-wrap { width: 36px; height: 36px; background: var(--color-primary-faint); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .card-body { flex: 1; min-width: 0; }
        .card-title { font-size: 14px; font-weight: 700; color: var(--color-text); margin-bottom: 4px; }
        .card-desc { font-size: 12.5px; line-height: 1.6; color: var(--color-text-secondary); margin-bottom: 10px; }
        .card-items { display: flex; flex-wrap: wrap; gap: 4px; list-style: none; padding: 0; margin: 0; }
        .card-items li { font-size: 11px; padding: 2px 8px; background: var(--color-bg-subtle); color: var(--color-text-secondary); border-radius: 99px; font-weight: 500; }
        .card-arrow { color: var(--color-text-muted); transition: all .15s; flex-shrink: 0; margin-top: 2px; }
        .section-card:hover .card-arrow { color: var(--color-primary); transform: translateX(2px); }

        .principles { border-top: 1px solid var(--color-border); padding-top: 48px; }
        .principles-title { font-size: 1.25rem; font-weight: 600; color: var(--color-text); margin-bottom: 24px; }
        .principles-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        .principle-mark { width: 24px; height: 3px; background: var(--color-primary); border-radius: 2px; margin-bottom: 10px; }
        .principle-title { font-size: 14px; font-weight: 700; color: var(--color-text); margin-bottom: 6px; }
        .principle-body { font-size: 13px; line-height: 1.7; color: var(--color-text-secondary); }
      `}</style>
    </div>
  )
}
