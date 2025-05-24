import React from 'react';
import '../../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-card">
      <div className="card-title">
        {icon && <span className="card-icon">{icon}</span>}
        {title}
      </div>
      <div className="card-time">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
