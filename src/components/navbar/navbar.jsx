import React, { useState, useRef } from 'react';
import './navbar.css';

export default function NavBar({ heroBannerHeight }) {
  const [toggle, setToggle] = useState(false);

  const navbarRef = useRef(null);

  const changeBackground = () => {
    if (navbarRef.current) {
      if (window.scrollY >= heroBannerHeight - navbarRef.current.clientHeight * 2) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    }
  };

  window.addEventListener('scroll', changeBackground);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const offsetTop = section.offsetTop - offset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className={`navbar ${toggle ? 'black-bg' : ''}`} ref={navbarRef}>
      <button className="link" onClick={() => scrollToSection('timeline')}>
        TimeLine
      </button>
      <button className="link" onClick={() => scrollToSection('2022-2023')}>
        2022-2023
      </button>
      <button className="link" onClick={() => scrollToSection('2023-2024')}>
        2023-2024
      </button>
      <button className="link" onClick={() => scrollToSection('veille')}>
        ma Veille Informatique
      </button>
      <button className="link" onClick={() => scrollToSection('avenir')}>
        mon Avenir
      </button>
      <button className="link" onClick={() => scrollToSection('certif')}>
        Certifications
      </button>
      <button className="link" onClick={() => scrollToSection('contact')}>
        Contact
      </button>
    </div>
  );
}

