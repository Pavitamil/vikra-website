import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../../data/productsData'
import './Products.css'

export default function Products() {
  return (
    <section id="products" className="products-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">BUILT FOR THE OCEAN. ENGINEERED FOR EXCELLENCE.</span>
          <h2 className="section-title">
            Advanced Marine Solutions
          </h2>
        </div>

        <div className="products-grid-horizontal">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              id={p.id}
              className="product-card-horizontal glass-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link to={p.customUrl || `/products/${p.slug}`} className="product-card-link-overlay" aria-label={`View ${p.name} details`} />
              <div className="product-thumb-wrap">
                <img src={p.image} alt={p.name} className="product-thumb-img" />
              </div>
              <div className="product-info-wrap">
                <span className="product-badge-horizontal">{p.badge}</span>
                <h3 className="product-title-horizontal">
                  <Link to={p.customUrl || `/products/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className="product-desc-horizontal">{p.description}</p>
                <Link to={p.customUrl || `/products/${p.slug}`} className="product-view-details">
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
