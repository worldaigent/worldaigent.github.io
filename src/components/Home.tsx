import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

type Slot = { time: string; format: string; state: 'published' | 'scheduled' };

const week: { day: string; slots: Slot[] }[] = [
    { day: 'Mon', slots: [{ time: '09:00', format: 'Carousel', state: 'published' }] },
    { day: 'Tue', slots: [] },
    { day: 'Wed', slots: [{ time: '11:00', format: 'Post', state: 'published' }] },
    { day: 'Thu', slots: [{ time: '09:00', format: 'Carousel', state: 'published' }] },
    { day: 'Fri', slots: [{ time: '11:00', format: 'Post', state: 'published' }] },
    { day: 'Sat', slots: [] },
    { day: 'Sun', slots: [{ time: '09:00', format: 'Post', state: 'scheduled' }] }
];

const linkedinSteps = [
    {
        term: 'Strategy',
        detail: 'Reads your business, your audience, and what your own posts actually measured, then decides what to publish and when.'
    },
    {
        term: 'Writing',
        detail: 'Posts, carousels, and articles that sound like your company, not like a tool wrote them.'
    },
    {
        term: 'Images',
        detail: 'Generated per post at publish time, matched to what that post says.'
    },
    {
        term: 'Scheduling',
        detail: 'Your days, your times, your timezone. Personal profiles and company pages, together or separately.'
    },
    {
        term: 'Publishing',
        detail: 'Posts go out on time, on their own, whether or not anyone remembers to check.'
    },
    {
        term: 'Reporting',
        detail: 'A weekly and monthly PDF, as if it were prepared by your Community Manager.'
    }
];

const platform = [
    {
        term: 'Nothing gets lost',
        detail: 'Every post, every schedule, every result stays on record. If you want to know what went out and how it did, it is there.'
    },
    {
        term: 'On your schedule',
        detail: 'Ask for something and it happens now, or set it once and let the work arrive without anyone chasing it.'
    },
    {
        term: 'Driven from chat',
        detail: 'Your team types plain English in Slack. No dashboard to learn, no new tool to adopt, no training week.'
    }
];

const Home: React.FC = () => {
    return (
        <div className="home-page wa-page">
            <header className="wa-hero">
                <div className="wa-measure">
                    <h1>
                        AI workflows that run themselves.
                        <span className="wa-h1-line">Starting with LinkedIn.</span>
                    </h1>
                    <p className="wa-lead">
                        World Aigent runs a company's entire LinkedIn presence from one
                        sentence in Slack. It is live in production today, on a platform
                        built to carry whatever we automate next.
                    </p>
                    <div className="wa-actions">
                        <Link to="/product" className="wa-btn">See the workflow</Link>
                        <Link to="/contact" className="wa-btn wa-btn-quiet">Talk to us</Link>
                    </div>
                </div>
            </header>

            {/* The product's output is a filled calendar, so the calendar is the hero image. */}
            <section className="wa-week" aria-labelledby="wa-week-caption">
                <div className="wa-week-grid">
                    {week.map(({ day, slots }) => (
                        <div className="wa-day" key={day}>
                            <div className="wa-day-name">{day}</div>
                            {slots.length === 0 ? (
                                <div className="wa-slot wa-slot-empty" aria-hidden="true" />
                            ) : (
                                slots.map((slot) => (
                                    <div className={`wa-slot wa-slot-${slot.state}`} key={slot.time}>
                                        <span className="wa-slot-time">{slot.time}</span>
                                        <span className="wa-slot-format">{slot.format}</span>
                                        <span className="wa-slot-state">
                                            {slot.state === 'published' ? 'Published' : 'Scheduled'}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
                <p className="wa-caption" id="wa-week-caption">
                    An example week. The platform chose the slots, wrote the posts,
                    generated the images, and published them.
                </p>
            </section>

            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>What the LinkedIn workflow does</h2>
                    <p>
                        You describe what you want to say. Everything below happens without
                        anyone opening LinkedIn.
                    </p>
                </div>
                <dl className="wa-defs">
                    {linkedinSteps.map(({ term, detail }) => (
                        <div className="wa-def" key={term}>
                            <dt>{term}</dt>
                            <dd>{detail}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>The platform underneath</h2>
                    <p>
                        LinkedIn is the first thing we automated for clients, not the limit
                        of what we can run. Whatever we build for you next works the same way.
                    </p>
                </div>
                <dl className="wa-defs wa-defs-split">
                    {platform.map(({ term, detail }) => (
                        <div className="wa-def" key={term}>
                            <dt>{term}</dt>
                            <dd>{detail}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>What's running today</h2>
                </div>
                <div className="wa-status-single">
                    <ul className="wa-status-list wa-status-list-live">
                        <li>LinkedIn content operations, end to end</li>
                        <li>Weekly and monthly PDF reporting</li>
                        <li>Email workflows, drafted or sent as written</li>
                        <li>Documents and video as source material</li>
                        <li>Slack as the command surface</li>
                    </ul>
                    <p className="wa-closing-note">
                        And when your team needs something else automated, we build it
                        for you on the same engine.
                    </p>
                </div>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>Where it runs</h2>
                    <p>
                        World Aigent runs on Google Cloud. Your content, your credentials
                        and your data stay inside Google's infrastructure, with the
                        security and uptime that comes with it.
                    </p>
                </div>
            </section>

            <section className="wa-cta">
                <div className="wa-measure">
                    <h2>Tell us what you would automate</h2>
                    <p>
                        If your team runs a repeatable process that needs judgment in the
                        loop, that is a workflow. We will tell you honestly whether it is
                        one we can build.
                    </p>
                    <Link to="/contact" className="wa-btn">Start a conversation</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
