import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

const YoutubeIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
const FacebookIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const InstagramIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const LinkedinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      {/* Animated SVG Wave Top */}
      <div className="footer-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(0, 180, 216, 0.25)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(0, 102, 204, 0.4)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(0, 180, 216, 0.7)" />
            <use href="#gentle-wave" x="48" y="7" fill="#050a15" />
          </g>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-brand">
              <h3 className="footer-brand-title">Vikra ocean Tech</h3>
              <p className="footer-description">
                Vikra Ocean Tech is a pioneering ocean robotics startup focused on developing autonomous underwater platforms, including ASVs, ROVs, and advanced underwater surveillance systems. Our technology empowers industries to explore, monitor, and maintain marine and inland water environments with precision. We specialize in dam, bridge, and reservoir inspections, aquaculture, environmental research, and deep-sea experiments. At Vikra, we are committed to enhancing underwater exploration and operations through innovation and cutting-edge solutions.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/Vikraocean" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/company/vikra-ocean-tech-pvt-ltd/?viewAsMember=true" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
                <a href="https://www.instagram.com/vikraoceantech/?hl=en" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram"><InstagramIcon /></a>
                <a href="https://www.youtube.com/@vikraoceantech" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="YouTube"><YoutubeIcon /></a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Useful Links</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About us</Link></li>
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="#" className="footer-link">Terms of service</Link></li>
                <li><Link to="#" className="footer-link">Privacy policy</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/products#rovito" className="footer-link">ROV</Link></li>
                <li><Link to="/products#wavebot" className="footer-link">ASV</Link></li>
                <li><Link to="/products#koorma" className="footer-link">KOORMA</Link></li>
                <li><Link to="/products#ucam" className="footer-link">UCAM</Link></li>
                <li><Link to="/products#ulights" className="footer-link">ULIGHTS</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Contact Us</h4>
              <div className="footer-contact-info">
                <p className="footer-address">
                  MSV Complex, Plot No:284,<br />
                  1st St, Bharathi Nagar, Vengavasal,<br />
                  Chennai, Tamil Nadu 600126
                </p>
                <p className="footer-phone">
                  Phone: +91 93604 71061
                </p>
                <p className="footer-email">
                  Email: bda@vikraoceantech.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            © Copyright <strong>Vikra ocean tech</strong> All Rights Reserved
          </p>
          <p className="footer-designed-by">
            Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noreferrer">BootstrapMade</a>
          </p>
          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

