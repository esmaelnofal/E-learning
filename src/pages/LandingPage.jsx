import React from 'react';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      {/* سكشن آراء العملاء */}
      <Testimonials />
      
      {/* سكشن البانر الأزرق */}
      <CallToAction />
      
      {/* سكشن الفوتر السفلي */}
      <Footer />
    </div>
  );
};

export default LandingPage;