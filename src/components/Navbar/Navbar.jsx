import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, ChevronDown, Menu, X, LogOut, Search, BarChart3, Anchor, Microscope, Gauge, Ship } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import rovitoImg from '../../assets/vikra-product-img/rivot-img-1.png'
import blackMantisImg from '../../assets/vikra-product-img/black-mat-1.png'
import wavebotImg from '../../assets/vikra-product-img/wavebot-img-1.png'
import wavebot2Img from '../../assets/vikra-product-img/wavbot2-img.png'
import koormaImg from '../../assets/vikra-product-img/amphious-img.png'
import ucamImg from '../../assets/vikra-product-img/under-camera-img-1.png'
import ulightsImg from '../../assets/vikra-product-img/under-light-img.png'
import borewellImg from '../../assets/vikra-product-img/borewall-camera-img.png'
import underwaterCamerasImg from '../../assets/vikra-product-img/under-water-img-1.png'
import './Navbar.css'

const YoutubeIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
const FacebookIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const InstagramIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.07-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const LinkedinIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Products',
    to: '/products',
    isMega: true,
    dropdown: [
      { label: 'ROVITO', to: '/rovito-detail', desc: 'Inspection ROV', img: rovitoImg },
      { label: 'BLACK MANTIS', to: '/blackmantis-detail', desc: 'Surveillance & Survey ROV', img: blackMantisImg },
      { label: 'WAVEBOT-I', to: '/wavebot-detail', desc: 'Autonomous Surface Vessel', img: wavebotImg },
      { label: 'WAVEBOT-II', to: '/wavebot-2-detail', desc: 'Heavy-Duty USV Platform', img: wavebot2Img },
      { label: 'KOORMA', to: '/koorma-detail', desc: 'Amphibious Soil Crawler', img: koormaImg },
      { label: 'UNDERWATER CAMERA CB12200', to: '/underwater-camera-detail', desc: '2000m UHD Vision System', img: ucamImg },
      { label: 'UNDERWATER LIGHT LB15200', to: '/underwater-light-battery-detail', desc: '2000m Battery Powered LED', img: ulightsImg },
      { label: 'BOREWELL CAMERA', to: '/borewell-camera-detail', desc: 'Deep Well Inspection System', img: borewellImg },
      { label: 'UNDERWATER CAMERAS', to: '/products/underwater-cameras', desc: 'High Performance Imaging', img: underwaterCamerasImg },
    ],
  },
  { label: 'Portfolio', to: '/portfolio' },
  {
    label: 'Services',
    to: '/services',
    isMega: true,
    is3Col: true,
    dropdown: [
      { 
        label: 'Underwater Inspection', 
        to: '/services', 
        desc: 'Dam, bridge, pier, and pipeline inspection using ROVs and crawlers with HD imaging and real-time data.', 
        img: <Search size={24} />,
        color: 'cyan'
      },
      { 
        label: 'Hydrographic Surveys', 
        to: '/services', 
        desc: 'Accurate bathymetric and hydrographic survey services with sub-centimeter precision using our USV platform.', 
        img: <BarChart3 size={24} />,
        color: 'teal'
      },
      { 
        label: 'Aquaculture Monitoring', 
        to: '/services', 
        desc: 'Monitoring fish cages, netting conditions, and water quality in aquaculture facilities with autonomous systems.', 
        img: <Anchor size={24} />,
        color: 'cyan'
      },
      { 
        label: 'Environmental Research', 
        to: '/services', 
        desc: 'Marine ecosystem assessment, coral reef monitoring, and sediment analysis supporting scientific research teams.', 
        img: <Microscope size={24} />,
        color: 'teal'
      },
      { 
        label: 'Defence & IDEX', 
        to: '/services', 
        desc: 'Defense-grade underwater reconnaissance, harbor security surveys, and mine countermeasure operations.', 
        img: <Gauge size={24} />,
        color: 'cyan'
      },
      { 
        label: 'Hull Inspections', 
        to: '/services', 
        desc: 'Fast, cost-effective hull inspection and fouling assessment for ships and offshore structures without dry-docking.', 
        img: <Ship size={24} />,
        color: 'teal'
      },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ onLogout }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTop, setDropdownTop] = useState(120)
  const navRef = useRef(null)
  
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect()
        setDropdownTop(rect.bottom + 6)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Set initial top
    if (navRef.current) {
      setDropdownTop(navRef.current.getBoundingClientRect().bottom + 6)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Also update top when active dropdown changes (for initial render)
  useEffect(() => {
    if (activeDropdown && navRef.current) {
      setDropdownTop(navRef.current.getBoundingClientRect().bottom + 6)
    }
  }, [activeDropdown])

  const handleNavClick = () => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }

  const isLinkActive = (to) => {
    if (to === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(to)
  }

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Main Nav */}
      <nav className="navbar-main" ref={navRef}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleNavClick}>
            <img src={logoImg} alt="VIKRA Logo" className="navbar-logo-img" />
            <div className="logo-text">
              <span className="logo-name">VIKRA</span>
              <span className="logo-sub">OCEAN TECH</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`nav-item ${link.dropdown ? 'has-dropdown' : ''} ${link.isMega ? 'has-mega' : ''}`}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.to}
                  className={`nav-link ${isLinkActive(link.to) ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="dropdown-arrow" />}
                </Link>
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        className={`${link.isMega ? 'mega-dropdown-menu' : 'dropdown-menu'} ${link.is3Col ? 'mega-services mega-3col' : ''}`}
                        style={link.isMega ? { top: dropdownTop } : {}}
                        initial={{ opacity: 0, y: -10, x: '-50%' }}
                        animate={{ opacity: 1, y: 0,  x: '-50%' }}
                        exit={{ opacity: 0, y: -10,   x: '-50%' }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      >
                        {link.isMega ? (
                          <div className={link.is3Col ? 'mega-dropdown-grid-3col' : 'mega-dropdown-grid'}>
                            {link.dropdown.map((item) => (
                              <Link key={item.label} to={item.to} className="mega-dropdown-item" onClick={handleNavClick}>
                                <div className={`mega-dropdown-thumb ${item.color ? `thumb-${item.color}` : ''}`}>
                                  {typeof item.img === 'string' ? (
                                    <img src={item.img} alt={item.label} className="mega-dropdown-thumb-img" />
                                  ) : (
                                    item.img
                                  )}
                                </div>
                                <div className="mega-dropdown-content">
                                  <span className="mega-dropdown-label">{item.label}</span>
                                  <span className="mega-dropdown-desc">{item.desc}</span>
                                  <span className="mega-dropdown-view">View Details →</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <ul className="standard-dropdown-list">
                            {link.dropdown.map((item) => (
                              <li key={item.label}>
                                <Link to={item.to} className="dropdown-item" onClick={handleNavClick}>
                                  <span className="dropdown-item-dot" />
                                  <div>
                                    <span className="dropdown-item-label">{item.label}</span>
                                    <span className="dropdown-item-desc">{item.desc}</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="navbar-actions">
            <Link to="/contact" className="btn-primary navbar-cta" onClick={handleNavClick}>
              Get in Touch
            </Link>
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
                  <Link to={link.to} className="mobile-nav-link" onClick={handleNavClick}>
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <ul className="mobile-dropdown">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <Link to={item.to} className="mobile-dropdown-item" onClick={handleNavClick}>
                            {item.label}
                          </Link>
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
