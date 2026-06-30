import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* الجزء الشمال: اللوجو والوصف */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🔷</span>
            <span className="logo-text">EduSphere</span>
          </div>
          <p className="brand-description">
            Empowering learners worldwide with smart, accessible, and expert-led education. Your potential, unlocked.
          </p>
          <div className="social-icons">
            <span>🌐</span>
            <span>💬</span>
            <span>🔗</span>
          </div>
        </div>

        {/* الجزء اليمين: عواميد الروابط */}
        <div className="footer-links-grid">
          <div className="links-column">
            <h4>Platform</h4>
            <ul>
              <li><a href="#courses">Explore Courses</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* الخط السفلي الأخير */}
      <div className="footer-bottom">
        <p>&copy; 2026 EduSphere. All rights reserved.</p>
        <div className="bottom-policy-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;