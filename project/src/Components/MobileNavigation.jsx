import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

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
        <NavLink  to="/" onClick={handleNavigation}>Home</NavLink >
        <NavLink  to="/about"  onClick={handleNavigation}>About us</NavLink >
        <NavLink  to="/category"  onClick={handleNavigation}>Category</NavLink >
        <NavLink  to="/provider"  onClick={handleNavigation}>Provider</NavLink >
        <NavLink  to="/contactus" onClick={handleNavigation}>Contact us</NavLink >
      </ul>
    </nav>
  );
};

export default MobileNavigation;
