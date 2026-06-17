import React from 'react'
import { 
  Battery, 
  Ruler, 
  Waves, 
  Gauge, 
  Cpu, 
  Wifi, 
  Camera, 
  Lightbulb, 
  Scale, 
  Navigation, 
  Package, 
  Laptop, 
  HelpCircle,
  Zap,
  Activity,
  RotateCw,
  Eye,
  ShieldAlert,
  Server,
  Sun,
  Thermometer,
  Aperture,
  Sliders,
  CheckCircle2
} from 'lucide-react'

// Helper function to map specification label to appropriate Lucide icon
const getIconForLabel = (label) => {
  const normLabel = label.toLowerCase();
  
  if (normLabel.includes('endurance') || normLabel.includes('working hours') || normLabel.includes('hours')) {
    return Battery;
  }
  if (normLabel.includes('battery')) {
    return Zap;
  }
  if (normLabel.includes('dimension') || normLabel.includes('size') || normLabel.includes('length') || normLabel.includes('width') || normLabel.includes('height') || normLabel.includes('draft')) {
    return Ruler;
  }
  if (normLabel.includes('depth') || normLabel.includes('sea state') || normLabel.includes('waterproof') || normLabel.includes('diving')) {
    return Waves;
  }
  if (normLabel.includes('rated speed') || normLabel.includes('survey speed') || normLabel.includes('crawling speed') || normLabel.includes('speed')) {
    return Gauge;
  }
  if (normLabel.includes('thruster') || normLabel.includes('propulsion')) {
    return Activity;
  }
  if (normLabel.includes('reel') || normLabel.includes('winch') || normLabel.includes('spool')) {
    return RotateCw;
  }
  if (normLabel.includes('camera') || normLabel.includes('pixel') || normLabel.includes('fpv') || normLabel.includes('display')) {
    return Camera;
  }
  if (normLabel.includes('light') || normLabel.includes('led') || normLabel.includes('illumination')) {
    return Lightbulb;
  }
  if (normLabel.includes('lumen')) {
    return Battery;
  }
  if (normLabel.includes('temperature')) {
    return Thermometer;
  }
  if (normLabel.includes('beam') || normLabel.includes('angle')) {
    return Gauge;
  }
  if (normLabel.includes('voltage') || normLabel.includes('power') || normLabel.includes('input')) {
    return Zap;
  }
  if (normLabel.includes('control') || normLabel.includes('intensity')) {
    return Sliders;
  }
  if (normLabel.includes('weight') || normLabel.includes('portable')) {
    return Scale;
  }
  if (normLabel.includes('buoyancy')) {
    return Navigation;
  }
  if (normLabel.includes('payload') || normLabel.includes('load') || normLabel.includes('housing') || normLabel.includes('material')) {
    return Package;
  }
  if (normLabel.includes('ground control') || normLabel.includes('station') || normLabel.includes('gcs') || normLabel.includes('computer') || normLabel.includes('software') || normLabel.includes('laptop')) {
    return Laptop;
  }
  if (normLabel.includes('sonar') || normLabel.includes('sensor') || normLabel.includes('rtk')) {
    return Server;
  }
  if (normLabel.includes('avoidance')) {
    return ShieldAlert;
  }
  if (normLabel.includes('communication') || normLabel.includes('connect') || normLabel.includes('range') || normLabel.includes('mode') || normLabel.includes('cable') || normLabel.includes('tether')) {
    return Wifi;
  }
  
  return CheckCircle2;
};

export default function SpecsList({ specs }) {
  return (
    <div className="specs-highlights-list">
      {specs.map((spec, idx) => {
        const IconComponent = getIconForLabel(spec.label);
        return (
          <div className="spec-highlight-item" key={idx}>
            <div className="spec-highlight-icon-wrap" style={{ color: '#0033a0' }}>
              <IconComponent size={48} strokeWidth={2.5} />
            </div>
            <div className="spec-highlight-text-wrap">
              <h4 className="spec-highlight-title" style={{ color: '#001f3f', fontWeight: 800, fontSize: '1.3rem' }}>{spec.label}</h4>
              <p className="spec-highlight-value" style={{ fontSize: '1.05rem', color: '#4b5563' }}>{spec.value}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
