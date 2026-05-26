import client1 from '../../assets/prodcutbottom/client-1.png'
import client3 from '../../assets/prodcutbottom/client-3.png'
import client4 from '../../assets/prodcutbottom/client-4.png'
import client5 from '../../assets/prodcutbottom/client-5.png'
import client6 from '../../assets/prodcutbottom/client-6.png'
import client7 from '../../assets/prodcutbottom/client-7.png'
import client8 from '../../assets/prodcutbottom/client-8.png'
import client9 from '../../assets/prodcutbottom/client-9.png'
import waveRibbon from '../../assets/partner_wave_ribbon.png'
import './Clients.css'

const clientsList = [
  { img: client9, name: 'NIOT', shape: 'hexagon' },
  { img: client1, name: 'NIPUN', shape: 'rounded-square' },
  { img: client4, name: 'AVGC', shape: 'leaf' },
  { img: client7, name: 'NRSC', shape: 'square' },
  { img: client3, name: 'CIBA', shape: 'hexagon' },
  { img: client5, name: 'REX', shape: 'rounded-square' },
  { img: client6, name: 'CMLRE', shape: 'leaf' },
  { img: client8, name: 'ICAR', shape: 'square' },
]

// Pre-calculate sine wave Y-offsets for each of the 8 logos
// Amplitude = 55px — logos spread from -55px (top of crest) to +55px (bottom of trough)
const AMPLITUDE = 55
const waveOffsets = clientsList.map((_, idx) => {
  const angle = (idx / clientsList.length) * 2 * Math.PI
  return Math.round(Math.sin(angle) * AMPLITUDE)
})
// Result roughly: [0, -39, -55, -39, 0, 39, 55, 39]

export default function Clients() {
  return (
    <section id="clients" className="clients-section-container">
      {/* Top Header Section */}
      <div className="clients-header-area">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">--- OUR PARTNERS ---</span>
            <h2 className="section-title">Trusted By <span>Leading Organizations</span></h2>
          </div>
        </div>
      </div>

      {/* Wave Ribbon + Logos Section */}
      <div className="modern-wave-container">
        {/* The flowing wave ribbon image */}
        <div className="wave-ribbon-bg">
          <img src={waveRibbon} alt="" aria-hidden="true" className="wave-ribbon-img" />
        </div>

        {/* Logos riding the wave — each positioned at its own wave height */}
        <div className="partners-grid-wrapper">
          {clientsList.map((client, idx) => (
            <div
              key={idx}
              className="partner-item floating-item"
              style={{
                '--wave-offset': `${waveOffsets[idx]}px`,
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              <div className={`partner-shape ${client.shape}`}>
                <img src={client.img} alt={client.name} className="partner-logo-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
