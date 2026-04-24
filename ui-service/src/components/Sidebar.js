import React from 'react';
import { Menu, Calendar, Target, MessageCircle, X } from 'lucide-react';

/**
 * Sidebar Component
 * Collapsible navigation with icons and text.
 */
function Sidebar({ isExpanded, toggleSidebar, activeView, setActiveView }) {
  const menuItems = [
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={20} /> },
    { id: 'goals', label: 'Goals', icon: <Target size={20} /> },
    { id: 'chat', label: 'Chat AI', icon: <MessageCircle size={20} /> },
  ];

  return (
    <aside 
      className={`sidebar-container ${isExpanded ? 'expanded' : 'collapsed'}`}
      style={{ width: isExpanded ? 'var(--sidebar-expanded-width)' : 'var(--sidebar-collapsed-width)' }}
    >
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Menu">
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            <div className="nav-icon-container">
              {item.icon}
            </div>
            {isExpanded && <span className="nav-label">{item.label}</span>}
            {activeView === item.id && <div className="active-indicator" />}
          </button>
        ))}
      </nav>


    </aside>
  );
}

export default Sidebar;
