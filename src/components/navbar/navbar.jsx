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
      <button className="link" onClick={() => scrollToSection('presentation')}>
        Présentation
      </button>
      <button className="link" onClick={() => scrollToSection('timeline')}>
        TimeLine
      </button>
      <button className="link" onClick={() => scrollToSection('certif')}>
        Certifications
      </button>
      <button className="link" onClick={() => scrollToSection('veille')}>
        Veille Informatique
      </button>
      <button className="link" onClick={() => scrollToSection('avenir')}>
        Poursuite d'étude
      </button>
      <button className="link" onClick={() => scrollToSection('contact')}>
        Contact
      </button>
    </div>
  );
}

