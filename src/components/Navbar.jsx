import React from 'react'
import '../styles/navbar.css';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <nav>
        <div class='nav-links-container'>

            <div className='logo'>
                <a href=""><img src={logo} alt="" /></a>
            </div>

            <ul className='nav-links'>
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
    </nav>
  )
}

export default Navbar