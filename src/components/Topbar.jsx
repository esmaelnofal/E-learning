import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      {}
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Search resources, users, or courses..." 
          className="search-input"
        />
      </div>

      {}
      <div className="topbar-right">
        <nav className="topbar-nav">
          <span className="nav-link">My Library</span>
          <span className="nav-link">Schedule</span>
          <span className="nav-link">Community</span>
        </nav>
        
        <button className="join-btn">Join Session</button>
        
        <div className="topbar-icons">
          <span className="icon-bell">🔔</span>
          <span className="icon-theme">🌙</span>
          {}
          <div className="profile-avatar">
            <span className="avatar-letter">M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;