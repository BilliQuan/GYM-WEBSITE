import Image from 'next/image'
import React from 'react'

const features = [
  {
    icon: '🏋️',
    title: 'World-Class Equipment',
    description:
      'Over 800 sqm of training floor with Rogue power racks, sleds, and turf. No waiting for machines.',
  },
  {
    icon: '🎯',
    title: 'Evidence-Based Programming',
    description:
      'Every class and program is designed by certified coaches using periodisation science — not trends.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description:
      'Monthly check-ins, body composition analysis, and programming adjustments built into every membership.',
  },
  {
    icon: '◐',
    title: 'Open 5 AM to 11 PM',
    description:
      "Early risers, lunch breakers, and night owls — we're here when you need us, every day of the week.",
  },
]

export default function PricingPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0b0b0b',
        color: '#f5f5f5',
        paddingTop: '88px',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '1408px',
          margin: '0 auto',
          padding: '48px 32px 100px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '78px',
            alignItems: 'start',
          }}
        >
          {/* LEFT IMAGE */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '740px',
              overflow: 'visible',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/picture4.jpeg"
                alt="IronHaus training"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>

            {/* 98% BADGE */}
            <div
              style={{
                position: 'absolute',
                left: '95%',
                bottom: '-40px',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '150px',
                background: '#f5a623',
                clipPath:
                  'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#050505',
                  lineHeight: 1,
                }}
              >
                <div
                  style={{
                    fontSize: '40px',
                    fontWeight: 900,
                    letterSpacing: '-2px',
                  }}
                >
                  98%
                </div>

                <div
                  style={{
                    marginTop: '5px',
                    fontSize: '10px',
                    fontWeight: 900,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Member
                  <br />
                  Retention
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            style={{
              paddingTop: '8px',
            }}
          >
            {/* EYEBROW */}
            <div
              style={{
                color: '#f5a623',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Why IronHaus
            </div>

            {/* HEADING */}
            <h1
              style={{
                margin: 0,
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", "Arial Narrow", sans-serif',
                fontSize: 'clamp(42px, 5vw, 58px)',
                lineHeight: '1.05',
                fontWeight: 400,
                letterSpacing: '-1px',
                textTransform: 'uppercase',
                maxWidth: '620px',
              }}
            >
              Built Different.
              <br />
              Results Proven.
            </h1>

            {/* DIVIDER */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(255,255,255,0.16)',
                marginTop: '54px',
              }}
            />

            {/* FEATURES */}
            <div>
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '24px 0',
                    borderBottom:
                      index === features.length - 1
                        ? '1px solid rgba(255,255,255,0.16)'
                        : '1px solid rgba(255,255,255,0.16)',
                  }}
                >
                  {/* ICON */}
                  <div
                    style={{
                      flex: '0 0 48px',
                      width: '48px',
                      height: '48px',
                      background: '#292929',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* TEXT */}
                  <div
                    style={{
                      paddingTop: '1px',
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '18px',
                        lineHeight: 1.2,
                        fontWeight: 800,
                        color: '#f3f3f3',
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        margin: '8px 0 0',
                        fontSize: '14px',
                        lineHeight: 1.55,
                        color: 'rgba(255,255,255,0.48)',
                        maxWidth: '560px',
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}