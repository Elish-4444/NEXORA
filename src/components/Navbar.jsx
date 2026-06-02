import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './Icons'
import { navLinks } from '../content/site'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const syncDesktopState = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeMenu)
    window.addEventListener('resize', syncDesktopState)

    return () => {
      window.removeEventListener('keydown', closeMenu)
      window.removeEventListener('resize', syncDesktopState)
    }
  }, [])

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div className="glass-panel flex h-18 items-center justify-between px-5 py-3 sm:px-7">
          <a href="#home" className="font-display text-xl font-bold tracking-[0.35em] text-slate-50 sm:text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm">
            <span className="text-sky-400">NEX</span>ORA
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6 text-sm text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#contact" className="cta-primary px-5 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
              Start a Project
            </a>
          </div>

          <div className="lg:hidden">
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="section-shell lg:hidden">
          <div id="mobile-navigation" className="glass-panel mt-3 rounded-[24px] px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-2 pt-3">
              <a
                href="#contact"
                className="cta-primary flex w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
