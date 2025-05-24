import React from 'react';
import { healthIndicators } from '../../data/healthData';
import '../../styles/HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthIndicators.map((item, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <span className="icon">{item.icon}</span>
            <h3>{item.label}</h3>
          </div>
          <p className="date">Date: {item.date}</p>
          <div className={`status-bar ${item.statusColor}`}></div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
