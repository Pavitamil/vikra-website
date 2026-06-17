import React from 'react';
import './Payloads.css';
import payloadImg1 from '../../assets/paylode-img/roviotsensor.webp';
import payloadImg2 from '../../assets/paylode-img/rovotsensor-1.webp';

export default function Payloads() {
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
                <div className="payload-img-placeholder" style={{backgroundImage: `url(${payloadImg1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="payload-img-placeholder" style={{backgroundImage: `url(${payloadImg2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              </div>
            </div>

            <div className="payload-divider"></div>

            <div className="payload-item">
              <div className="payload-text">
                <h3>Side Scan SONAR</h3>
                <p>High-resolution seabed mapping and object detection.</p>
              </div>
              <div className="payload-images">
                <div className="payload-img-placeholder" style={{backgroundImage: 'url("https://placehold.co/400x225/333/666?text=Side+Scan+1")'}}></div>
                <div className="payload-img-placeholder" style={{backgroundImage: 'url("https://placehold.co/400x225/333/666?text=Side+Scan+2")'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
