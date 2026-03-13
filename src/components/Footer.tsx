import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>World Aigent</h3>
                    <p>AI Workflow SaaS Platform built on Google Cloud</p>
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/company/world-aigent/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.24 8h4.48v14H.24V8zm7.76 0h4.3v1.92h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.86V22h-4.48v-6.62c0-1.58-.02-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V22H8V8z" />
                            </svg>
                        </a>
                        <a
                            href="https://x.com/WorldAigent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.9 2H22l-6.6 7.6L23 22h-6.8l-5.3-7-6.1 7H2l7.1-8.1L1 2h7l4.8 6.3L18.9 2z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:contact@worldaigent.com"
                            className="social-link"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v.01L12 13 2 6.01V6zm0 2.24l9.4 6.11c.37.24.83.24 1.2 0L22 8.24V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.24z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <div className="quick-links">
                        <Link to="/product" className="quick-link">Product</Link>
                        <Link to="/how-it-works" className="quick-link">How It Works</Link>
                        <Link to="/use-cases" className="quick-link">Use Cases</Link>
                        <Link to="/team" className="quick-link">Team</Link>
                        <Link to="/contact" className="quick-link">Contact</Link>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Contact Information</h3>
                    <div className="contact-info">
                        <a href="mailto:contact@worldaigent.com" className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>contact@worldaigent.com</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 World Aigent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;