import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react'
import './Contact.css'

const TwitterIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-bg-glow" />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span>Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project, need a demo, or want to partner? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-subtitle">
              Vikra Ocean Tech is based in Chennai, Tamil Nadu. We welcome inquiries from industries, defense, and research institutions.
            </p>

            <div className="contact-details">
              <a href="mailto:bda@vikraoceantech.com" className="contact-detail">
                <div className="contact-detail-icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">bda@vikraoceantech.com</span>
                </div>
              </a>
              <a href="tel:+919360471061" className="contact-detail">
                <div className="contact-detail-icon"><Phone size={20} /></div>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <span className="contact-detail-value">+91 9360471061</span>
                </div>
              </a>
              <div className="contact-detail">
                <div className="contact-detail-icon"><MapPin size={20} /></div>
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">MSV Complex, Plot No:284, 1st St, Bharathi Nagar, Vengavasal, Chennai, Tamil Nadu 600126</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Follow Us</span>
              <div className="contact-social-links">
                <a href="https://x.com/TechVikra" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Twitter"><TwitterIcon /></a>
                <a href="https://www.facebook.com/Vikraocean" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://www.instagram.com/vikraoceantech" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Instagram"><InstagramIcon /></a>
                <a href="https://www.linkedin.com/company/vikra-ocean-tech-pvt-ltd" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
              </div>
            </div>

            <div className="contact-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1453533917265!2d80.17225957507523!3d12.898373587410303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259d088d94d81%3A0xd3d0bda51ae50cbf!2sVikra%20Ocean%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730093783096!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 12, display: 'block', marginTop: 20 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper glass-card">
            {submitted ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 size={56} color="var(--color-teal)" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will respond within 24 hours.</p>
                <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="form-input form-select"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="product-demo">Product Demo Request</option>
                    <option value="quote">Request a Quote</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="defence">Defence Application</option>
                    <option value="research">Research Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-primary form-submit ${loading ? 'loading' : ''}`}
                  disabled={loading}
                  id="contact-submit-btn"
                >
                  {loading ? (
                    <span className="btn-spinner" />
                  ) : (
                    <>
                      Send Message <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
