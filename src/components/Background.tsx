import Image from 'next/image'

export default function Background() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', minHeight: '100vh', width: '100%' }}
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
