import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img src="https://i.imgur.com/Tg2mWwo.png" alt="World Aigent" className="logo-image" />
                        <span className="logo-text">World Aigent</span>
                    </Link>

                    <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/product" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Product
                        </Link>
                        <Link to="/how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            How It Works
                        </Link>
                        <Link to="/use-cases" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Use Cases
                        </Link>
                        <Link to="/team" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Team
                        </Link>
                        <Link to="/contact" className="nav-link nav-cta" onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </Link>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className="hamburger"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;