import React from 'react';
import './ProductSpecifications.css';
import { 
  Battery, 
  Ruler, 
  Waves, 
  Gauge, 
  GaugeCircle,
  Activity, 
  Wifi, 
  Radio,
  Camera, 
  Lightbulb, 
  Scale, 
  Navigation,
  Zap
} from 'lucide-react';

export default function ProductSpecifications() {
  const specs = [
    {
      title: 'Endurance capable',
      description: 'Minimum 120 minutes of continuous operation.',
      icon: Battery
    },
    {
      title: 'Size',
      description: 'Compact dimensions of 500×400×500mm.',
      icon: Ruler
    },
    {
      title: 'Diving depth',
      description: 'Operates effectively up to 100 meters.',
      icon: Waves
    },
    {
      title: 'Rated Speed',
      description: 'Smooth and stable movement at 2 knots.',
      icon: Gauge
    },
    {
      title: 'Max Speed',
      description: 'Reaches up to 4 knots for enhanced performance.',
      icon: GaugeCircle
    },
    {
      title: 'No. of Thrusters',
      description: 'Equipped with 6 high-performance thrusters.',
      icon: Activity
    },
    {
      title: 'Communication',
      description: 'Tethered communication for reliable data transfer.',
      icon: Wifi
    },
    {
      title: 'Tether length',
      description: '150m tether with neutral buoyancy for easy handling.',
      icon: Ruler
    },
    {
      title: 'Tether',
      description: 'Spool with slipring, 150m length.',
      icon: Radio
    },
    {
      title: 'Camera',
      description: '2 Nos 2MP 1080P and Offline 4K camera.',
      icon: Camera
    },
    {
      title: 'Lights',
      description: '4 × 1500 Lumens high-intensity LED lights.',
      icon: Lightbulb
    },
    {
      title: 'Weight',
      description: 'Lightweight design weighing 9–10 Kg.',
      icon: Scale
    },
    {
      title: 'Buoyancy',
      description: 'Neutrally buoyant for stable underwater operations.',
      icon: Navigation
    },
    {
      title: 'Battery',
      description: 'High-capacity battery for extended mission time.',
      icon: Zap
    }
  ];

  return (
    <section className="product-specs-section">
      <div className="container">
        <h2 className="product-specs-heading">Product Specifications</h2>
        <div className="product-specs-grid">
          {specs.map((spec, idx) => {
            const IconComponent = spec.icon;
            return (
              <div className="product-spec-item" key={idx}>
                <div className="product-spec-icon-wrap">
                  <IconComponent size={44} strokeWidth={2.5} />
                </div>
                <div className="product-spec-text-wrap">
                  <h4 className="product-spec-title">{spec.title}</h4>
                  <p className="product-spec-value">{spec.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
