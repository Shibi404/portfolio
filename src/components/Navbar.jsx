import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
          <li className={`nav-links-item ${location.pathname === '/' ? 'active-link' : ''}`}>
            <Link to="/" onClick={() => closeMenuAndNavigate('/')}>Home</Link>
          </li>

          <li className={`nav-links-item ${location.pathname === '/about' ? 'active-link' : ''}`}>
            <Link to="/about" onClick={() => closeMenuAndNavigate('/about')}>About</Link>
          </li>

          <li className={`nav-links-item ${location.pathname === '/projects' ? 'active-link' : ''}`}>
            <Link to="/projects" onClick={() => closeMenuAndNavigate('/projects')}>Projects</Link>
          </li>

          <li className={`nav-links-item ${location.pathname === '/skills' ? 'active-link' : ''}`}>
            <Link to="/skills" onClick={() => closeMenuAndNavigate('/skills')}>Skills</Link>
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
