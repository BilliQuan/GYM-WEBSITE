import Image from 'next/image'

export default function Background() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
      <Image
        src="/images/picture1.jpeg"
        alt="Background"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} />
    </div>
  )
}
