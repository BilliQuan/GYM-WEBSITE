import React from 'react'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative', paddingTop :"88px"}}>
      {/* Absolute-positioned left hero content to match screenshot */}
      <div style={{ position: 'absolute', left: 56, top: 290, maxWidth: 560, color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 48, height: 2, background: 'rgb(233,150,25)' }} />
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>LAGOS · EST. 2018</div>
        </div>

        <h1 style={{
          margin: 0,
          fontSize: 'clamp(84px, 2vw, 150px)',
          lineHeight: 0.9,
          fontWeight: 700,
          textTransform: 'uppercase',
          textShadow: '0 8px 24px rgba(0,0,0,0.6)'
        }}>
          <span style={{ display: 'block' }}>Train Like</span>
          <span style={{ display: 'block', color: 'rgb(233,150,25)' }}>It Matters.</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520, marginTop: 18, fontSize: 16 }}>
          No shortcuts. No gimmicks. Just structured programming, elite coaching, and an environment built to push you further than you thought possible.
        </p>

        <div style={{ marginTop: 28, display: 'flex', gap: 18, alignItems: 'center' }}>
          <a href="#" style={{ background: 'rgb(233,150,25)', color: '#000', padding: '12px 22px', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>START FREE TRIAL</a>
          <a href="#programs" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 600 }}>Explore Programs →</a>
        </div>
      </div>

      {/* Bottom-right stats */}
      <div style={{ position: 'absolute', right: 56, bottom: 48, display: 'flex', gap: 48, alignItems: 'flex-end', color: 'rgba(255,255,255,0.95)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: 'rgb(233,150,25)' }}>12K+</div>
          <div style={{ fontSize: 12, letterSpacing: 2, color: 'rgba(255,255,255,0.6)' }}>MEMBERS</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: 'rgb(233,150,25)' }}>48+</div>
          <div style={{ fontSize: 12, letterSpacing: 2, color: 'rgba(255,255,255,0.6)' }}>CLASSES / WEEK</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: 'rgb(233,150,25)' }}>6+</div>
          <div style={{ fontSize: 12, letterSpacing: 2, color: 'rgba(255,255,255,0.6)' }}>YEARS STRONG</div>
        </div>
      </div>
    </main>
  )
}
