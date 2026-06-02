import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import usvImg from '../../assets/profile/USV-1.png'
import './FeaturedUSV.css'

export default function FeaturedUSV() {
  return (
    <section className="featured-usv-section">
      <div className="container">
        <div className="section-header featured-usv-header">
          <span className="section-eyebrow">Featured Technology</span>
          <h2 className="section-title">
            WAVEBOT <span>Uncrewed Surface Vessel</span>
          </h2>
        </div>

        <div className="featured-usv-card glass-card">
          <div className="featured-usv-grid">
            {/* Image container */}
            <motion.div
              className="featured-usv-image-wrap"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={usvImg} alt="WAVEBOT Uncrewed Surface Vessel" className="featured-usv-img" />
              <div className="featured-usv-glow" />
            </motion.div>

            {/* Content container */}
            <motion.div
              className="featured-usv-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="featured-usv-badge">SURFACE VESSEL</span>
              <h3 className="featured-usv-card-title">WAVEBOT USV</h3>
              
              {/* Exactly two lines of description */}
              <p className="featured-usv-desc">
                WAVEBOT is an autonomous surface vessel designed for hydrographic surveys and rescue applications.
                Equipped with LiDAR collision avoidance and RTK GNSS, it switches between manual and autonomous modes via GUI telemetry.
              </p>

              <div className="featured-usv-actions">
                <Link to="/wavebot-detail" className="btn-primary featured-usv-btn">
                  Explore WAVEBOT
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
