import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import img1 from '../../assets/homepage-product-img/img-1.png'
import img2 from '../../assets/homepage-product-img/img-2.png'
import img3 from '../../assets/homepage-product-img/img-3.png'
import img4 from '../../assets/homepage-product-img/img-4.png'
import img5 from '../../assets/homepage-product-img/img-5.png'
import img6 from '../../assets/homepage-product-img/img-6.png'
import img7 from '../../assets/homepage-product-img/img-7.png'
import img8 from '../../assets/homepage-product-img/img-8.png'
import './Portfolio.css'

const portfolioItems = [
  { 
    id: 1, 
    img: img1, 
    category: 'rov', 
    title: 'ROVITO',
    description: 'Advanced remotely operated vehicle (ROV) designed for high-resolution underwater structural inspection of dams, pipelines, bridges, and reservoirs.'
  },
  { 
    id: 2, 
    img: img2, 
    category: 'rov', 
    title: 'BLACK MANTIS',
    description: 'Compact and highly portable remotely operable vehicle (ROV) designed up to 100m depth for underwater surveillance and surveys.'
  },
  { 
    id: 3, 
    img: img3, 
    category: 'asv', 
    title: 'WAVEBOT & WAVEBOT-II',
    description: 'Autonomous surface vessel (USV) designed for high-precision hydrographic surveys, bathymetric mapping, and environmental surveillance.'
  },
  { 
    id: 4, 
    img: img4, 
    category: 'koorma', 
    title: 'KOORMA',
    description: 'Innovative amphibious crawling robot designed for soft-soil shore and coastal inspections, supporting military and commercial operations.'
  },
  { 
    id: 5, 
    img: img5, 
    category: 'ucam', 
    title: 'DEEPSEA CAMERA',
    description: 'Battery-powered UHD vision system rated for extreme 2000m depth, built with stainless steel housing and Sony sensor.'
  },
  { 
    id: 6, 
    img: img6, 
    category: 'ucam', 
    title: 'DEEPSEA LIGHTS',
    description: 'Pressure-rated deep-sea LED lighting delivering 1500 to 4000 lumens with software-controlled dimming and stage timers.'
  },
  { 
    id: 7, 
    img: img7, 
    category: 'ucam', 
    title: 'BOREWELL CAMERA',
    description: 'Deep borehole and water well inspection system with aerospace-grade winch frame, live display, and SS-304 waterproof camera.'
  },
  { 
    id: 8, 
    img: img8, 
    category: 'ucam', 
    title: 'UNDERWATER CAMERAS',
    description: 'High-performance visual inspection camera series optimized for marine research, defense security, and aquaculture monitoring.'
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'rov', label: 'ROV' },
  { id: 'asv', label: 'ASV' },
  { id: 'koorma', label: 'KOORMA' },
  { id: 'ucam', label: 'UCAM' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [activeImage, setActiveImage] = useState(null)

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter)

  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        {/* Centered Portfolio Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-section-title">Products Portfolio</h2>
          <div className="portfolio-title-underline"></div>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`portfolio-filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                className="portfolio-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveImage(item)}
              >
                {/* Background Image wrapper */}
                <div 
                  className="portfolio-img-bg" 
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {/* Dark Overlay */}
                <div className="portfolio-card-overlay" />

                {/* Card Main Content */}
                <div className="portfolio-card-content">
                  <span className="portfolio-card-category-badge">{item.category.toUpperCase()}</span>
                  <h4 className="portfolio-card-title-main">{item.title}</h4>

                  {/* Hover detail reveal content */}
                  <div className="portfolio-card-hover-wrap">
                    <p className="portfolio-card-desc-text">{item.description}</p>
                  </div>
                </div>

                {/* Full-width slate dark action bar */}
                <div className="portfolio-card-action-bar">
                  <span className="portfolio-card-action-text">Learn More</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="portfolio-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
            >
              <button
                className="lightbox-close-btn"
                onClick={() => setActiveImage(null)}
                aria-label="Close view"
              >
                <X size={26} />
              </button>
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                onClick={e => e.stopPropagation()}
              >
                <img src={activeImage.img} alt={activeImage.title} className="lightbox-img" />
                <div className="lightbox-caption">
                  <span className="lightbox-badge">{activeImage.category.toUpperCase()}</span>
                  <h3>{activeImage.title}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', marginTop: '6px', lineHeight: '1.5' }}>
                    {activeImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
