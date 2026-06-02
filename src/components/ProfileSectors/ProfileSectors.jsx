import { motion } from 'framer-motion'
import damsImg from '../../assets/service/dams.png'
import tunnelsImg from '../../assets/profile/rov-1.png'
import oilGasImg from '../../assets/profile/rov-2.png'
import pipelinesImg from '../../assets/profile/rov-3.jpeg'
import bridgesImg from '../../assets/profile/USV-1.png'
import './ProfileSectors.css'

const sectors = [
  {
    id: 'dams',
    title: 'Dams',
    img: damsImg,
    description: 'Vikra offers comprehensive underwater inspection of dams, spillways, reservoirs, and intake structures, identifying cracks, siltation, and structural anomalies without dewatering.',
    link: '/services#dams'
  },
  {
    id: 'tunnels',
    title: 'Tunnels',
    img: tunnelsImg,
    description: 'Vikra provides advanced visual and sonar-based mapping of flooded tunnels, water conduits, and drainage networks to detect blockages, leaks, and internal structural degradation.',
    link: '/services#tunnels'
  },
  {
    id: 'oilgas',
    title: 'Oil & Gas',
    img: oilGasImg,
    description: 'Vikra provides offshore ROV inspections with AI-driven solutions, detecting corrosion, leaks, and structural issues in real-time for oil and gas assets.',
    link: '/services#oilgas'
  },
  {
    id: 'pipelines',
    title: 'Pipelines',
    img: pipelinesImg,
    description: 'Vikra delivers high-precision internal and external inspection of underwater pipelines, ensuring safety, detecting structural faults, and assessing fouling at deep pressures.',
    link: '/services#pipelines'
  },
  {
    id: 'bridges',
    title: 'Bridges',
    img: bridgesImg,
    description: 'Vikra inspects submerged bridge piers, abutments, and foundations using high-resolution cameras and sonar to assess scouring, erosion, and structural integrity.',
    link: '/services#bridges'
  }
]

export default function ProfileSectors() {
  return (
    <section className="profile-sectors-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Expertise Profile</span>
          <h2 className="section-title">
            Sectors <span>We Serve</span>
          </h2>
          <p className="section-subtitle">
            Deploying high-performance robotic solutions across critical underwater and marine infrastructures.
          </p>
        </div>

        {/* 5-Card Layout Grid */}
        <div className="profile-sectors-grid">
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              className="sector-profile-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Card Background Image */}
              <div 
                className="sector-card-bg" 
                style={{ backgroundImage: `url(${sector.img})` }} 
              />
              
              {/* Overlay */}
              <div className="sector-card-overlay" />

              {/* Card Content Wrapper */}
              <div className="sector-card-content">
                {/* Title (Hidden/Faded on card hover via CSS) */}
                <h3 className="sector-card-title-main">{sector.title}</h3>

                {/* Description (Revealed on card hover via CSS) */}
                <div className="sector-card-description-wrap">
                  <p className="sector-card-desc-text">{sector.description}</p>
                </div>
              </div>

              {/* Bottom "Learn More" Action Bar */}
              <a href={sector.link} className="sector-card-action-bar">
                <span className="sector-card-action-text">Learn More</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
