import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h2 className="logo-text">EduSphere</h2>
        <span className="subtitle">Enterprise Learning</span>
      </div>

      <ul className="nav-menu">
        <li className="nav-item active">
          <span className="icon">📊</span> Dashboard
        </li>
        <li className="nav-item">
          <span className="icon">📚</span> Courses
        </li>
        <li className="nav-item">
          <span className="icon">🤖</span> AI Tutor
        </li>
        <li className="nav-item">
          <span className="icon">👤</span> Users
        </li>
        <li className="nav-item">
          <span className="icon">⚙️</span> Admin
        </li>
      </ul>

      <div className="sidebar-footer">
        <button className="upgrade-btn">Upgrade Plan</button>
        <div className="footer-links">
          <p>⚙️ Settings</p>
          <p>❓ Support</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;