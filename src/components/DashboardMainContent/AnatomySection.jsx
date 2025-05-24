// src/components/DashboardMainContent/AnatomySection.jsx
import React from 'react';
import { healthIndicators } from '../../data/healthData';
import '../../styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img src="/src/assets/images/humanbody.png" alt="Human Body" className="body-image" />
    
    </div>
  );
};

export default AnatomySection;
