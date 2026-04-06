import React from 'react';

/**
 * Header Component
 * Displays the persistent top bar with the application name.
 */
function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title">Life <span className="gradient-text">Scheduler</span></h1>
    </header>
  );
}

export default Header;
