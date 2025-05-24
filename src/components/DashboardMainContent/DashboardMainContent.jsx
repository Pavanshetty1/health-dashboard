// src/components/DashboardMainContent/DashboardMainContent.jsx
import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="top-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
};

export default DashboardMainContent;
