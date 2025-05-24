import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '../../data/appointments';
import '../../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      {Object.entries(upcomingAppointments).map(([day, appointments], index) => (
        <div key={index} className="day-section">
          <h3 className="day-label">On {day}</h3>
          <div className="card-row">
            {appointments.map((apt, idx) => (
              <SimpleAppointmentCard key={idx} {...apt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
