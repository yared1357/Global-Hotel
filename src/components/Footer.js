import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>GLOBAL HOTEL</h3>
                    <p>Ethiopia, Addis Ababa</p>
                    <p>Phone: +251 926-862-255</p>
                    <p>Email: yared1357@gmail.com</p>
                </div>
                <div className="footer-section">
                    <h3>QUICK LINKS</h3>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-section">
                    <h3>SERVICES FOR</h3>
                    <p>TRAINING</p>
                    <p>PARTIES</p>
                    <p>EVENTS</p>
                    <p>CEREMONIES</p>
                </div>
                <div className="footer-section">
                    <h3>FROM THE HOTEL</h3>
                    <p>We're more than hotel industries. We're</p>
                    <p>ready to give you unforgettable time.</p>
                    <p>Come and enjoy. Thanks for choosing us!</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div>
                    <p>Copyright © {currentYear} GLOBAL HOTEL Developed || by Y-Global System Solution. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;