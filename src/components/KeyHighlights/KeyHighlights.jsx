import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import './KeyHighlights.css'

export default function KeyHighlights({ highlights, isNested = false }) {
  if (!highlights || highlights.length === 0) return null

  // Animation configuration for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const gridContent = (
    <motion.div 
      className="key-highlights-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      {highlights.map((highlight, idx) => {
        // Find corresponding icon component from lucide-react, fallback to HelpCircle
        const IconComponent = Icons[highlight.icon] || Icons.HelpCircle

        return (
          <motion.div 
            key={idx} 
            className="key-highlight-card"
            variants={itemVariants}
          >
            <div className="key-highlight-icon-wrap">
              <IconComponent size={24} strokeWidth={2.5} />
            </div>
            <div className="key-highlight-content">
              <h3 className="key-highlight-title">{highlight.title}</h3>
              <p className="key-highlight-desc">{highlight.description}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )

  if (isNested) {
    return gridContent
  }

  return (
    <section className="key-highlights-section">
      <div className="key-highlights-container">
        <h2 className="key-highlights-section-title">Key Highlights</h2>
        {gridContent}
      </div>
    </section>
  )
}
