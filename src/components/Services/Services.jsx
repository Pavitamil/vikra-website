import { motion } from 'framer-motion'
import { Search, BarChart3, Anchor, Microscope, Gauge, Ship } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Search size={28} />,
    title: 'Underwater Inspection',
    description: 'Dam, bridge, pier, and pipeline inspection using ROVs and crawlers with HD imaging and real-time data.',
    highlights: ['Dam Inspections', 'Pier & Bridge', 'Pipeline Survey'],
    color: 'cyan',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Hydrographic Surveys',
    description: 'Accurate bathymetric and hydrographic survey services with sub-centimeter precision using our USV platform.',
    highlights: ['Bathymetric Mapping', 'Harbor Surveys', 'Coastal Mapping'],
    color: 'teal',
  },
  {
    icon: <Anchor size={28} />,
    title: 'Aquaculture Monitoring',
    description: 'Monitoring fish cages, netting conditions, and water quality in aquaculture facilities with autonomous systems.',
    highlights: ['Fish Farm Surveys', 'Net Inspection', 'Water Quality'],
    color: 'cyan',
  },
  {
    icon: <Microscope size={28} />,
    title: 'Environmental Research',
    description: 'Marine ecosystem assessment, coral reef monitoring, and sediment analysis supporting scientific research teams.',
    highlights: ['Ecosystem Analysis', 'Coral Monitoring', 'Sediment Study'],
    color: 'teal',
  },
  {
    icon: <Gauge size={28} />,
    title: 'Defence & IDEX',
    description: 'Defense-grade underwater reconnaissance, harbor security surveys, and mine countermeasure operations.',
    highlights: ['Harbor Security', 'Reconnaissance', 'Mine Detection'],
    color: 'cyan',
  },
  {
    icon: <Ship size={28} />,
    title: 'Hull Inspections',
    description: 'Fast, cost-effective hull inspection and fouling assessment for ships and offshore structures without dry-docking.',
    highlights: ['Ship Hull', 'Fouling Analysis', 'Offshore Platforms'],
    color: 'teal',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="services-bg-glow" />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">
            End-to-End <span>Marine Services</span>
          </h2>
          <p className="section-subtitle">
            We deploy our robotics fleet to deliver high-quality underwater survey, inspection, and monitoring services across industry verticals.
          </p>
        </div>

        <motion.div
          className="services-grid-horizontal"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              className={`service-card-horizontal glass-card service-card-${s.color}`}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={`service-thumb-wrap service-thumb-${s.color}`}>
                {s.icon}
              </div>
              <div className="service-info-wrap">
                <h3 className="service-title-horizontal">{s.title}</h3>
                <p className="service-desc-horizontal">{s.description}</p>
                <ul className="service-highlights-horizontal">
                  {s.highlights.map((h) => (
                    <li key={h} className="service-highlight-horizontal">
                      <div className={`service-highlight-dot service-dot-${s.color}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
