import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import SpecsList from '../components/SpecsList/SpecsList'
import caseImg from '../assets/vikra-product-img/under-water-img-1.png'
import tankImg from '../assets/vikra-product-img/under-water-img-2.png'
import specsImg15200 from '../assets/vikra-product-img/underwater-spec-img.png'
import lightImgL40010 from '../assets/vikra-product-img/under-light-img.png'
import lightImgL15010 from '../assets/vikra-product-img/under-water-light-2.png'
import './WavebotDetailPage.css' // Reuse premium light-mode styling
import Payloads from '../components/Payloads/Payloads'


export default function UnderwaterLightBatteryDetailPage() {
  const specsLB15200 = [
    { label: 'Lumens', value: '1500' },
    { label: 'Temperature', value: '5000K Cool White' },
    { label: 'Power', value: '15 Watt' },
    { label: 'Dimensions', value: '90 mm (Dia) x 496 mm (length)' },
    { label: 'Input Voltage', value: '12 V DC' },
    { label: 'Material', value: 'AL-6061 Anodised and Acrylic' },
    { label: 'Rated Depth', value: '2000 m' },
    { label: 'Duration', value: 'Min 2 hours' },
    { label: 'Intensity Control', value: 'Timer Based (4 stages)' },
    { label: 'Built in battery', value: 'Li-Ion 11.1V, 20000 mAh' },
  ]

  const specsL40010 = [
    { label: 'Lumens', value: '4000' },
    { label: 'Temperature', value: '5000K Cool White' },
    { label: 'Beam Angle', value: '100 Deg' },
    { label: 'Dimensions', value: '85 mm (Dia) x 120 mm (Length)' },
    { label: 'Input Voltage', value: '12 V DC' },
    { label: 'Material', value: 'AL-6061 Anodised and Glass/Acrylic' },
    { label: 'Rated Depth', value: '100 m' },
    { label: 'Intensity Control', value: 'Software Based' },
    { label: 'Cable', value: 'Cat6 Under Water Cable' },
    { label: 'Power Input', value: 'UPS powered' },
  ]

  const specsL15010 = [
    { label: 'Lumens', value: '1500' },
    { label: 'Temperature', value: '5000K Cool White' },
    { label: 'Beam Angle', value: '100 Deg' },
    { label: 'Dimensions', value: '80 mm (Dia) x 100 mm (Length)' },
    { label: 'Input Voltage', value: '12 V DC' },
    { label: 'Material', value: 'AL-6061 Anodised and Glass/Acrylic' },
    { label: 'Rated Depth', value: '100 m' },
    { label: 'Intensity Control', value: 'Software Based' },
    { label: 'Cable', value: 'Cat6 Under Water Cable' },
    { label: 'Power Input', value: 'UPS powered' },
  ]

  return (
    <>
      <PageHero
        title="Underwater Lights - LB15200, L40010 & L15010"
        subtitle="Professional Deepsea LED Searchlights & Illumination Systems Rated Up to 2000m Depth."
        eyebrow="DEEPSEA ILLUMINATION"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Underwater Lights' }
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
                Battery powered Underwater lights are typically specialized and built to withstand the extreme pressures and harsh conditions found in the deep ocean. These lights are commonly used in submersibles, scientific research equipment for deep-sea exploration. Lights used at such depths must be designed to withstand the immense water pressure. Deepsea environments can be extremely cold, and lights are designed to operate at low temperatures.
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
                <img src={caseImg} alt="Underwater Light Carrying Case" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                DEEPSEA LIGHT CARRYING CASE
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
                <img src={tankImg} alt="Underwater Operation Water Tank Test" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                DEEPSEA LIGHT WATER TANK TESTING
              </span>
            </motion.div>

            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: 'var(--color-primary, #0066cc)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>Integration & Efficiency</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                These lights typically produce a high lumen output to provide sufficient illumination in the deep, dark ocean. LED technology is often used for its efficiency and brightness. The lights are designed to be easily integrated into the equipment, vehicles, or submersibles for which they are intended. Various mounting options, such as bolt-on or custom-designed mounts. These lights are specialized, expensive, and essential for the success of underwater missions in the deep ocean. Energy-efficient LED lights, which not only reduce energy consumption but also produce less heat, making them suitable for maintaining water temperature in aquatic environments.
              </p>
              
              <div className="wavebot-gcs-badge-box">
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#1e293b' }}>
                  VIKRA DEEPSEA LIGHTS SERIES
                </p>
                <a href="https://www.vikraoceantech.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
                  www.vikraoceantech.com
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Specifications Showcase Directory */}
      <section className="wavebot-specs-section" style={{ padding: '100px 0', background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="wavebot-tech-badge">SPECIFICATIONS DIRECTORY</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: '#1e293b', marginTop: '16px', letterSpacing: '-0.5px' }}>
              Deepsea Lights Specs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {/* Model 1: LB15200 (Battery Powered) */}
            <motion.div 
              className="spec-model-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 750, color: '#1e293b', marginBottom: '24px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>
                Underwater Light Battery Powered - LB15200
              </h3>
              
              <div className="specs-two-column-grid" style={{ marginTop: '0', alignItems: 'center' }}>
                {/* Left Column: Specifications List */}
                <div className="specs-list-col">
                  <SpecsList specs={specsLB15200} />
                </div>
                {/* Right Column: Model Image */}
                <div className="specs-image-col">
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                    <img src={specsImg15200} alt="LB15200 Battery Light Specs Model" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Model 2: L40010 */}
            <motion.div 
              className="spec-model-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 750, color: '#1e293b', marginBottom: '24px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>
                Underwater Light - L40010
              </h3>
              
              <div className="specs-two-column-grid" style={{ marginTop: '0', alignItems: 'center' }}>
                {/* Left Column: Specifications List */}
                <div className="specs-list-col">
                  <SpecsList specs={specsL40010} />
                </div>
                {/* Right Column: Model Image */}
                <div className="specs-image-col">
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                    <img src={lightImgL40010} alt="L40010 4000 Lumens Light Specs Model" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Model 3: L15010 */}
            <motion.div 
              className="spec-model-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 750, color: '#1e293b', marginBottom: '24px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>
                Underwater Light - L15010
              </h3>
              
              <div className="specs-two-column-grid" style={{ marginTop: '0', alignItems: 'center' }}>
                {/* Left Column: Specifications List */}
                <div className="specs-list-col">
                  <SpecsList specs={specsL15010} />
                </div>
                {/* Right Column: Model Image */}
                <div className="specs-image-col">
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                    <img src={lightImgL15010} alt="L15010 1500 Lumens Light Specs Model" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    
      <Payloads /></>
  )
}
