// src/Header.jsx
/*import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="company-container">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className="company-name">Plaza Packaging</div>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#products">Products</a></li>
          <li className="nav-item"><a href="#location">Location</a></li>
          <li className="nav-item"><a href="#about-us">About Us</a></li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
      </nav>
      <div className={`options-menu ${menuActive ? 'active' : ''}`}>
        <div className="options-menu-item">
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className="options-menu-item">
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

*/
import {useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import './Navbar.css';


export default function Navbar(){
  const navRef=useRef();
  
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav");
  }

  return(
  <header>
    <h2>PLAZA PACKAGING</h2>
  
     <nav ref={navRef}>
     <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#products">Products</a></li>
          <li className="nav-item"><a href="#Collaborations">Collaborations</a></li>
          <li className="nav-item"><a href="#location">Location</a></li>
          <li className="nav-item"><a href="#about-us">Contacts</a></li>
        </ul>

      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes/>
      </button>
     </nav>
  

     <button className="nav-btn" onClick={showNavbar}>
      <FaBars/>
     </button>
  </header>
);
}