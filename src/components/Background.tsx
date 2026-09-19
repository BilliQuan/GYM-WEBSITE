import Image from 'next/image'

export default function Background() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -9999, pointerEvents: 'none', height: '100vh' }}
    >
      <Image
        src="/images/picture1.jpeg"
        alt="Background"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
