import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to start your journey?</h2>
        <p className="cta-description">
          Join EduSphere today and get 20% off your first premium course. <br />
          No credit card required for the 7-day trial.
        </p>
        
        <div className="cta-buttons">
          <button className="btn-primary-white">Start Free Trial</button>
          <button className="btn-secondary-outline">Explore Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;