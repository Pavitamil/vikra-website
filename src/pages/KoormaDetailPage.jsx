import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import SpecsList from '../components/SpecsList/SpecsList'
import koormaImg from '../assets/vikra-product-img/amphious-img.png'
import './WavebotDetailPage.css' // Reuse premium styling
import Payloads from '../components/Payloads/Payloads'


export default function KoormaDetailPage() {
  const specs = [
    { label: 'Portable System', value: 'weighing less than 70 Kg' },
    { label: 'Operational Depth', value: 'Upto 100 m' },
    { label: 'Soil Bearing Capability', value: 'Capability to crawl on the softer soil with 2Kpa bearing strength' },
    { label: 'Climbing Angle', value: 'Can Crawl upto 45 Degrees in Underwater and Surface' },
    { label: 'Crawling speed', value: 'max 5Kmph/2.5 Kmph' },
    { label: 'Stability', value: 'Stable upto 5 Knts' },
    { label: 'Range', value: 'Wireless 4-5 Km* (Surface) , Wired-250m (Underwater)' },
    { label: 'Instruments', value: 'Cone Penetrometer Setup for Soil Bearing Pressure' },
    { label: 'Sensors', value: 'Water Current, Depth, Bed Profile' },
  ]

  return (
    <>
      <PageHero
        title="Amphibious Crawling Robot"
        subtitle="Amphibious Crawling Robot for Soft-Soil Geotechnical Assessment & Wet Gap Crossing."
        eyebrow="KOORMA TECHNOLOGY"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Amphibious Crawling Robot' }
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
              <h4 className="wavebot-tech-badge">KOORMA</h4>
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
                <img src={koormaImg} alt="KOORMA Amphibious Crawler" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                KOORMA (Amphibious Crawling Robot)
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
                <img src="/koorma_crawler.png" alt="KOORMA Field Mission" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
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
                The amphibious crawling robot is designed to assist military personnel in measuring in-situ soil strength across wet gaps. It operates with a tethered system underwater, while utilizing a wireless system for surface operations. Equipped with a cone penetrometer for measuring soil bearing pressure, the system also includes sensors for depth, bed profile, and water current monitoring.
              </p>
              

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
                <img src="/koorma_crawler.png" alt="KOORMA specifications model" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>

        </div>
      </section>
    
      <Payloads 
        imagingImages={[
          "/koorma_payload_1_1783254620764.png", 
          "/koorma_payload_2_1783254631259.png"
        ]}
        sideScanImages={[
          "/koorma_payload_3_1783254641370.png", 
          "/koorma_payload_4_1783254651387.png"
        ]}
      /></>
  )
}
