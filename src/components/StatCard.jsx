import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, percentage, isPositive, subtitle, color }) => {
  return (
    <div className="stat-card">
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-dot" style={{ backgroundColor: color }}></span>
      </div>
      
      <div className="card-body">
        <h3 className="card-value">{value}</h3>
      </div>
      
      <div className="card-footer">
        {percentage && (
          <span className={`card-percentage ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '↗' : '⚠️'} {percentage}
          </span>
        )}
        <span className="card-subtitle"> {subtitle}</span>
      </div>
    </div>
  );
};

export default StatCard;