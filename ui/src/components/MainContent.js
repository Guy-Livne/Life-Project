import React from 'react';
import ScheduleView from './views/ScheduleView';
import GoalsManager from './views/GoalsManager';
import ChatInterface from './views/ChatInterface';

/**
 * MainContent Component
 * Swaps between different views based on activeView state.
 */
function MainContent({ activeView }) {
  const renderView = () => {
    switch (activeView) {
      case 'schedule':
        return <ScheduleView />;
      case 'goals':
        return <GoalsManager />;
      case 'chat':
        return <ChatInterface />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <main className="main-content-container">
      {renderView()}
    </main>
  );
}

export default MainContent;
