import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import koormaImg from '../assets/vikra-product-img/amphious-img.png'
import './WavebotDetailPage.css' // Reuse premium styling

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
              
              <div className="wavebot-gcs-badge-box">
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#1e293b' }}>
                  KOORMA (Amphibious Crawling Robot)
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

          {/* Wide Landscape Banner Image */}
          <div className="glass-card" style={{ width: '100%', maxWidth: '950px', height: '260px', margin: '0 auto 50px auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <img src="/koorma_crawler.png" alt="KOORMA specifications model" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
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
    </>
  )
}
