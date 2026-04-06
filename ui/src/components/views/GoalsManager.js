import React from 'react';
import { Target, Plus } from 'lucide-react';

function GoalsManager() {
  return (
    <div className="view-container">
      <div className="view-header">
        <Target className="view-icon" size={32} />
        <h2 className="view-title">Goals Manager</h2>
      </div>
      <div className="goals-grid">
        <div className="view-placeholder-card goal-card">
          <div className="goal-status active">In Progress</div>
          <h3>Daily Productivity</h3>
          <p>Complete all assigned tasks by 6 PM.</p>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="add-goal-card">
          <Plus size={32} />
          <span>Create New Goal</span>
        </div>
      </div>
    </div>
  );
}

export default GoalsManager;
