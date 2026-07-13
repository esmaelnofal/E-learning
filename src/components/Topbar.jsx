import React from 'react';
import './Topbar.css';

const Topbar = ({ toggleDarkMode, isDarkMode, onJoin }) => {
  return (
    <div className="topbar">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Search resources, users, or courses..." 
          className="search-input"
        />
      </div>

      <div className="topbar-right">
        <nav className="topbar-nav">
          <span className="nav-link">My Library</span>
          <span className="nav-link">Schedule</span>
          <span className="nav-link">Community</span>
        </nav>
        
        <button onClick={onJoin} className="join-btn">Join Session</button>
        
        <div className="topbar-icons">
          <span className="icon-bell">🔔</span>
          <button onClick={toggleDarkMode} className="icon-theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <div className="profile-avatar">
            <span className="avatar-letter">M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;