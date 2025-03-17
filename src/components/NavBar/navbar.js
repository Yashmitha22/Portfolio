import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">

        </div>
        <button className="desktopMenuBtn">
            <img src=" alt=" className="desktopMenuImg"/>Contact me</button>
        </nav>
    )
}

export default Navbar