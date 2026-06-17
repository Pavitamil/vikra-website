import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import SpecsList from '../components/SpecsList/SpecsList'
import borewellImg from '../assets/vikra-product-img/borewall-camera-img.png'
import './WavebotDetailPage.css' // Reuse premium light-mode styling
import Payloads from '../components/Payloads/Payloads'


export default function BorewellCameraDetailPage() {
  const specs = [
    { label: 'Pixel', value: '1500TVL/ 2MP, 1080P, 25-30fps' },
    { label: 'Dimensions', value: '2 inch/3inch (Dia)' },
    { label: 'Camera length', value: '3 /6 inches' },
    { label: 'Display Size', value: '7 /15.6 inch' },
    { label: 'Material Housing', value: 'SS- 304' },
    { label: 'Waterproofing', value: 'IP68' },
    { label: 'Weight', value: '200 /600gm' },
    { label: 'LED’s', value: '8 (With intensity control)' },
    { label: 'Battery', value: '12V' },
    { label: 'Winch Frame', value: '100Mtr (Aero space grade)' },
    { label: 'Cable', value: 'Co-axial /CAT6' },
    { label: 'Working hours', value: '4-5hrs' },
    { label: 'Cable Length', value: 'Coax-300 m/CAT6-85 m' },
    { label: 'GCS', value: 'Epicase with 7\" display No hard Disk / 15\" display and 1TB Harddisk' },
  ]

  return (
    <>
      <PageHero
        title="Borewell Camera"
        subtitle="Deep Well & Borehole Inspection Camera System with Rugged Aerospace Winch Frame."
        eyebrow="BOREWELL VISION"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Borewell Camera Details' }
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
                Borehole inspection is a critical but challenging task — narrow diameters, dark environments, and high-pressure water columns make it ideal for a purpose-built robotic solution. Our Borewell Camera system handles boreholes from 80mm upwards, communicating live HD video to the surface through deep water layers with ease. Housed in a waterproof IP68 SS-304 stainless steel enclosure, it is built to withstand extreme mechanical stress.
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
                <img src={borewellImg} alt="Borewell Camera Winch & Reels system" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                BOREWELL INSPECTION WINCH SYSTEM
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
                <img src="/borewell_camera_pipeline.png" alt="Borewell Camera pipe navigation" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                BOREWELL CORE PIPE EXPLORATION
              </span>
            </motion.div>

            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: 'var(--color-primary, #0066cc)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>Epicase Controls</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The rugged Epicase Ground Control Station (available in 7" display with no hard disk or 15.6" display and 1TB harddisk options) provides a fully self-contained, weatherproof control and display station. With a 4-5 hour rechargeable battery, field teams can conduct thorough structural geological surveys and pipeline mapping without any external power source, capturing every detail via coaxial or CAT6 lines.
              </p>
              
              <div className="wavebot-gcs-badge-box">
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#1e293b' }}>
                  BOREWELL CAMERA (Borehole Inspection System)
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
                <img src="/borewell_specs_banner.png" alt="Borewell Camera structural model" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>

        </div>
      </section>
    
      <Payloads /></>
  )
}
