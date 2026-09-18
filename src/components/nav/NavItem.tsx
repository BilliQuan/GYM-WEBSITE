import React from 'react'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
}

export default function NavItem({ href, children }: Props) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit', padding: '0.25rem 0.5rem' }}>
      {children}
    </Link>
  )
}
