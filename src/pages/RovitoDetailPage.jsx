import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import SpecsList from '../components/SpecsList/SpecsList'
import img1 from '../assets/paylode-img/roviotsensor.webp'
import img2 from '../assets/paylode-img/rovotsensor-1.webp'
import img3 from '../assets/paylode-img/rovito-pay-2.jpg'
import img4 from '../assets/paylode-img/rovito-pay-3.jpg'
import rovitoImg1 from '../assets/vikra-product-img/rivot-img-1.png'
import rovitoImg2 from '../assets/vikra-product-img/rivot-img-2.png'
import rovitoImg3 from '../assets/vikra-product-img/rivot-img-3.png'
import './WavebotDetailPage.css' // Reuse premium styling
import Payloads from '../components/Payloads/Payloads'


export default function RovitoDetailPage() {
  const specs = [
    { label: 'Endurance capable', value: 'Min 120 min' },
    { label: 'Size', value: '500x400x500mm' },
    { label: 'Diving depth', value: '100m' },
    { label: 'Rated Speed', value: '2 Knots' },
    { label: 'Max Speed', value: '4 Knots' },
    { label: 'No. of Thrusters', value: '6' },
    { label: 'Communication', value: 'Tethered' },
    { label: 'Tether length', value: '150m and Neutrally Buoyant' },
    { label: 'Tether', value: 'Spool with slipring 150m' },
    { label: 'Camera', value: '2 Nos 2MP 1080P and Offline 4K camera' },
    { label: 'Lights', value: '4 x 1500 Lumens' },
    { label: 'Weight', value: '9-10 Kg' },
    { label: 'Buoyancy', value: 'Slightly Positive Buoyant' },
    { label: 'Battery', value: '10000mAh li-ion rechargeable' },
    { label: 'Pay Load', value: '1.5 Kg' },
    { label: 'Ground Control Station', value: 'Laptop with latest core i3 processor' },
  ]

  return (
    <>
      <PageHero
        title="ROVITO"
        subtitle="Remotely Operated Underwater Vehicle for High-Resolution Visual Inspection & Exploration."
        eyebrow="ROVITO TECHNOLOGY"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'ROVITO Details' }
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
              <h4 className="wavebot-tech-badge">ROVITO</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                A Remotely Operated Vehicle (ROV) is a type of remotely controlled underwater robot or submersible used for a wide range of underwater tasks and operations. ROVs are typically unmanned and are operated by remote control from the surface. They are widely used in various industries, including marine exploration, offshore oil and gas, scientific research, military applications, and underwater infrastructure inspection and maintenance.
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
                <img src={rovitoImg1} alt="ROVITO Inspection ROV" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                ROVITO (Remotely Operated Underwater Vehicle)
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
                <img src={rovitoImg2} alt="ROVITO Inshore Mission" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
            </motion.div>

            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: 'var(--color-primary, #0066cc)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>Inshore Inspection</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Inshore use of ROVs often reduces the need for divers to do visual inspections or in many cases ROVs make it easier for them to pinpoint work that needs to be done. When coupled with sonar, which allows precise navigation in murky waters and sharper profile images, our ROVs can perform a number of tasks to ensure the safety, purity and security of water supplies. This can also extend to pipelines with clarity at pressure depths that are hazardous for divers. The use of ROVs can increase safety and inspection quality, cut plant downtime, and also reduce costs.
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
                <img src={rovitoImg3} alt="ROVITO specifications model" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>

        </div>
      </section>
    
      <Payloads 
        imagingImages={[img1, img2]}
        sideScanImages={[img3, img4]}
      /></>
  )
}
