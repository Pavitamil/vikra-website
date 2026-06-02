import { motion } from 'framer-motion'
import PageHero from '../components/PageHero/PageHero'
import cagedCameraImg from '../assets/vikra-product-img/under-camera-img-1.png'
import matCameraImg from '../assets/vikra-product-img/under-camera-img-2.png'
import specsCB12200Img from '../assets/vikra-product-img/under-camera-spec-img.png'
import specsC2010Img from '../assets/vikra-product-img/under-water-camera-light-spec.png'
import './WavebotDetailPage.css' // Reuse premium light-mode styling

export default function UnderwaterCameraDetailPage() {
  const specsCB12200 = [
    { label: 'Pixel', value: '12.3 MP' },
    { label: 'Sensor Resolution', value: '4056 x 3040 pixels' },
    { label: 'Aperture', value: 'F2.8' },
    { label: 'Lens', value: '3.6 mm' },
    { label: 'Image Sensor Format', value: '1/2.3"' },
    { label: 'Video', value: '4K, 1080P (Jetson Powered)' },
    { label: 'In Built Memory', value: '60 GB' },
    { label: 'Dimensions', value: '124 mm x 382 mm' },
    { label: 'Input Voltage', value: '12 V DC' },
    { label: 'Battery', value: 'Li-Ion, 14.8V, 20000 mAh' },
    { label: 'Material', value: 'SS316 and Glass' },
    { label: 'Rated Depth', value: '2000 m' },
    { label: 'FOV', value: '90 Deg' },
    { label: 'Weight', value: '25 Kg' },
    { label: 'Recording Software', value: 'Deep Cam V2.0 (Windows)' },
  ]

  const specsC2010 = [
    { label: 'Pixel', value: '2MP, 1080P, 25-30fps' },
    { label: 'Lens', value: '3.6 mm' },
    { label: 'Dimensions', value: '85(Dia) x 100 mm' },
    { label: 'Input Voltage', value: '12 V DC POE' },
    { label: 'Material', value: 'SS316 and Glass/Acrylic' },
    { label: 'Rated Depth', value: '100 m' },
    { label: 'FOV', value: '90 Deg' },
    { label: 'Cable', value: 'Cat6 Under Water Cable' },
    { label: 'Connectivity', value: 'Ethernet, RTSP/FTP/SFTP/HTTP/HTTPS' },
    { label: 'Power Input', value: 'UPS powered' },
    { label: 'Recording', value: 'PC Software / NVR' },
  ]

  return (
    <>
      <PageHero
        title="Underwater Cameras - CB12200 & C2010"
        subtitle="Rugged SS316 High-Resolution Deepsea Cameras Rated Up to 2000m Depth."
        eyebrow="DEEPSEA VISION SYSTEMS"
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Underwater Cameras' }
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
                An Battery Powered underwater camera is a specialized camera designed to be used underwater, typically in aquatic environments like oceans, lakes, rivers or underwater ecosystems. These cameras are built to withstand the unique challenges and conditions of submersion and are used for various purposes, including research, photography, videography, and recreational activities at a depth of 2000mtr.
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
                <img src={cagedCameraImg} alt="Underwater Camera Caged Assembly" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                CB12200 DEEPSEA ASSEMBLY STAGE
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
                <img src={matCameraImg} alt="CB12200 lying on work mat" className="wavebot-detail-featured" style={{ borderRadius: '16px' }} />
              </div>
              <span className="wavebot-image-caption">
                CB12200 PRECISION CORE CALIBRATION
              </span>
            </motion.div>

            <motion.div 
              className="wavebot-alt-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: 'var(--color-primary, #0066cc)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>Depth & Research</h4>
              <p className="wavebot-overview-p" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Depending on the intended depth of use, underwater cameras are designed to withstand varying levels of water pressure. Deep-sea cameras, for example, are built to withstand much higher pressure than those used in shallow waters. Scientists and researchers use underwater cameras to study marine life, ecosystems, and geological formations in the ocean. These cameras play a crucial role in marine biology, oceanography, and environmental research. Underwater cameras are used by search and rescue teams and law enforcement agencies for underwater search and recovery operations, such as locating submerged objects or evidence.
              </p>
              
              <div className="wavebot-gcs-badge-box">
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: '#1e293b' }}>
                  VIKRA DEEPSEA VISION SERIES
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
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="wavebot-tech-badge">SPECIFICATIONS DIRECTORY</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: '#1e293b', marginTop: '16px', letterSpacing: '-0.5px' }}>
              Underwater Cameras Specs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {/* Model 1: CB12200 (Battery Powered) */}
            <motion.div 
              className="glass-card" 
              style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 750, color: '#1e293b', marginBottom: '24px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>
                Underwater Camera Battery Powered - CB12200
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }}>
                <div>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                    <img src={specsCB12200Img} alt="CB12200 Battery Camera Specs Model" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
                <div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.05rem', lineHeight: '2.0', color: '#475569' }}>
                    {specsCB12200.map((spec, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>
                        <strong style={{ color: '#1e293b' }}>{spec.label}</strong> – {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Model 2: C2010 */}
            <motion.div 
              className="glass-card" 
              style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 750, color: '#1e293b', marginBottom: '24px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>
                Underwater Camera - C2010
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }}>
                <div>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                    <img src={specsC2010Img} alt="C2010 POE Camera Specs Model" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
                <div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.05rem', lineHeight: '2.0', color: '#475569' }}>
                    {specsC2010.map((spec, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>
                        <strong style={{ color: '#1e293b' }}>{spec.label}</strong> – {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  )
}
