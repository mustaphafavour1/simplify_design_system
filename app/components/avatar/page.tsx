'use client'
import { PageHeader } from '@/components/docs/PageHeader'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { PropsTable } from '@/components/docs/PropsTable'
import { DosDonts } from '@/components/docs/DosDonts'

const props = [
  { name: 'src',     type: 'string',                                     default: '—',     required: false, description: 'Image URL. Falls back to initials when not provided or on error.' },
  { name: 'name',    type: 'string',                                     default: '—',     required: false, description: 'Used to generate initials fallback.' },
  { name: 'size',    type: '"xs" | "sm" | "md" | "lg" | "xl"',          default: '"md"',  required: false, description: 'Avatar size.' },
  { name: 'status',  type: '"online" | "offline" | "busy" | undefined',  default: '—',     required: false, description: 'Status dot shown at the bottom-right.' },
  { name: 'shape',   type: '"circle" | "square"',                        default: '"circle"', required: false, description: 'Shape of the avatar.' },
]

const dos = [
  'Always provide a name prop as fallback — so initials display when the image fails.',
  'Use circle avatars for people, square avatars for businesses or organisations.',
  'Use status indicators only when the status is real-time and relevant to the user.',
]

const donts = [
  "Don't use avatars for decorative purposes — every avatar should represent a real entity.",
  "Don't show status dots on avatars in transaction history — only in live collaboration contexts.",
  "Don't use very small avatars (xs) without a tooltip — initials become unreadable.",
]

const sizes = [
  { size: 'xs', px: 24, font: 9  },
  { size: 'sm', px: 32, font: 11 },
  { size: 'md', px: 40, font: 14 },
  { size: 'lg', px: 52, font: 18 },
  { size: 'xl', px: 64, font: 22 },
]

const people = [
  { name: 'Kenneth Obi',    color: '#7B3FD1', bg: '#F3EAFD' },
  { name: 'Chinelo Aminu',  color: '#1B56F4', bg: '#EFF4FF' },
  { name: 'Adaeze Nwosu',   color: '#16A34A', bg: '#F0FDF4' },
  { name: 'Babatunde Lawal',color: '#D97706', bg: '#FFFBEB' },
]

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

export default function AvatarPage() {
  return (
    <div>
      <PageHeader
        section="Components / Data Display"
        title="Avatar"
        description="Represents a user, account holder, or organisation. Used in transaction lists, transfer flows, profile sections, and the Maestro MFB home screen greeting."
        status="stable"
      />

      <ComponentPreview
        title="Sizes"
        code={`<Avatar size="xs" name="Kenneth Obi" />\n<Avatar size="sm" name="Kenneth Obi" />\n<Avatar size="md" name="Kenneth Obi" />\n<Avatar size="lg" name="Kenneth Obi" />\n<Avatar size="xl" name="Kenneth Obi" />`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {sizes.map(s => (
            <div key={s.size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ width: s.px, height: s.px, borderRadius: '50%', background: '#F3EAFD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: s.font, fontWeight: 700, color: '#7B3FD1', flexShrink: 0 }}>KO</div>
              <span style={{ fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 600 }}>{s.size}</span>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Initials fallback"
        description="When no image is available, initials are generated from the name. Each user gets a consistent colour based on their name."
        code={`<Avatar name="Kenneth Obi" />\n<Avatar name="Chinelo Aminu" />\n<Avatar name="Adaeze Nwosu" />\n<Avatar name="Babatunde Lawal" />`}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {people.map(p => (
            <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: p.color }}>
                {getInitials(p.name)}
              </div>
              <span style={{ fontSize: 10.5, color: 'var(--color-text-secondary)', fontWeight: 500, textAlign: 'center', maxWidth: 64 }}>{p.name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With status indicator"
        code={`<Avatar name="Kenneth Obi" status="online" />\n<Avatar name="Chinelo Aminu" status="busy" />\n<Avatar name="Adaeze Nwosu" status="offline" />`}
      >
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {[
            { ...people[0], status: '#16A34A', statusLabel: 'online' },
            { ...people[1], status: '#D97706', statusLabel: 'busy' },
            { ...people[2], status: '#9CA3AF', statusLabel: 'offline' },
          ].map(p => (
            <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ position: 'relative', width: 40, height: 40 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: p.color }}>
                  {getInitials(p.name)}
                </div>
                <div style={{ position: 'absolute', bottom: 1, right: 1, width: 10, height: 10, borderRadius: '50%', background: p.status, border: '2px solid white' }} />
              </div>
              <span style={{ fontSize: 10.5, color: 'var(--color-text-muted)', fontWeight: 600 }}>{p.statusLabel}</span>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Avatar group — transaction context"
        description="Grouped avatars used in sender/recipient display in transfer screens."
        code={`<AvatarGroup users={[...]} />`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', border: '1.5px solid var(--color-border)', borderRadius: 10, background: 'var(--color-bg-raised)', width: '100%' }}>
          <div style={{ display: 'flex' }}>
            {people.slice(0, 4).map((p, i) => (
              <div key={p.name} style={{ width: 36, height: 36, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: p.color, border: '2px solid white', marginLeft: i > 0 ? -10 : 0, zIndex: 4 - i }}>
                {getInitials(p.name)}
              </div>
            ))}
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', border: '2px solid white', marginLeft: -10 }}>
              +12
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text)' }}>16 recipients</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Bulk transfer — ₦800,000.00 total</div>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable props={props} />
      <DosDonts dos={dos} donts={donts} />
    </div>
  )
}