import React from 'react';
import '../../styles/CalendarView.css';

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <h2>October 2021</h2>
      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
          <div key={idx} className="calendar-header">{day}</div>
        ))}

        {[...Array(31)].map((_, i) => (
          <div key={i} className={`calendar-date ${i === 25 ? 'active' : ''}`}>
            {i + 1}
            {[25, 26, 29, 30].includes(i + 1) && (
              <div className="calendar-appointment">09:00</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
