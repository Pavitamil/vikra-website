import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, ChevronDown, Menu, X, LogOut } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import './Navbar.css'

const TwitterIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const FacebookIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const InstagramIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const LinkedinIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  {
    label: 'Products',
    href: '#products',
    dropdown: [
      { label: 'ROVITO', href: '#products', desc: 'Remotely Operated ROV' },
      { label: 'WAVEBOT', href: '#products', desc: 'Autonomous Surface Vessel' },
      { label: 'KOORMA', href: '#products', desc: 'Amphibious Crawler' },
      { label: 'DEEPSEA CAMERA', href: '#products', desc: 'High-Res Camera' },
      { label: 'DEEPSEA LIGHTS', href: '#products', desc: 'Powerful Illumination' },
      { label: 'DIVER COMMUNICATION SYSTEM', href: '#products', desc: 'Real-time Audio Comms' },
    ],
  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]


export default function Navbar({ onLogout }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (label) => {
    setActiveLink(label)
    setMobileOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Topbar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href="mailto:bda@vikraoceantech.com" className="topbar-link">
              <Mail size={14} />
              bda@vikraoceantech.com
            </a>
            <a href="tel:+919360471061" className="topbar-link">
              <Phone size={14} />
              +91 9360471061
            </a>
          </div>
          <div className="topbar-social">
            <a href="https://x.com/TechVikra" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon /></a>
            <a href="https://www.facebook.com/Vikraocean" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.instagram.com/vikraoceantech" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/company/vikra-ocean-tech-pvt-ltd" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="navbar-main">
        <div className="container navbar-inner">
          {/* Logo */}
          <a href="#hero" className="navbar-logo" onClick={() => handleNavClick('Home')}>
            <img src={logoImg} alt="VIKRA Logo" className="navbar-logo-img" />
            <div className="logo-text">
              <span className="logo-name">VIKRA</span>
              <span className="logo-sub">OCEAN TECH</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`nav-link ${activeLink === link.label ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="dropdown-arrow" />}
                </a>
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <a href={item.href} className="dropdown-item" onClick={() => handleNavClick(link.label)}>
                              <span className="dropdown-item-dot" />
                              <div>
                                <span className="dropdown-item-label">{item.label}</span>
                                <span className="dropdown-item-desc">{item.desc}</span>
                              </div>
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="navbar-actions">
            <a href="#contact" className="btn-primary navbar-cta" onClick={() => handleNavClick('Contact')}>
              Get in Touch
            </a>
            {onLogout && (
              <button
                className="navbar-logout"
                onClick={onLogout}
                title="Logout"
                aria-label="Logout"
              >
                <LogOut size={17} />
                <span>Logout</span>
              </button>
            )}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="mobile-nav-link" onClick={() => handleNavClick(link.label)}>
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <ul className="mobile-dropdown">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} className="mobile-dropdown-item" onClick={() => handleNavClick(link.label)}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
