import React from 'react';
import './PlatformHealth.css';

const PlatformHealth = () => {
  return (
    <div className="health-card">
      <h3 className="health-title">Platform Health</h3>
      
      <div className="metrics-container">
        {}
        <div className="metric-box">
          <div className="progress-circle uptime">
            <span className="circle-value">99.9%</span>
          </div>
          <span className="metric-label">Server Uptime</span>
        </div>

        {}
        <div className="metric-box">
          <div className="progress-circle latency">
            <span className="circle-value">24ms</span>
          </div>
          <span className="metric-label">Avg Latency</span>
        </div>
      </div>

      <div className="health-status-footer">
        <div className="status-indicator">
          <span className="status-dot green"></span>
          <span className="status-text">All systems operational</span>
        </div>
      </div>
    </div>
  );
};

export default PlatformHealth;