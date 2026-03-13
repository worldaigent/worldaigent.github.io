import React from 'react';
import './Team.css';

const Team = () => {
    const founder = {
        name: "Nicolás Zamudio Franco",
        role: "Founder & CTO",
        background: "Business administrator with a background in AI, data science, and analytics — bridging strategy and execution through hands-on experience in process automation, workflow orchestration, and data-driven solutions.",
        linkedin: "https://www.linkedin.com/in/nicolaszfr/"
    };

    return (
        <div className="team-page">
            <section className="section hero">
                <div className="container">
                    <h1>Built on Business Experience, for Real Operations</h1>
                    <p>
                        World Aigent was founded by business professionals who lived the inefficiencies they set out to solve — from auditing and operations to hands-on process automation. The platform is designed from that perspective: practical by default, accessible to any team, and built to replace the tools that never quite went far enough.
                    </p>
                </div>
            </section>

            <section className="section founders">
                <div className="container">
                    <h2>Our Founder</h2>
                    <div className="founder-card">
                        <div className="founder-info">
                            <h3>{founder.name}</h3>
                            <p className="role">{founder.role}</p>
                            <p className="background">{founder.background}</p>
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                LinkedIn Profile
                            </a>
                        </div>
                        <div className="founder-image">
                            <img src="https://i.imgur.com/SXzg9Ss.jpeg" alt="" className="placeholder-avatar" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;