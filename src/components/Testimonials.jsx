import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"The AI tutor feature on EduSphere is game-changing. It identified my weak points in React and provided custom exercises. I landed a Senior Dev role 2 months after completing the path."',
      name: 'James Doe',
      role: 'Frontend Engineer at TechCorp',
      avatar: 'JD',
      avatarBg: '#eff6ff',
      avatarColor: '#2563eb'
    },
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"I transitioned from marketing to Data Science in 6 months. The curriculum is dense but perfectly structured. The community support kept me motivated when the learning got tough."',
      name: 'Alice Smith',
      role: 'Data Analyst',
      avatar: 'AS',
      avatarBg: '#ecfdf5',
      avatarColor: '#10b981'
    },
    {
      stars: '⭐⭐⭐⭐⭐',
      text: '"The UI/UX design course is the best on the market. It doesn\'t just teach tools; it teaches systematic thinking. Worth every penny."',
      name: 'Marcus King',
      role: 'Product Designer',
      avatar: 'MK',
      avatarBg: '#f8fafc',
      avatarColor: '#64748b'
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Don't just take our word for it</h2>
      
      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{review.stars}</div>
            <p className="review-text">{review.text}</p>
            
            <div className="user-profile">
              <div 
                className="user-avatar" 
                style={{ backgroundColor: review.avatarBg, color: review.avatarColor }}
              >
                {review.avatar}
              </div>
              <div className="user-details">
                <h4 className="profile-name">{review.name}</h4>
                <p className="profile-role">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;