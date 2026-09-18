import React from 'react'
import NavItem from './NavItem'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
      <div style={{ fontWeight: 700 }}>
        <Link href="/">MyLogo</Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <NavItem href="/">Programs</NavItem>
        <NavItem href="/#features">Schedule</NavItem>
        <NavItem href="/#pricing">Trainers</NavItem>
        <NavItem href="/#contact">Pricing</NavItem>
        <NavItem href="/#contact">JOIN NOW</NavItem>
      </div>
    </nav>
  )
}
