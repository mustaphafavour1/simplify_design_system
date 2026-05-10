'use client'
import { PageHeader } from '@/components/docs/PageHeader'

export default function AuthPage() {
  return (
    <div>
      <PageHeader section="Patterns" title="Authentication"
        description="Login, sign-up, and password reset flows across SS products. Two layout formats depending on the product context — split-screen and fullscreen overlay." />

      {/* Figma naming */}
      <section className="ps">
        <div className="figma-callout">
          <div className="figma-icon">
            <svg width="14" height="14" viewBox="0 0 38 57" fill="none"><path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/><path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5A9.5 9.5 0 0 1 9.5 47.5Z" fill="#0ACF83"/><path d="M19 0.5h-9.5a9.5 9.5 0 0 0 0 19H19Z" fill="#FF7262"/><path d="M19 19h-9.5a9.5 9.5 0 0 0 0 19H19Z" fill="#F24E1E"/><path d="M19 19h9.5a9.5 9.5 0 0 0 0-19H19Z" fill="#FF7262"/></svg>
          </div>
          <div>
            <div className="figma-label">Figma naming — Authentication screens</div>
            <div className="figma-names">
              <code>Login - Empty</code>
              <code>Login - Filled</code>
              <code>Sign Up - Empty</code>
              <code>Sign Up - Filled</code>
              <code>Forgot Password - Empty</code>
              <code>Reset Password - Empty</code>
              <code>Reset Password - Filled</code>
            </div>
          </div>
        </div>
      </section>

      {/* Format 1 */}
      <section className="ps">
        <h2 className="pt">Format 1 — Split screen</h2>
        <p className="pd">Used in VoxePay and Simplify Compliance Engine. Left half is a full-height contextual image. Right half is white/light with logo and login card. Clean, bright, and professional.</p>
        <div className="format-specs">
          {[
            { label: 'Layout', value: '50/50 split — image left, form right' },
            { label: 'Image', value: 'Full height, contextual to the product. VoxePay uses payment/commerce imagery. Compliance uses professional/enterprise imagery.' },
            { label: 'Background', value: 'Right side: #FAFBFF (light) or white. Never a colour that clashes with the logo.' },
            { label: 'Logo', value: 'Product logo centred above the login card. Not in a nav bar.' },
            { label: 'Card', value: 'Login/form card is white, --radius-xl (16px), subtle shadow. Width: 440px max.' },
            { label: 'Footer', value: 'Copyright + social links at bottom of the right panel (VoxePay pattern).' },
          ].map(s => (
            <div key={s.label} className="spec-row">
              <span className="spec-k">{s.label}</span>
              <span className="spec-v">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Live recreation */}
        <div className="auth-demo split-demo">
          <div className="demo-image-side">
            <div className="demo-img-bg">
              <div className="demo-img-overlay" />
              <div className="demo-img-text">Contextual product image<br />(full height)</div>
            </div>
          </div>
          <div className="demo-form-side">
            <div className="demo-logo-area">
              <div className="demo-logo-mark" />
              <span className="demo-logo-text">VoxePay</span>
            </div>
            <div className="demo-card">
              <h3 className="demo-card-title">Log In</h3>
              <p className="demo-card-sub">Enter your credentials to access your account</p>
              <div className="demo-field">
                <label className="demo-label">EMAIL ADDRESS</label>
                <div className="demo-input">Enter Email <span className="demo-input-icon">✉</span></div>
              </div>
              <div className="demo-field">
                <label className="demo-label">PASSWORD</label>
                <div className="demo-input">Enter Password <span className="demo-input-icon">👁</span></div>
              </div>
              <div className="demo-row">
                <label className="demo-check"><input type="checkbox" /> Remember me</label>
                <span className="demo-link">Forgot Password?</span>
              </div>
              <div className="demo-btn">Log into Account</div>
              <div className="demo-signup">Are you new here? <span className="demo-link">Create Account</span></div>
            </div>
            <div className="demo-footer">© 2026 VoxePay &nbsp;·&nbsp; Instagram &nbsp;·&nbsp; LinkedIn &nbsp;·&nbsp; X</div>
          </div>
        </div>
      </section>

      {/* Format 2 */}
      <section className="ps">
        <h2 className="pt">Format 2 — Fullscreen background with overlay</h2>
        <p className="pd">Full-page background image with a dark semi-transparent overlay (≥ 50% opacity for AA contrast). Login/form card centred. Used for products where immersive imagery reinforces the brand context.</p>
        <div className="format-specs">
          {[
            { label: 'Background', value: 'Full-page image. Dark overlay at minimum 50% opacity — verify contrast with the card text.' },
            { label: 'Card', value: 'Centred. Semi-transparent white or frosted glass effect. --radius-xl. Never fully opaque — the image context should read through.' },
            { label: 'Contrast', value: 'Card text must pass 4.5:1 contrast against the card background, not against the underlying image.' },
            { label: 'Logo', value: 'Above the card, white text/logo version. Centred.' },
            { label: 'Accessibility', value: 'Test at the darkest and lightest parts of the image. The overlay must compensate for all image variance.' },
          ].map(s => (
            <div key={s.label} className="spec-row">
              <span className="spec-k">{s.label}</span>
              <span className="spec-v">{s.value}</span>
            </div>
          ))}
        </div>

        <div className="auth-demo fullscreen-demo">
          <div className="fs-bg">
            <div className="fs-overlay" />
            <div className="fs-content">
              <div className="fs-logo">PRODUCT NAME</div>
              <div className="fs-card">
                <h3 className="fs-card-title">Log In</h3>
                <p className="fs-card-sub">Enter your credentials to access your account</p>
                <div className="fs-field">
                  <label className="demo-label" style={{color:'#6B6B80'}}>EMAIL or USERNAME</label>
                  <div className="fs-input">Enter Email or Username</div>
                </div>
                <div className="fs-field">
                  <label className="demo-label" style={{color:'#6B6B80'}}>PASSWORD</label>
                  <div className="fs-input">Enter Password</div>
                </div>
                <div className="demo-row" style={{marginBottom:16}}>
                  <label className="demo-check"><input type="checkbox" /> Remember me</label>
                  <span className="demo-link">Forgot Password?</span>
                </div>
                <div className="fs-btn">Log into Account</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form anatomy */}
      <section className="ps">
        <h2 className="pt">Auth form anatomy</h2>
        <div className="anatomy-grid">
          {[
            { element: 'Logo', spec: 'Product logo, centered above card. Not in a header/nav.' },
            { element: 'Card title', spec: '"Log In", "Sign Up", "Forgot Password", "Reset Password". Font weight 600, never 900.' },
            { element: 'Subtitle', spec: 'One line of clarifying context. "Enter your credentials to access your account." Muted colour.' },
            { element: 'Field labels', spec: 'UPPERCASE, small caps style. Never sentence case for auth fields — it is a deliberate pattern for visual clarity.' },
            { element: 'Inputs', spec: 'Full width within the card. --radius-md (8px). Blue focus ring for VoxePay products, purple for SS products.' },
            { element: 'Remember me + Forgot Password', spec: 'On the same row. Checkbox left, link right. "Forgot Password?" is the exact label — question mark included.' },
            { element: 'Primary button', spec: 'Full width. Disabled (grey/muted) until all required fields are filled. Product primary colour when active.' },
            { element: 'Sign-up link', spec: '"Are you new here? Create Account" — below the primary button. Not in the footer.' },
          ].map(a => (
            <div key={a.element} className="anatomy-row">
              <span className="anatomy-el">{a.element}</span>
              <span className="anatomy-spec">{a.spec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Error states */}
      <section className="ps">
        <h2 className="pt">Error states</h2>
        <div className="error-demos">
          <div className="error-demo-card">
            <div className="error-demo-title">Input field error — incorrect current password</div>
            <div className="demo-field">
              <label className="demo-label">ENTER CURRENT PASSWORD</label>
              <div className="demo-input error-input">FavourTolulope <span className="demo-input-icon">👁</span></div>
              <div className="error-caption">The current password is incorrect</div>
            </div>
          </div>
          <div className="error-demo-card">
            <div className="error-demo-title">Error modal — email not found</div>
            <div className="error-modal-preview">
              <div className="em-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.5" fill="#DC2626" strokeWidth="2"/></svg>
              </div>
              <div className="em-title">Email not found</div>
              <div className="em-body">The specified email couldn't be found. Kindly check and try again.</div>
              <div className="em-btn">OK</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ps { margin-bottom: 52px; }
        .pt { font-size: 1.125rem; font-weight: 600; color: var(--color-text); margin-bottom: 8px; }
        .pd { font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px; max-width: 600px; }

        .figma-callout { display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; background: var(--color-primary-faint); border: 1.5px solid var(--color-primary-subtle); border-radius: 10px; }
        .figma-icon { flex-shrink: 0; margin-top: 2px; }
        .figma-label { font-size: 12px; font-weight: 700; color: var(--color-primary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: .06em; }
        .figma-names { display: flex; flex-wrap: wrap; gap: 6px; }
        .figma-names code { font-size: 11.5px; font-family: var(--font-mono); background: white; border: 1px solid var(--color-primary-subtle); color: var(--color-text); padding: 3px 8px; border-radius: 5px; }

        .format-specs { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
        .spec-row { display: grid; grid-template-columns: 110px 1fr; gap: 16px; padding: 11px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; }
        .spec-row:last-child { border-bottom: none; }
        .spec-k { font-weight: 700; color: var(--color-text); }
        .spec-v { color: var(--color-text-secondary); line-height: 1.6; }

        /* Split demo */
        .auth-demo { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .split-demo { display: grid; grid-template-columns: 1fr 1fr; height: 480px; }
        .demo-image-side { background: #2D3748; position: relative; display: flex; align-items: center; justify-content: center; }
        .demo-img-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #2D3748, #1A202C); display: flex; align-items: center; justify-content: center; }
        .demo-img-overlay {}
        .demo-img-text { color: rgba(255,255,255,0.3); font-size: 12px; text-align: center; font-weight: 500; line-height: 1.6; position: relative; z-index: 1; }
        .demo-form-side { background: #FAFBFF; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px; overflow-y: auto; }
        .demo-logo-area { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
        .demo-logo-mark { width: 24px; height: 24px; background: linear-gradient(135deg, #4FC3F7, #1B56F4); border-radius: 4px; }
        .demo-logo-text { font-size: 16px; font-weight: 800; color: #0D1B4B; letter-spacing: -0.01em; }
        .demo-card { background: white; border-radius: 16px; padding: 28px 24px; width: 100%; max-width: 360px; box-shadow: 0 4px 24px rgba(13,8,32,.08); border: 1px solid var(--color-border); }
        .demo-card-title { font-size: 1.25rem; font-weight: 700; color: var(--color-text); text-align: center; margin-bottom: 4px; }
        .demo-card-sub { font-size: 12.5px; color: var(--color-text-muted); text-align: center; margin-bottom: 18px; line-height: 1.5; }
        .demo-field { margin-bottom: 14px; }
        .demo-label { font-size: 10.5px; font-weight: 700; letter-spacing: .08em; color: var(--color-text-secondary); display: block; margin-bottom: 5px; }
        .demo-input { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 10px 12px; font-size: 13px; color: var(--color-text-muted); display: flex; justify-content: space-between; align-items: center; }
        .demo-input-icon { font-size: 14px; opacity: 0.4; }
        .demo-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .demo-check { font-size: 12px; color: var(--color-text-secondary); display: flex; align-items: center; gap: 6px; }
        .demo-link { font-size: 12px; font-weight: 600; color: #1B56F4; cursor: pointer; }
        .demo-btn { background: #1B56F4; color: white; border-radius: 8px; padding: 11px; text-align: center; font-size: 13px; font-weight: 700; margin-bottom: 14px; cursor: pointer; }
        .demo-signup { font-size: 12px; color: var(--color-text-muted); text-align: center; }
        .demo-footer { margin-top: 20px; font-size: 11px; color: var(--color-text-muted); text-align: center; }

        /* Fullscreen demo */
        .fullscreen-demo { height: 400px; }
        .fs-bg { position: relative; height: 100%; background: linear-gradient(135deg, #1a2a4a, #0a1628); display: flex; align-items: center; justify-content: center; }
        .fs-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.55); }
        .fs-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; max-width: 440px; padding: 24px; }
        .fs-logo { color: white; font-size: 14px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .fs-card { background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); border-radius: 16px; padding: 28px 24px; width: 100%; }
        .fs-card-title { font-size: 1.25rem; font-weight: 700; color: var(--color-text); text-align: center; margin-bottom: 4px; }
        .fs-card-sub { font-size: 12.5px; color: var(--color-text-muted); text-align: center; margin-bottom: 16px; }
        .fs-field { margin-bottom: 12px; }
        .fs-input { border: 1.5px solid var(--color-border); border-radius: 8px; padding: 10px 12px; font-size: 13px; color: var(--color-text-muted); background: white; }
        .fs-btn { background: #DC2626; color: white; border-radius: 8px; padding: 11px; text-align: center; font-size: 13px; font-weight: 700; margin-top: 4px; cursor: pointer; }

        /* Anatomy */
        .anatomy-grid { border: 1.5px solid var(--color-border); border-radius: 12px; overflow: hidden; }
        .anatomy-row { display: grid; grid-template-columns: 180px 1fr; gap: 16px; padding: 12px 16px; border-bottom: 1px solid var(--color-border); font-size: 13px; }
        .anatomy-row:last-child { border-bottom: none; }
        .anatomy-el { font-weight: 700; color: var(--color-text); }
        .anatomy-spec { color: var(--color-text-secondary); line-height: 1.6; }

        /* Errors */
        .error-demos { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .error-demo-card { border: 1.5px solid var(--color-border); border-radius: 12px; padding: 20px; background: var(--color-bg-raised); }
        .error-demo-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-muted); margin-bottom: 16px; }
        .error-input { border-color: #DC2626 !important; }
        .error-caption { font-size: 12px; font-weight: 600; color: #DC2626; margin-top: 5px; }
        .error-modal-preview { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 16px; border: 1.5px solid var(--color-border); border-radius: 12px; text-align: center; }
        .em-icon {}
        .em-title { font-size: 14px; font-weight: 700; color: var(--color-text); }
        .em-body { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; max-width: 240px; }
        .em-btn { background: var(--color-primary); color: white; border-radius: 8px; padding: 8px 28px; font-size: 13px; font-weight: 700; cursor: pointer; }
      `}</style>
    </div>
  )
}
