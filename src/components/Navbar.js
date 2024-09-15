
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import Chatbot from './Chatbot';   

const Navbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTop, setIsTop] = useState(true); // State to track if navbar is at the top

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { // Adjust this value as needed based on your design
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openDashboard = () => {
    window.location.href = "https://tejasvi.gov.in/staging/embed/nTiHUAhdzNlgmijpoKyuomskUygZIwLhARhwahfPukUYIfmzlNMVxXOoUfunhPCxkUYNivtihiXJoKFkhkqNGobHNK ";
  };

 

  return (
    <div>
      <nav  style={styles.navbar} className={`navbar ${isTop ? 'navbar-transparent' : 'navbar-colored'}`}>
        <div className="logo" style={styles.logo}>
          Veda Vibes
        </div>
        <ul className="nav-links" style={styles.navLinks}>
          <li><Link to="home" smooth={true} duration={500} style={styles.link}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} style={styles.link}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500} style={styles.link}>Services</Link></li>
          <li><Link to="videoSection" smooth={true} duration={500} style={styles.link}>Video Section</Link></li>
          <li><Link to="analysis" smooth={true} duration={500} style={styles.link}>Analysis</Link></li>
          <li><Link to="contactUs" smooth={true} duration={500} style={styles.link}>Contact Us</Link></li>
          
          <li><a href="#" onClick={openDashboard} style={styles.link}>Dashboard</a></li>
        </ul>
      </nav>

      
      <Chatbot />
    </div>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};