import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X } from 'lucide-react'
import rov1 from '../../assets/profile/rov-1.png'
import rov2 from '../../assets/profile/rov-2.png'
import rov3 from '../../assets/profile/rov-3.jpeg'
import rov5 from '../../assets/profile/rov-5.png'
import usv1 from '../../assets/profile/USV-1.png'
import usv2 from '../../assets/profile/USV-2.png'
import usv3 from '../../assets/profile/USV-3.jpg'
import koorma1 from '../../assets/profile/koorma-1.jpeg'
import koorma2 from '../../assets/profile/koorma-2.jpeg'
import ucam1 from '../../assets/profile/UCAM-1.jpeg'
import ucam2 from '../../assets/profile/UCAM-2.jpeg'
import ucam3 from '../../assets/profile/UCAM-3.jpeg'
import './Portfolio.css'

const portfolioItems = [
  { id: 1, img: rov1, category: 'rov', title: 'ROVITO Deepsea Mission' },
  { id: 2, img: rov2, category: 'rov', title: 'Underwater Inspection Trial' },
  { id: 3, img: rov3, category: 'rov', title: 'ROV Operations and Deployment' },
  { id: 4, img: usv1, category: 'asv', title: 'WAVEBOT Surface Survey' },
  { id: 5, img: usv2, category: 'asv', title: 'Autonomous Mission Control' },
  { id: 6, img: usv3, category: 'asv', title: 'WAVEBOT Harbor Survey' },
  { id: 7, img: koorma1, category: 'koorma', title: 'KOORMA Beach Crawler Trial' },
  { id: 8, img: koorma2, category: 'koorma', title: 'Amphibious Coastal Inspection' },
  { id: 9, img: ucam1, category: 'ucam', title: 'U-CAM HD Inspection Image' },
  { id: 10, img: ucam2, category: 'ucam', title: 'Deepsea Camera Rig' },
  { id: 11, img: ucam3, category: 'ucam', title: 'Underwater Illumination Trial' },
  { id: 12, img: rov5, category: 'rov', title: 'ROVITO Structural Scan' },
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
          <h2 className="portfolio-section-title">Portfolio</h2>
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
                <div className="portfolio-img-wrap">
                  <img src={item.img} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-info">
                      <Eye size={24} className="portfolio-zoom-icon" />
                      <h4 className="portfolio-card-title">{item.title}</h4>
                      <span className="portfolio-card-category">{item.category.toUpperCase()}</span>
                    </div>
                  </div>
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
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

