import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroVideoBg from '../HeroVideoBg/HeroVideoBg'
import './PageHero.css'

export default function PageHero({
  title,
  subtitle,
  eyebrow = 'VIKRA OCEAN TECH',
  breadcrumbs = [],
  image,
  showCta,
  ctaText = 'Explore Products',
  ctaHref = '#products-catalog',
  // Items for the floating card grid (Products or Services)
  items = [],
  // Animated video background props (product detail pages)
  videoBg,
  videoSlug,
}) {
  const hasItems = items.length > 0

  return (
    <section className={`page-hero ${hasItems ? 'page-hero--with-card' : ''} ${videoSlug ? 'page-hero--video' : ''}`}>
      {/* YouTube Video background (product detail pages) */}
      {videoSlug ? (
        <HeroVideoBg slug={videoSlug} />
      ) : (
        <>
          {/* Premium deep ocean background */}
          <div className="page-hero-bg" />
          <div className="page-hero-overlay" />
          <div className="page-hero-glow" />
        </>
      )}

      {/* Floating particles */}
      <div className="page-hero-particles">
        <div className="ph-particle ph-p1" />
        <div className="ph-particle ph-p2" />
        <div className="ph-particle ph-p3" />
        <div className="ph-particle ph-p4" />
      </div>

      {/* === 3-Panel Layout: Text | Floating Card | Ship Image === */}
      {hasItems ? (
        <div className="container ph-three-col">
          {/* LEFT: Text Content */}
          <motion.div
            className="ph-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
            <h1 className="page-hero-title">{title}</h1>
            {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

            {showCta && (
              <a href={ctaHref} className="btn-ph-cta">
                {ctaText} <span className="ph-cta-arrow">›</span>
              </a>
            )}

            {/* Breadcrumbs */}
            <nav className="page-hero-breadcrumbs" aria-label="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
              {breadcrumbs.map((bc, idx) => (
                <React.Fragment key={idx}>
                  {bc.to ? (
                    <>
                      <Link to={bc.to} className="breadcrumb-link">{bc.label}</Link>
                      <span className="breadcrumb-separator">/</span>
                    </>
                  ) : (
                    <span className="breadcrumb-active" aria-current="page">{bc.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </motion.div>

          {/* CENTER: Floating White Card with Items Grid */}
          <motion.div
            className="ph-float-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          >
            {/* Pointer triangle at top center */}
            <div className="ph-card-pointer" />
            <div className="ph-items-grid">
              {items.map((item, i) => (
                <Link
                  key={i}
                  to={item.to || '#'}
                  className="ph-item"
                >
                  <div className="ph-item-icon">
                    {item.img ? (
                      <img src={item.img} alt={item.label} className="ph-item-img" />
                    ) : item.icon ? (
                      <span className="ph-item-svg">{item.icon}</span>
                    ) : null}
                  </div>
                  <div className="ph-item-text">
                    <span className="ph-item-label">{item.label}</span>
                    <span className="ph-item-desc">{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Ship / Illustration Image */}
          {image && (
            <motion.div
              className="ph-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
            >
              <div className="page-hero-image-wrap">
                <img src={image} alt={title} className="page-hero-image" />
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        /* === 2-Panel or Centered Layout (standard pages) === */
        <div className={`container page-hero-container ${image ? 'has-image' : ''}`}>
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
            <h1 className="page-hero-title">{title}</h1>
            {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

            {showCta && (
              <a href={ctaHref} className="btn-ph-cta">
                {ctaText} <span className="ph-cta-arrow">›</span>
              </a>
            )}

            {/* Breadcrumbs */}
            <nav className="page-hero-breadcrumbs" aria-label="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
              {breadcrumbs.map((bc, idx) => (
                <React.Fragment key={idx}>
                  {bc.to ? (
                    <>
                      <Link to={bc.to} className="breadcrumb-link">{bc.label}</Link>
                      <span className="breadcrumb-separator">/</span>
                    </>
                  ) : (
                    <span className="breadcrumb-active" aria-current="page">{bc.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </motion.div>

          {image && (
            <motion.div
              className="page-hero-image-wrap"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              <img src={image} alt={title} className="page-hero-image" />
            </motion.div>
          )}
        </div>
      )}
    </section>
  )
}
