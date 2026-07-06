import './AboutServices.css'
import salesIcon from '../../assets/logo/sales.png'

export default function AboutServices() {
  const services = [
    {
      title: 'Product Sales',
      icon: salesIcon,
      text: 'Advanced ocean robotics solutions and systems designed for real-world underwater challenges.'
    },
    {
      title: 'Rental Solutions',
      icon: '/icon_rental.png',
      text: 'Flexible rental options for ROVs, ASVs, and accessories to support your short-term or project-specific needs.'
    },
    {
      title: 'Support & Services',
      icon: '/icon_support_services_colored.png',
      text: 'End-to-end support including training, maintenance, system integration, and mission assistance.'
    },
    {
      title: 'Research & Innovation',
      icon: '/icon_research.png',
      text: "Pioneering R&D in ocean robotics to drive innovation and solve tomorrow's underwater challenges."
    }
  ]

  return (
    <section className="about-services-section">
      <div className="container">
        <div className="about-services-grid">
          {services.map((service, index) => (
            <div key={index} className="about-service-card">
              <div className="about-service-icon">
                <img src={service.icon} alt={service.title} className="about-service-img" />
              </div>
              <h3 className="about-service-title">
                {service.title}
              </h3>
              <p className="about-service-text">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
