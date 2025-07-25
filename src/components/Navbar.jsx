import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenuAndNavigate = (path) => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    navigate(path);
  };

  const handleToggle = () => {
    setIsOpen((prev) => {
      const nextState = !prev;
      document.body.style.overflow = nextState ? "hidden" : "auto";
      return nextState;
    });
  };

  return (
    <nav>
      <div className='nav-links-container container'>
        <div className='logo'>
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>

        <label className="hamburger">
          <input
            className="switcher"
            type="checkbox"
            onChange={handleToggle}
            checked={isOpen}
            readOnly
          />
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </label>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li className='nav-links-item'>
            <a href='' onClick={() => closeMenuAndNavigate('/')}>Home</a>
          </li>
          <li className='nav-links-item'>
            <a href='' onClick={() => closeMenuAndNavigate('/about')}>About</a>
          </li>
          <li className='nav-links-item'>
            <a href='' onClick={() => closeMenuAndNavigate('/projects')}>Project</a>
          </li>
          <li className='nav-links-item'>
            <a href='' onClick={() => closeMenuAndNavigate('/skills')}>Skills</a>
          </li>
        </ul>

        <button
          className='button'
          id='contact-btn'
          onClick={() => closeMenuAndNavigate('/contact')}
        >
          Contact
        </button>
      </div>

      {isOpen && <div className='overlay' onClick={handleToggle}></div>}
    </nav>
  );
}

export default Navbar;
