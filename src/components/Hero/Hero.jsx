import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import './Hero.css'

const slides = [
  {
    id: 0,
    image: '/hero-wavebot.png',
    title: 'Autonomous Surface Excellence with WAVEBOT',
    description:
      'WAVEBOT, our USV, delivers seamless surface navigation and data collection, ideal for bathymetric surveys, environmental monitoring, and surface inspections with unmatched precision..',
    cta: 'Get Started',
    ctaLink: '#featured-services',
  },
  {
    id: 1,
    image: '/hero-ucam.png',
    title: 'Clarity Below the Surface with Underwater Cameras & Lights',
    description:
      'Our high-definition underwater cameras and powerful lighting systems ensure crystal-clear visibility and inspection capabilities, even in the darkest and murkiest waters, ideal for marine research and industrial applications.',
    cta: 'Get Started',
    ctaLink: '#featured-services',
  },
  {
    id: 2,
    image: '/hero-rovito.png',
    title: 'Precision Underwater Inspection with ROVITO',
    description:
      'Our advanced ROV, ROVITO, is designed for high-resolution underwater inspections, capable of reaching extreme depths for detailed monitoring and data collection in challenging environments.',
    cta: 'Get Started',
    ctaLink: '#featured-services',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const startTimer = () => {
    stopTimer()
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
      setDirection(1)
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [])

  const goNext = () => {
    setCurrent(prev => (prev + 1) % slides.length)
    setDirection(1)
    startTimer()
  }

  const goPrev = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
    setDirection(-1)
    startTimer()
  }

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    startTimer()
  }

  const slide = slides[current]

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, scale: 0.95 }),
    center: { opacity: 1, scale: 1 },
    exit: (dir) => ({ opacity: 0, scale: 1.05 }),
  }

  return (
    <section id="hero" className="hero-section">
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          className="hero-bg"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Bottom waves */}
      <div className="hero-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255, 255, 255, 0.3)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255, 0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255, 255, 255, 0.7)" />
            <use href="#gentle-wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="container hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            className="hero-text"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-description">{slide.description}</p>
            <div className="hero-actions">
              <a href={slide.ctaLink} className="btn-get-started">
                {slide.cta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Arrows (Centered Vertically at screen borders) */}
      <button className="hero-arrow-edge left" onClick={goPrev} aria-label="Previous slide">
        <ChevronLeft size={36} />
      </button>
      <button className="hero-arrow-edge right" onClick={goNext} aria-label="Next slide">
        <ChevronRight size={36} />
      </button>

      {/* Indicators / Dashes at bottom center */}
      <div className="hero-dashes-container">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero-dash ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero-progress">
        <motion.div
          className="hero-progress-bar"
          key={`progress-${current}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: 'linear' }}
        />
      </div>
    </section>
  )
}
