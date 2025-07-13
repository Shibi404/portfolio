import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../images/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navLinksContainer = document.querySelector('.nav-links-container');
    if (navLinksContainer) {
    navLinksContainer.classList.toggle('active', !isMenuOpen);
    }
};

  return (
    <nav>
      <div className='nav-links-container'>
        <div className='logo'>
          <a href=""><img src={logo} alt="Logo" /></a>
        </div>

        <label class="hamburger">
            <input class="switcher" type="checkbox" onClick={toggleMenu}/>
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
        </label>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className='nav-links-item'>
            <a href="">Home</a>
          </li>
          <li className='nav-links-item'>
            <a href="">About</a>
          </li>
          <li className='nav-links-item'>
            <a href="">Project</a>
          </li>
          <li className='nav-links-item'>
            <a href="">Skills</a>
          </li>
        </ul>

        <button id='contact-btn'>
          Contact
        </button>
      </div>

      {isMenuOpen && <div className='overlay' onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;
