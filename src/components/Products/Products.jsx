import { motion } from 'framer-motion'
import rovImg from '../../assets/product/rov.png'
import waveBotImg from '../../assets/product/wave-bot.png'
import koormaImg from '../../assets/product/koorma.png'
import cameraImg from '../../assets/product/under-water-camera.png'
import lightImg from '../../assets/product/light.png'
import diverImg from '../../assets/product/diver-communication-units.png'
import './Products.css'

const products = [
  {
    id: 'rovito',
    iconName: 'zap',
    badge: 'ROV',
    badgeColor: 'cyan',
    name: 'ROVITO',
    tagline: 'Precision Remotely Operated Vehicle',
    description:
      'ROVITO is a cutting-edge remotely operated vehicle (ROV) designed for high-resolution underwater inspections. With advanced imaging and navigation capabilities, it enables precise data collection in challenging marine environments.',
    image: rovImg,
    features: ['HD Camera System', 'Multi-thruster Control', 'Depth: 300m+', 'Real-time Telemetry', 'Modular Payload'],
    specs: [
      { label: 'Depth Rating', value: '300m' },
      { label: 'Camera', value: '4K HD' },
      { label: 'Thrusters', value: '6 DOF' },
      { label: 'Tether', value: 'Neutral' },
    ],
    gradientClass: 'gradient-rovito',
  },
  {
    id: 'wavebot',
    iconName: 'waves',
    badge: 'USV',
    badgeColor: 'teal',
    name: 'WAVEBOT',
    tagline: 'Autonomous Surface Vessel',
    description:
      "WAVEBOT is an advanced autonomous surface vehicle (USV) designed for efficient navigation and data collection on the water's surface. Ideal for bathymetric surveys and environmental monitoring, it delivers precise insights for a variety of marine applications.",
    image: waveBotImg,
    features: ['Autonomous Navigation', 'Bathymetric Survey', 'GPS/GNSS Precision', 'Environmental Sensors', 'Long Endurance'],
    specs: [
      { label: 'Endurance', value: '8+ hrs' },
      { label: 'Speed', value: '5 knots' },
      { label: 'Payload', value: '20 kg' },
      { label: 'Navigation', value: 'GPS/IMU' },
    ],
    gradientClass: 'gradient-wavebot',
  },
  {
    id: 'koorma',
    iconName: 'bug',
    badge: 'Amphibious',
    badgeColor: 'cyan',
    name: 'KOORMA',
    tagline: 'Amphibious Crawling Robot',
    description:
      'KOORMA is an innovative amphibious robot that seamlessly operates on both land and underwater. Designed for versatile inspections, it provides flexible solutions for coastal areas and rugged terrains, enhancing operational capabilities.',
    image: koormaImg,
    features: ['Dual Mode: Water + Land', 'Crawler Design', 'Hull & Pipe Inspection', 'Obstacle Navigation', 'Compact Portability'],
    specs: [
      { label: 'Modes', value: 'Amphibious' },
      { label: 'Depth', value: '50m' },
      { label: 'Speed', value: '0.5 m/s' },
      { label: 'Payload', value: '5 kg' },
    ],
    gradientClass: 'gradient-koorma',
  },
  {
    id: 'ucam',
    iconName: 'camera',
    badge: 'Vision System',
    badgeColor: 'teal',
    name: 'DEEPSEA CAMERA',
    tagline: 'Extreme Depth Vision System',
    description:
      'Our deep-sea camera is engineered for extreme underwater conditions, capturing high-resolution imagery at significant depths. Equipped with advanced lighting and stabilization technology, it ensures clear and detailed visual data for research and exploration.',
    image: cameraImg,
    features: ['4K UHD Resolution', 'Depth Rating: 2000m+', 'Low Light Sensitivity', 'Modular Mountings', 'Scratch Resistant sapphire lens'],
    specs: [
      { label: 'Max Depth', value: '2000m+' },
      { label: 'Resolution', value: '4K UHD' },
      { label: 'Lens', value: 'Sapphire Glass' },
      { label: 'Housing', value: 'Titanium' },
    ],
    gradientClass: 'gradient-ucam',
  },
  {
    id: 'ulights',
    iconName: 'sun',
    badge: 'Lighting',
    badgeColor: 'cyan',
    name: 'DEEPSEA LIGHTS',
    tagline: 'High-Power Underwater Illumination',
    description:
      'Our deep-sea lights are designed to illuminate the darkest underwater environments, providing powerful and reliable illumination at significant depths. With adjustable intensity and durable construction, they enhance visibility for inspections, research, and exploration.',
    image: lightImg,
    features: ['High Lumen Output', 'Adjustable Dimming', 'Extreme Depth Tolerance', 'Wide Angle Beam', 'Thermal Protection'],
    specs: [
      { label: 'Brightness', value: '10k+ lumens' },
      { label: 'Depth Rating', value: '2000m+' },
      { label: 'Beam Angle', value: '120°' },
      { label: 'Power Source', value: 'DC/AC Input' },
    ],
    gradientClass: 'gradient-ucam',
  },
  {
    id: 'diver-comm',
    iconName: 'radio',
    badge: 'Communication',
    badgeColor: 'teal',
    name: 'DIVER COMMUNICATION SYSTEM',
    tagline: 'Real-time Diver-Surface Voice Link',
    description:
      'Our diver communication system provides reliable, real-time audio communication between divers and surface teams for enhanced safety and coordination during underwater operations.',
    image: diverImg,
    features: ['Full-Duplex Audio', 'Noise-canceling Tech', 'Durable Cable Reel', 'Multi-Diver Support', 'Clear Audio Bandwidth'],
    specs: [
      { label: 'Range', value: '500m+' },
      { label: 'Depth', value: '100m' },
      { label: 'Channels', value: '2 Channels' },
      { label: 'Battery Life', value: '12+ hrs' },
    ],
    gradientClass: 'gradient-diver',
  },
]

export default function Products() {
  return (
    <section id="products" className="products-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            PRODUCTS
          </h2>
        </div>

        <div className="products-grid-model">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              className="product-card-model"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="product-card-img-wrap">
                <img src={p.image} alt={p.name} className="product-card-img" />
              </div>
              <h3 className="product-card-title">
                <a href="#contact">{p.name}</a>
              </h3>
              <p className="product-card-desc">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
