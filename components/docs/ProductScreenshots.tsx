'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Screen = {
  url?: string
  caption?: string
  label?: string // for static placeholders
}

type Props = {
  screenshots: Screen[] | null
  staticScreenshots: string[]
}

export function ProductScreenshots({ screenshots, staticScreenshots }: Props) {
  const [lightbox, setLightbox] = useState<Screen | null>(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightbox, close])

  return (
    <>
      <div className="prod-screens-grid">
        {screenshots
          ? screenshots.map((s, i) => (
              <button
                key={i}
                className="prod-screen-card prod-screen-clickable"
                onClick={() => setLightbox(s)}
                aria-label={`View ${s.caption || `screen ${i + 1}`} full size`}
              >
                <div className="prod-screen-thumb">
                  <Image
                    src={s.url!}
                    alt={s.caption || `Screen ${i + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                {s.caption && <div className="prod-screen-caption">{s.caption}</div>}
              </button>
            ))
          : staticScreenshots.map(label => (
              <div key={label} className="prod-screen-ph">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{label}</span>
                <span style={{ fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 400 }}>Upload in Studio</span>
              </div>
            ))
        }
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lb-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Screen preview">
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={close} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="lb-img-wrap">
              <Image
                src={lightbox.url!}
                alt={lightbox.caption || 'Screen preview'}
                fill
                style={{ objectFit: 'contain' }}
                sizes="90vw"
                priority
              />
            </div>
            {lightbox.caption && <div className="lb-caption">{lightbox.caption}</div>}
          </div>
        </div>
      )}

      <style jsx>{`
        .prod-screens-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }

        .prod-screen-card { border-radius: 10px; overflow: hidden; border: 1.5px solid var(--color-border); padding: 0; background: none; text-align: left; }
        .prod-screen-clickable { cursor: zoom-in; transition: all .15s; }
        .prod-screen-clickable:hover { border-color: var(--color-primary); box-shadow: 0 4px 16px rgba(151,83,232,.15); transform: translateY(-2px); }

        .prod-screen-thumb { position: relative; width: 100%; height: 160px; background: var(--color-bg-subtle); }

        .prod-screen-ph { border: 2px dashed var(--color-border); border-radius: 10px; height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; background: var(--color-bg-subtle); font-size: 11.5px; font-weight: 600; color: var(--color-text-secondary); text-align: center; padding: 14px; }

        .prod-screen-caption { font-size: 11px; font-weight: 600; color: var(--color-text-muted); padding: 7px 12px; background: var(--color-bg-subtle); border-top: 1px solid var(--color-border); }

        /* Lightbox */
        .lb-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.85); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 24px; animation: lb-in .15s ease; }
        @keyframes lb-in { from { opacity: 0 } to { opacity: 1 } }

        .lb-content { position: relative; max-width: 90vw; max-height: 90vh; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 12px; }

        .lb-close { position: absolute; top: -44px; right: 0; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,.15); border: 1.5px solid rgba(255,255,255,.2); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .15s; }
        .lb-close:hover { background: rgba(255,255,255,.25); }

        .lb-img-wrap { position: relative; width: 90vw; max-width: 1200px; height: 80vh; }

        .lb-caption { font-size: 13px; font-weight: 600; color: rgba(255,255,255,.7); text-align: center; }
      `}</style>
    </>
  )
}