import salesIcon from '../../assets/logo/sales.png'
import rentalIcon from '../../assets/logo/rental.png'
import serviceIcon from '../../assets/logo/service.png'
import innovationIcon from '../../assets/logo/innovation.png'
import './FeaturedServices.css'

const services = [
  {
    icon: salesIcon,
    title: 'Product Sales',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    isBlue: false,
  },
  {
    icon: rentalIcon,
    title: 'Rental',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    isBlue: false,
  },
  {
    icon: serviceIcon,
    title: 'Services',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
    isBlue: true,
  },
  {
    icon: innovationIcon,
    title: 'Research',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
    isBlue: false,
  },
]

export default function FeaturedServices() {
  return (
    <section id="featured-services" className="featured-services-section">
      <div className="container">
        <div className="featured-grid-minimal">
          {services.map((s, idx) => (
            <div key={idx} className="featured-item-minimal">
              <div className="featured-icon-img-wrap">
                <img src={s.icon} alt={s.title} className="featured-icon-img" />
              </div>
              <h3 className={`featured-title-minimal ${s.isBlue ? 'blue-title' : ''}`}>
                {s.title}
              </h3>
              <p className="featured-desc-minimal">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
