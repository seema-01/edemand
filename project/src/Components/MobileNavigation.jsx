import React, { useState } from 'react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (event) => {
    // Handle navigation logic
    setIsOpen(false);
  };

  return (
    <nav className={`slide-navigation ${isOpen ? 'open' : ''}`}>
      <div className="burger-menu" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li><a href="/" onClick={handleNavigation}>Home</a></li>
        <li><a href="/about" onClick={handleNavigation}>About us</a></li>
        <li><a href="/contact" onClick={handleNavigation}>Category</a></li>
        <li><a href="/contact" onClick={handleNavigation}>Provider</a></li>
        <li><a href="/contact" onClick={handleNavigation}>Contact us</a></li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
