import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage nav visibility

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the nav when a link is clicked
    };

    return (
        <header className="header">
            <h1 className="logo">Global Hotel</h1>
            <div className="search-container">
                <input type="text" className="search" placeholder="Search..." />
                <i className="fas fa-search search-icon"></i>
            </div>
            <button className="toggle-button" onClick={toggleNav}>
                &#9776; {/* Hamburger icon */}
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/services" onClick={handleLinkClick}>Services</Link>
                <Link to="/news" onClick={handleLinkClick}>News</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                <Link to="/signup" className='border-link' onClick={handleLinkClick}>Sign Up</Link>
                <Link to="/login" className='border-link' onClick={handleLinkClick}>Login</Link>
            </nav>
        </header>
    );
};

export default Header;