// import React, { useState, useEffect } from 'react';
// import './navbar.css';
// import logo from '../../assets1/logo.png';
// import bell from '../../assets1/bell.png';
// import search from '../../assets1/search_icon.png';
// import profile from '../../assets1/img.png';
// import caret from '../../assets1/caret_img.png';

// const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setDropdownVisible((prev) => !prev);
//   };

//   // Hide dropdown when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!event.target.closest('.navbar-profile')) {
//         setDropdownVisible(false);
//       }
//     };
//     document.addEventListener('click', handleOutsideClick);

//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div className="navbar">
//       {/* Left Section */}
//       <div className="navbar-left">
//         <img src={logo} className="navbar-logo" alt="Netflix Logo" />
//         <ul className="navbar-links">
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>News & Popular</li>
//           <li>My List</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>

//       {/* Right Section */}
//       <div className="navbar-right">
//         <img src={search} alt="Search Icon" className="navbar-icon" />
//         <p className="navbar-text">Children</p>
//         <img src={bell} alt="Bell Icon" className="navbar-icon" />
//         <div className="navbar-profile" onClick={toggleDropdown}>
//           <img src={profile} alt="Profile Icon" className="navbar-icon" />
//           <img src={caret} alt="Caret Icon" className="navbar-caret" />
//           {dropdownVisible && (
//             <div className="dropdown">
//               <p onClick={() => alert('Signed out!')}>Sign Out of Page</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets1/logo.png';
import bell from '../../assets1/bell.png';
import search from '../../assets1/search_icon.png';
import profile from '../../assets1/img.png';
import caret from '../../assets1/caret_img.png';
import { logout } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="navbar">
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
            <div className="dropdown">
              <p onClick={handleLogout}>Sign Out of Netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
