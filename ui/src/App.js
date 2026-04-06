import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

/**
 * Main Application Component
 * Manages the layout state (sidebar expansion and active view selection).
 */
function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeView, setActiveView] = useState('chat'); // Default to Chat UI

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Sidebar 
          isExpanded={isSidebarExpanded} 
          toggleSidebar={toggleSidebar} 
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <MainContent activeView={activeView} />
      </div>
    </div>
  );
}

export default App;
