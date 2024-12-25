


import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets1/logo.png';
import bell from '../../assets1/bell.png';
import search from '../../assets1/search_icon.png';
import profile from '../../assets1/img.png';
import caret from '../../assets1/caret_img.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Hide dropdown when clicking outside (optional improvement)
  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <img
          src={logo}
          className="navbar-logo"
          alt="Netflix Logo"
        />
        <ul className="navbar-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <img
          src={search}
          alt="Search Icon"
          className="navbar-icon"
        />
        <p className="navbar-text">Children</p>
        <img
          src={bell}
          alt="Bell Icon"
          className="navbar-icon"
        />
        <div className="navbar-profile" onClick={toggleDropdown}>
          <img
            src={profile}
            alt="Profile Icon"
            className="navbar-icon"
          />
          <img
            src={caret}
            alt="Caret Icon"
            className="navbar-caret"
          />
          {dropdownVisible && (
            <div className="dropdown" onClick={hideDropdown}>
              <p>Sign Out of page</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
