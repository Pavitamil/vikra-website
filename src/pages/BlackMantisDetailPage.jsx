import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import SpecsList from '../components/SpecsList/SpecsList'
import blackMantisImg from '../assets/vikra-product-img/black-mat-1.png'
import './WavebotDetailPage.css' // Reuse premium styling
import Payloads from '../components/Payloads/Payloads'


export default function BlackMantisDetailPage() {
  const specs = [
    { label: 'Endurance capable', value: '2 hrs' },
    { label: 'Size', value: '450x300x200 mm' },
    { label: 'Diving depth', value: '100m' },
    { label: 'Rated Speed', value: '2 Knots' },
    { label: 'Max Speed', value: '4 Knots' },
    { label: 'No. of Thrusters', value: '6' },
    { label: 'Communication', value: 'Tethered' },
    { label: 'Tether length', value: '50 m and Neutrally Buoyant (extendable upto 300 m)' },
    { label: 'Camera', value: '2MP 1080P' },
    { label: 'Lights', value: '4 x 1500 Lumens (6000 Lumens total)' },
    { label: 'Weight', value: '8 Kg' },
    { label: 'Buoyancy', value: 'Slightly Positive Buoyant' },
    { label: 'Battery', value: '10000mAh li-ion rechargeable' },
    { label: 'Pay Load', value: '0.8 Kg' },
    { label: 'Ground Control Station', value: 'Laptop with i3 Processor' },
  ]

  return (
    <>
      <PageHero
        title="BLACK MANTIS"
        subtitle="Rugged Remotely Operable Vehicle for Underwater Surveillance, Inspection & Surveying."
        eyebrow="BLACK MANTIS ROV"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Black Mantis Details' }
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
              <h4 className="wavebot-tech-badge">Overview</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Black Mantis is a Remotely Operable Vehicle for an Underwater surveillance and survey applications. Black Mantis can dive upto 100 m depth in an open water and can go upto 4 knots speed. Depends on the user, the payload can be integrated on the vehicle upto 0.8 Kg . The Vehicle is connected to the user through Ground Control Station(GCS). The communication between the GCS and the vehicle is achieved through the neutrally buoyant CAT6 cable. The 2 MP camera with 6000 lumens of light are very suitable for the underwater surveillance and survey applications.
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
                <img src={blackMantisImg} alt="Black Mantis Surveillance ROV" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                BLACK MANTIS (Surveillance & Survey ROV)
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
                <img src="/black_mantis_underwater.png" alt="Black Mantis Deep Sea Mission" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
            </motion.div>

            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: 'var(--color-primary, #0066cc)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>Surveillance & Controls</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The Ground Control Station utilizes a ruggedized laptop equipped with a high-performance processor, rendering ultra-low latency real-time overlays of water currents, depths, and battery health telemetry. Combined with its high-power 6-thruster configuration, operators gain exceptional maneuverability to execute critical hull, bridge, and pipeline assessments efficiently under harsh currents, ensuring premium inspection results without risk to human divers.
              </p>
              
              <div className="wavebot-gcs-badge-box">
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#1e293b' }}>
                  BLACK MANTIS (Surveillance & Survey ROV)
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
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '40px', letterSpacing: '-0.5px' }}>
            Specifications
          </h2>

          <div className="specs-two-column-grid">
            {/* Left Column: Specifications List */}
            <div className="specs-list-col" style={{ padding: '0 20px' }}>
              <SpecsList specs={specs} />
            </div>

            {/* Right Column: Model Image */}
            <div className="specs-image-col">
              <div className="glass-card">
                <img src="/black_mantis_specs_banner.png" alt="Black Mantis technical model" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>

        </div>
      </section>
    
      <Payloads /></>
  )
}
