import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowLeft, Mail } from 'lucide-react'
import PageHero from '../components/PageHero/PageHero'
import { getProductBySlug } from '../data/productsData'
import './ProductDetailPage.css'
import Payloads from '../components/Payloads/Payloads'


export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  // If product not found, redirect to /products
  if (!product) return <Navigate to="/products" replace />

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.tagline}
        eyebrow={product.badge.toUpperCase()}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: product.name },
        ]}
        videoBg={product.image}
        videoSlug={product.slug}
      />

      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">

            {/* ============================
                LEFT — Image + Applications
               ============================ */}
            <motion.div
              className="product-detail-media"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Main Product Image */}
              <div className="product-detail-img-wrap">
                <span className="product-detail-img-badge">{product.badge}</span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-detail-img"
                />
              </div>

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="product-detail-applications">
                  <h4>Key Applications</h4>
                  <div className="product-detail-app-list">
                    {product.applications.map((app) => (
                      <div key={app} className="product-detail-app-tag">
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* ============================
                RIGHT — Info, Features, Specs
               ============================ */}
            <motion.div
              className="product-detail-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              {/* Header */}
              <div className="product-detail-header">
                <span className={`product-detail-badge ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <h2 className="product-detail-name">{product.name}</h2>
                <div className="product-detail-underline" />
                <p className="product-detail-tagline">{product.tagline}</p>
              </div>

              {/* Overview */}
              <div className="product-detail-overview">
                <h3>Product Overview</h3>
                {product.overview
                  ? product.overview.map((para, i) => <p key={i}>{para}</p>)
                  : <p>{product.description}</p>
                }
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="product-detail-features-wrap">
                  <h3>Key Features</h3>
                  <ul className="product-detail-features-list">
                    {product.features.map((feat) => (
                      <li key={feat} className="product-detail-feature-item">
                        <span className="feature-check">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Technical Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div className="product-detail-specs-wrap">
                  <h3>Technical Specifications</h3>
                  <div className="product-detail-spec-list">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="product-detail-spec-row">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="product-detail-cta">
                <Link to="/contact" className="btn-primary">
                  <Mail size={16} />
                  Enquire About This Product
                </Link>
                <Link to="/products" className="btn-outline">
                  <ArrowLeft size={16} />
                  All Products
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    
      <Payloads /></>
  )
}
