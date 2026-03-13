import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about-hero">
                <div className="container">
                    <h1>About World Aigent</h1>
                </div>
            </div>

            <div className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                World Aigent focuses on making advanced AI automation accessible to companies by providing a flexible platform where intelligent agents can work together to support decision-making, data processing, and operational tasks.
                            </p>
                            <p>
                                Instead of using isolated AI tools, World Aigent allows businesses to coordinate multiple AI agents inside organized workflows that can automate complex operations, integrate with existing tools, and scale reliably.
                            </p>
                        </div>
                        <div className="mission-image">
                            <div className="image-placeholder">
                                <i className="fas fa-brain"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="values-section">
                <div className="container">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Innovation</h3>
                            <p>We constantly push the boundaries of what's possible with AI automation.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Collaboration</h3>
                            <p>We believe in the power of AI agents working together to achieve more.</p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Reliability</h3>
                            <p>Our platform is built to deliver consistent, dependable results.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-section">
                <div className="container">
                    <h2>Our Team</h2>
                    <p className="subtitle">
                        We are AI experts and business strategists dedicated to revolutionizing how businesses leverage artificial intelligence.
                    </p>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src="https://i.imgur.com/SXzg9Ss.jpeg" alt="Nicolas Zfr" className="member-image" />
                            </div>
                            <h3>Nicolas Zamudio Franco</h3>
                            <p>Founder & CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;