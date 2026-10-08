import { HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function ProgramsPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'rgb(26, 26, 26)', paddingTop: '88px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ color: 'rgb(233,150,25)', fontSize: 12, fontWeight: 800, letterSpacing: 2, marginBottom: 12 }}>WHAT WE OFFER</div>
            <h2 style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.02, fontWeight: 900, textTransform: 'uppercase' }}>Find your<br/>program</h2>
          </div>

          <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, alignSelf: 'flex-start' }}>View all programs →</a>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 0.6fr 0.6fr', gridTemplateRows: 'repeat(2, 280px)', gap: 28 }}>
          <article style={{ gridColumn: '1 / 2', gridRow: '1 / 3', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <Image src="/images/picture4.jpeg" alt="strength" fill style={{ objectFit: 'cover' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)' }} />
            <div style={{ position: 'absolute', left: 24, bottom: 24, color: '#fff' }}>
              <div style={{ color: 'rgb(233,150,25)', fontSize: 12, fontWeight: 800, letterSpacing: 1, marginBottom: 8 }}>FLAGSHIP</div>
              <h3 style={{ margin: 0, fontSize: 40, lineHeight: 1, fontWeight: 900 }}>Strength &<br/>Conditioning</h3>
            </div>
          </article>

          <HStack style={{ gridColumn: '2 / 3', gridRow: '1 / 2', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <Image src="/images/picture5.jpeg" alt="hiit" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)' }} />
            <div style={{ position: 'absolute', left: 12, bottom: 12, color: '#fff' }}>
              <div style={{ color: 'rgb(233,150,25)', fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>HIGH INTENSITY</div>
              <div style={{ fontSize: 20, fontWeight: 900, marginTop: 6 }}>HIIT Cardio</div>
            </div>
          </HStack>

          <HStack style={{ gridColumn: '2 / 3', gridRow: '2 / 3', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <Image src="/images/picture3.jpeg" alt="boxing" fill style={{ objectFit: 'cover', objectPosition: 'center bottom' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)' }} />
            <div style={{ position: 'absolute', left: 12, bottom: 12, color: '#fff' }}>
              <div style={{ color: 'rgb(233,150,25)', fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>COMBAT SPORTS</div>
              <div style={{ fontSize: 20, fontWeight: 900, marginTop: 6 }}>Boxing</div>
            </div>
          </HStack>

          <HStack style={{ gridColumn: '3 / 4', gridRow: '1 / 2', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <Image src="/images/picture2.jpeg" alt="yoga" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6) 100%)' }} />
            <div style={{ position: 'absolute', left: 12, bottom: 12, color: '#fff' }}>
              <div style={{ color: 'rgb(233,150,25)', fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>RECOVERY</div>
              <div style={{ fontSize: 20, fontWeight: 900, marginTop: 6 }}>Mobility & Yoga</div>
            </div>
          </HStack>

        </section>
      </div>
    </main>
  )
}
