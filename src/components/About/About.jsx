import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './About.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        {/* Centered Header */}
        <div className="about-header">
          <h2 className="about-section-title">About Us</h2>
          <div className="about-title-underline"></div>
          <p className="about-section-subtitle">
            Vikra Ocean Tech specializes in autonomous underwater robotics and marine technology solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Video */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="about-video-container">
              <div className="about-image-glow" />
              <div className="about-video-wrapper">
                <iframe
                  className="about-iframe"
                  src="https://www.youtube.com/embed/sxaYhFe3bJQ?si=No9ARmSiupe3HVGQ"
                  title="Vikra Ocean Tech Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3 className="about-content-heading" variants={itemVariants}>
              VIKRA OCEAN TECH PVT LTD
            </motion.h3>

            <motion.p className="about-text" variants={itemVariants}>
              Vikra Ocean Tech is a pioneering ocean robotics startup focused on developing autonomous underwater platforms, including ASVs, ROVs, and advanced underwater surveillance systems. Our technology empowers industries to explore, monitor, and maintain marine and inland water environments with precision. We specialize in dam, bridge, and reservoir inspections, aquaculture, environmental research, and deep-sea experiments. At Vikra, we are committed to enhancing underwater exploration and operations through innovation and cutting-edge solutions.
            </motion.p>

            {/* Checklist */}
            <motion.ul className="about-checklist" variants={containerVariants}>
              {[
                'Experts in autonomous underwater robotics (ASVs, ROVs, surveillance).',
                'Diverse applications: dam inspections, aquaculture, research, and naval.',
                'Offering deep-sea experimentation for academic and commercial projects.',
                'Developers of Koorma, an amphibious land and water robot.',
              ].map((item, idx) => (
                <motion.li key={idx} className="about-checklist-item" variants={itemVariants}>
                  <span className="about-check-icon">
                    <Check size={18} strokeWidth={3} />
                  </span>
                  <span className="about-checklist-text">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

