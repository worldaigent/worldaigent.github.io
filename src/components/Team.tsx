import React from 'react';
import './Team.css';

const founder = {
    name: 'Nicolás Zamudio Franco',
    role: 'Founder & CTO',
    background: 'Business administrator with a background in AI, data science, and analytics, bridging strategy and execution through hands-on experience in process automation, workflow orchestration, and data-driven solutions.',
    linkedin: 'https://www.linkedin.com/in/nicolaszfr/',
    photo: 'https://i.imgur.com/SXzg9Ss.jpeg'
};

const Team: React.FC = () => {
    return (
        <div className="team-page wa-page">
            <header className="wa-hero">
                <div className="wa-measure">
                    <h1>Built on Business Experience, for Real Operations</h1>
                    <p className="wa-lead">
                        World Aigent was founded by business professionals who lived the
                        inefficiencies they set out to solve, from auditing and operations
                        to hands-on process automation. The platform is designed from that
                        perspective: practical by default, accessible to any team, and
                        built to replace the tools that never quite went far enough.
                    </p>
                </div>
            </header>

            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>Our Founder</h2>
                </div>
                <div className="tm-founder">
                    <img
                        className="tm-photo"
                        src={founder.photo}
                        alt={`${founder.name}, ${founder.role} of World Aigent`}
                        width="240"
                        height="240"
                        loading="lazy"
                    />
                    <div className="tm-bio">
                        <h3>{founder.name}</h3>
                        <p className="tm-role">{founder.role}</p>
                        <p className="tm-background">{founder.background}</p>
                        <a
                            className="tm-link"
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
