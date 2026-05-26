import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

const stats = [
  { number: '2018', label: 'Year Founded', suffix: '' },
  { number: '5', label: 'Product Lines', suffix: '+' },
  { number: '2000', label: 'Max Depth (meters)', suffix: 'm' },
  { number: '1', label: 'Seed Funding', suffix: 'M$' },
]

function CountUp({ target, suffix, inView }) {
  return (
    <span className="stat-number">
      {target}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg-line" />
      <div className="stats-blob stats-blob-1" />
      <div className="stats-blob stats-blob-2" />
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="stat-glow" />
              <CountUp target={stat.number} suffix={stat.suffix} inView={inView} />
              <span className="stat-label">{stat.label}</span>
              <div className="stat-divider" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
