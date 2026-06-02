import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import usv1 from '../assets/profile/USV-1.png'
import usv2 from '../assets/profile/USV-2.png'
import usv3 from '../assets/profile/USV-3.jpg'
import './WavebotDetailPage.css'

export default function WavebotDetailPage() {
  const specs = [
    { label: 'Dimensions', value: '1.8 x 0.9 x 0.3 m' },
    { label: 'Survey Speed', value: '2-3 Knots' },
    { label: 'Draft', value: '0.1 m' },
    { label: 'Hull Material', value: 'GFRP' },
    { label: 'Max. Payload Capacity', value: '30 Kg' },
    { label: 'Endurance', value: 'minimum 4 Hrs @ 2 Knots' },
    { label: 'Range', value: '0.5 - 2 Km radius (Optional)' },
    { label: 'Mode', value: 'Remotely Controlled & Autonomous' },
    { label: 'Collision Avoidance', value: 'LiDAR' },
    { label: 'Battery', value: '2 x 100 Ah Li-Ion with Voltage Display' },
    { label: 'Pay Load Mount', value: 'Through Hull' },
    { label: 'Pay Load', value: 'Option for Multiple Payloads' },
    { label: 'Sonar', value: 'Single Beam Dual Frequency Echologger' },
    { label: 'On Board Computer', value: 'Latest Gen Core I3 Processor with 8 GB Ram' },
    { label: 'Sea State', value: '2' },
    { label: 'RTK', value: 'GNSS system for centimetre level accuracy' },
    { label: 'Connectivity', value: '5G , Radio Link Remote Control' },
    { label: 'Camera', value: '2MP PTZ IP camera for FPV operation' },
    { label: 'Ground Station Software', value: 'QGCS or Mission Planner' },
    { label: 'Survey Software', value: 'Hypack' },
    { label: 'Ground Control Station', value: '14" Laptop with Core i3 Processor' },
  ]

  return (
    <>
      <PageHero
        title="WAVEBOT-I DETAILS"
        subtitle="Autonomous Surface Vessel for Hydrographic Surveys & Rescue Operations."
        eyebrow="WAVEBOT-I TECHNOLOGY"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'WAVEBOT-I Details' }
        ]}
      />

      {/* Alternating Overview Section */}
      <section className="wavebot-alternating-overview">
        <div className="container">
          
          {/* Row 1: Left Text, Right Image */}
          <div className="wavebot-alt-row">
            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="wavebot-tech-badge">VIKRA OCEAN TECH</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The strength of the Vikra lies in smart design and manufacturing. We are developing technology that will allow the fullest utilization of our marine and inland water bodies. Our current projects involve structural health inspection of dam, bridges and towers, periodic inspection of silt/ soil in the water bodies to enhance unobstructed flow in waterbodies. We also offer deep sea experimentation for academic and commercial entities.
              </p>
            </motion.div>
            
            <motion.div 
              className="wavebot-alt-img-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="wavebot-detail-featured-wrap glass-card" style={{ width: '100%', height: 'auto', aspectRatio: 'auto' }}>
                <img src={usv1} alt="WAVEBOT Uncrewed Surface Vessel" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                WAVEBOT (Uncrewed surface Vessel)
              </span>
            </motion.div>
          </div>

          {/* Row 2: Left Image, Right Text */}
          <div className="wavebot-alt-row reverse">
            <motion.div 
              className="wavebot-alt-img-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="wavebot-detail-featured-wrap glass-card" style={{ width: '100%', height: 'auto', aspectRatio: 'auto' }}>
                <img src={usv3} alt="WAVEBOT Water Mission" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
            </motion.div>

            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                WAVEBOT is an autonomous surface Vessels for hydrographic survey and rescue applications. Depends on the user requirement, multiple pay load can be added. Autonomous and manual mode can be switched using GUI. The GUI application runs on a base station laptop, connected through a telemetry link, and displays the vehicle’s graphical positioning and progress against a background map of the survey area. Battery voltage remaining is monitored via this link. Switching from autonomous to remote control of the survey boat is easy using a high-power remotecontrol system that offers up to 2.5km range, with a survey endurance of 3 hours.
              </p>
              
              <div className="wavebot-gcs-badge-box">
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#1e293b' }}>
                  WAVEBOT (Uncrewed surface Vessel)
                </p>
                <a href="https://www.vikraoceantech.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
                  www.vikraoceantech.com
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Specifications Section */}
      <section className="wavebot-specs-section" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '40px', letterSpacing: '-0.5px' }}>
            Specifications
          </h2>

          {/* Wide Landscape Banner Image (950px width, 260px reduced height) */}
          <div className="glass-card" style={{ width: '100%', maxWidth: '950px', height: '260px', margin: '0 auto 50px auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <img src={usv1} alt="WAVEBOT specifications model" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          </div>

          {/* Specifications Bullet List */}
          <div style={{ textAlign: 'left', padding: '0 20px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.15rem', lineHeight: '2.2', color: '#334155' }}>
              {specs.map((spec, idx) => (
                <li key={idx} style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#1e293b' }}>{spec.label}</strong> – {spec.value}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Video Section */}
      <section className="wavebot-video-section" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="wavebot-detail-video-wrapper glass-card" style={{ background: '#ffffff', borderColor: 'rgba(0,0,0,0.08)', padding: '30px' }}>
            <h4 className="wavebot-detail-subtitle" style={{ borderLeft: '3px solid #0066cc', paddingLeft: '12px', marginBottom: '24px', fontSize: '1.2rem', fontWeight: 700, color: '#1e293b' }}>
              WAVEBOT IN ACTION (FIELD TRIAL VIDEO)
            </h4>
            <div className="wavebot-iframe-container">
              <iframe
                className="wavebot-iframe"
                src="https://www.youtube.com/embed/sxaYhFe3bJQ?si=No9ARmSiupe3HVGQ"
                title="WAVEBOT USV Field Operations"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
