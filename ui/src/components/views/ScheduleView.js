import React from 'react';
import { Calendar } from 'lucide-react';

function ScheduleView() {
  return (
    <div className="view-container">
      <div className="view-header">
        <Calendar className="view-icon" size={32} />
        <h2 className="view-title">Schedule</h2>
      </div>
      <div className="view-placeholder-card">
        <p>Google Schedule API Integration Placeholder</p>
        <div className="skeleton-line" style={{ width: '80%' }}></div>
        <div className="skeleton-line" style={{ width: '60%' }}></div>
        <div className="skeleton-line" style={{ width: '70%' }}></div>
      </div>
    </div>
  );
}

export default ScheduleView;
