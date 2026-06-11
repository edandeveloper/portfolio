import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'hero', label: 'Status' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Chronicle' },
  { id: 'contact', label: 'Contact' },
]

export default function NavBar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = navLinks.map(l => document.getElementById(l.id))
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (el && el.offsetTop <= scrollPos) {
          setActive(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-12 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(8, 12, 20, 0.95)'
          : 'rgba(8, 12, 20, 0.7)',
        borderBottom: '1px solid rgba(78, 204, 163, 0.25)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        className="font-display font-bold text-sm tracking-widest text-teal hover:text-gold transition-colors glow-teal"
      >
        EDAN ZHAO
      </button>

      {/* FF7-style HP/MP indicator */}
      <div className="hidden md:flex items-center gap-4 text-xs font-mono">
        <span className="text-text-muted">▶</span>
        <span className="text-gold font-bold">HP</span>
        <div className="w-24 h-2 bg-void border border-teal-dim rounded-sm overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-gold to-teal" />
        </div>
        <span className="text-teal font-bold">MP</span>
        <div className="w-16 h-2 bg-void border border-teal-dim rounded-sm overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-teal to-blue-400" />
        </div>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-1">
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`nav-item ${active === link.id ? 'active' : ''}`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
