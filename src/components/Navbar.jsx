import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-5 py-5 md:px-8 lg:px-10">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-60"
        >
          Payal<span className="opacity-50">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-neutral-700 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-4 bg-white transition-transform duration-300 ${
              menuOpen ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />

          <span
            className={`h-px w-4 bg-white transition-transform duration-300 ${
              menuOpen ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-0 -z-10 flex h-screen w-full flex-col justify-center bg-[#0a0a0a] px-8 transition-transform duration-500 md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-5xl font-semibold tracking-tight text-white transition-opacity duration-300 hover:opacity-50"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

    </header>
  )
}

export default Navbar