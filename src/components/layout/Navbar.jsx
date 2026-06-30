import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import { navLinks, contactInfo } from '../../data/siteData'

import logo from "../../assets/logo.svg"; // Update the path if needed

export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
        }`}
    >
      <div
        className={`container-section flex items-center justify-between rounded-2xl transition-all duration-300 ${scrolled
            ? 'glass-strong shadow-glass py-2.5'
            : 'bg-transparent py-1'
          }`}
      >
        <Link to="/" className="flex items-center gap-1.5 shrink-2">
          <img
            src={logo}
            alt="NICT Logo"
            className="
      h-10
      w-auto
      max-w-[180px]
      object-contain
      select-none
      transition-transform
      duration-300
      hover:scale-105
    "
    draggable="false"
   
          />
          <span className="font-display font-bold text-lg sm:text-xl text-ink dark:text-white leading-none">
            NICT <span className="text-primary-500">Chandigarh</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-sm font-medium font-display transition-colors duration-200 ${isActive
                  ? 'text-white bg-gradient-to-r from-primary-500 to-accent shadow-premium'
                  : 'text-ink dark:text-ink-inverse hover:text-primary-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full glass text-ink dark:text-white hover:scale-105 transition-transform"
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Enroll Now
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full glass text-ink dark:text-white"
          >
            {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent text-white"
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-5 mt-2 lg:hidden"
          >
            <div className="glass-strong rounded-2xl p-4 shadow-glass flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium font-display ${isActive
                      ? 'text-white bg-gradient-to-r from-primary-500 to-accent'
                      : 'text-ink dark:text-ink-inverse hover:bg-primary-50 dark:hover:bg-white/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary mt-2 text-sm">
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
