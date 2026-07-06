import React from 'react';
import './Payloads.css';

// Default Fallback Images
import defaultImg1 from '../../assets/paylode-img/roviotsensor.webp';
import defaultImg2 from '../../assets/paylode-img/rovotsensor-1.webp';
import defaultImg3 from '../../assets/paylode-img/wavebot-pay-1.jpg';
import defaultImg4 from '../../assets/paylode-img/wavebot-pay-2.jpg';

export default function Payloads({
  imagingImages = [defaultImg1, defaultImg2],
  sideScanImages = [defaultImg3, defaultImg4]
}) {
  return (
    <section className="payloads-section">
      <div className="container">
        <div className="payloads-grid">
          {/* Left Column */}
          <div className="payloads-intro">
            <h2>Payloads</h2>
            <p>
              Enhance your ROV experience with our advanced payload systems and equipment.
            </p>
          </div>

          {/* Right Column */}
          <div className="payloads-list">
            <div className="payload-item">
              <div className="payload-text">
                <h3>Imaging SONAR</h3>
                <p>Crystal-clear underwater imagery, even in poor visibility.</p>
              </div>
              <div className="payload-images">
                <div className="payload-img-placeholder" style={{backgroundImage: `url(${imagingImages[0]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="payload-img-placeholder" style={{backgroundImage: `url(${imagingImages[1] || imagingImages[0]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              </div>
            </div>

            <div className="payload-divider"></div>

            <div className="payload-item">
              <div className="payload-text">
                <h3>Side Scan SONAR</h3>
                <p>High-resolution seabed mapping and object detection.</p>
              </div>
              <div className="payload-images">
                <div className="payload-img-placeholder" style={{backgroundImage: `url(${sideScanImages[0]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="payload-img-placeholder" style={{backgroundImage: `url(${sideScanImages[1] || sideScanImages[0]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
