import React from 'react';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => {
  const data = [40, 100, 60, 30, 90, 70, 50]; // mock heights in px

  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <p className="subtitle">3 appointments on this week</p>
      <div className="bar-chart">
        {data.map((height, idx) => (
          <div
            key={idx}
            className="bar"
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
