import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'History', to: '/history' },
  { label: 'Architecture', to: '/architecture' },
  { label: 'Events', to: '/events' },
  { label: 'Directory', to: '/directory' },
  { label: 'Membership', to: '/membership' },
  { label: 'Donate', to: '/donate' },
  { label: 'Documents', to: '/documents' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-[#2B2B2B]' : 'text-white'
  const logoColor = scrolled || !isHome ? 'text-[#1A3C2E]' : 'text-white'

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight">
              <span className={`font-serif font-bold text-lg lg:text-xl ${logoColor} transition-colors duration-300`}>
                Elmwood Park
              </span>
              <span className={`text-xs tracking-widest uppercase ${scrolled || !isHome ? 'text-[#C9A84C]' : 'text-[#DFC07A]'} transition-colors duration-300`}>
                Neighborhood Association
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(0, 8).map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#C9A84C] ${
                    location.pathname === link.to
                      ? 'text-[#C9A84C]'
                      : textColor
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-2 px-4 py-2 rounded-full bg-[#C9A84C] text-white text-sm font-medium hover:bg-[#b8963e] transition-colors duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 rounded-md ${textColor}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#1A3C2E] flex flex-col pt-24 px-8 pb-10"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.to}
                    className={`font-serif text-2xl font-semibold transition-colors duration-200 ${
                      location.pathname === link.to ? 'text-[#C9A84C]' : 'text-white hover:text-[#C9A84C]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="mt-auto text-white/40 text-xs">© 2025 EPNA · Omaha, NE</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
