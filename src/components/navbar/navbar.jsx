import React, { useState, useRef } from 'react';
import './navbar.css';

export default function NavBar({heroBannerHeight}) {
  const [toggle, setToggle] = useState(false);

  const navbarRef = useRef(null);

  const changeBackground = () =>{
    if(window.scrollY >= heroBannerHeight-navbarRef.current.clientHeight*2 ){
      setToggle(true)
    }else{
      setToggle(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={`navbar ${toggle ? 'black-bg' : ''}`} ref={navbarRef}>
      <ul>
        <li>
          <a className="link" href="">
            TimeLine
          </a>
        </li>
      </ul>
    </div>
  );
}
