import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const deliverables = [
    {
        term: 'A command your team already knows',
        detail: 'One Slack command, plain English. "Post three times this week about the new release." Nobody learns a dashboard, nobody gets a login, nobody is trained.'
    },
    {
        term: 'Writing that sounds like you',
        detail: 'Posts, carousels and articles written in your company\'s voice, built from your business, your audience and what your own account responds to.'
    },
    {
        term: 'An image for every post',
        detail: 'Made to match what that specific post says, not pulled from a stock library everyone else is using.'
    },
    {
        term: 'Published where you want it',
        detail: 'Personal profiles, company pages, or both at once. Your days, your times, your timezone.'
    },
    {
        term: 'Your own words when you want them',
        detail: 'Hand it the exact text and it publishes the exact text, punctuation included. Nothing gets rewritten behind your back.'
    },
    {
        term: 'A report you could hand to a client',
        detail: 'A weekly and monthly PDF, as if it were prepared by your Community Manager.'
    }
];

const control = [
    {
        term: 'See what is coming',
        detail: 'Ask what is scheduled and you get the list, with dates and times.'
    },
    {
        term: 'Change your mind',
        detail: 'Move a post to another day, rewrite one before it goes out, or cancel it. All from the same Slack thread.'
    },
    {
        term: 'Pause everything',
        detail: 'Quiet week, company news, anything. Pause the campaign and resume it when you are ready. Nothing is lost while it waits.'
    },
    {
        term: 'Publish right now',
        detail: 'Something time-sensitive? Skip the schedule and send it immediately.'
    }
];

const sources = [
    {
        term: 'A document',
        detail: 'Drop a PDF into Slack: a report, a whitepaper, a deck. The content comes from what is actually in it.'
    },
    {
        term: 'A video',
        detail: 'A webinar recording, a talk, an interview. Send the link and the ideas in it become posts.'
    },
    {
        term: 'What you already know',
        detail: 'Your services, your positioning, your audience. Told once during setup, used every time after.'
    }
];

const Product: React.FC = () => {
    return (
        <div className="product-page wa-page">
            <header className="wa-hero">
                <div className="wa-measure">
                    <h1>Your LinkedIn presence, handled.</h1>
                    <p className="wa-lead">
                        World Aigent writes, illustrates, schedules, publishes and reports on
                        your company's LinkedIn, from one sentence in Slack. Here is exactly
                        what that means in practice.
                    </p>
                    <div className="wa-actions">
                        <Link to="/contact" className="wa-btn">Talk to us</Link>
                        <Link to="/how-it-works" className="wa-btn wa-btn-quiet">See how it works</Link>
                    </div>
                </div>
            </header>

            {/* The single most persuasive thing on the page: the division of labour. */}
            <section className="wa-section pd-split-section">
                <div className="wa-section-head">
                    <h2>What you do, and what we do</h2>
                </div>
                <div className="pd-split">
                    <div className="pd-col pd-col-you">
                        <h3>Your team</h3>
                        <ul>
                            <li>Says what the company wants to talk about</li>
                            <li>Approves anything worth a second look</li>
                        </ul>
                    </div>
                    <div className="pd-col pd-col-us">
                        <h3>World Aigent</h3>
                        <ul>
                            <li>Decides what to publish and when</li>
                            <li>Writes every post, carousel and article</li>
                            <li>Creates the image for each one</li>
                            <li>Schedules across your chosen days and times</li>
                            <li>Publishes to profiles and company pages</li>
                            <li>Measures what happened</li>
                            <li>Sends the report</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>What you get</h2>
                </div>
                <dl className="wa-defs">
                    {deliverables.map(({ term, detail }) => (
                        <div className="wa-def" key={term}>
                            <dt>{term}</dt>
                            <dd>{detail}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>You stay in control</h2>
                    <p>
                        Automatic does not mean out of your hands. Everything scheduled can
                        be changed, moved or stopped, in the same place you asked for it.
                    </p>
                </div>
                <dl className="wa-defs">
                    {control.map(({ term, detail }) => (
                        <div className="wa-def" key={term}>
                            <dt>{term}</dt>
                            <dd>{detail}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>Where the content comes from</h2>
                    <p>
                        You are not starting from a blank page every week. The material you
                        already have becomes the material it publishes.
                    </p>
                </div>
                <dl className="wa-defs">
                    {sources.map(({ term, detail }) => (
                        <div className="wa-def" key={term}>
                            <dt>{term}</dt>
                            <dd>{detail}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>How it works commercially</h2>
                </div>
                <div className="pd-commercial">
                    <div className="pd-phase">
                        <h3>Set-up</h3>
                        <p>
                            A one-time implementation. We connect your accounts, learn your
                            business and your voice, and get the first campaign running. You
                            are not handed a tool and left to configure it.
                        </p>
                    </div>
                    <div className="pd-phase">
                        <h3>Then, monthly</h3>
                        <p>
                            One fixed monthly fee covers everything after that: the
                            publishing, the reporting, and the changes you ask for along
                            the way. Not per post, not per account, not per request. The
                            invoice is the same every month.
                        </p>
                    </div>
                </div>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>Beyond LinkedIn</h2>
                    <p>
                        LinkedIn is what we run for clients today. It is not the only thing
                        the platform can run.
                    </p>
                </div>
                <div className="wa-status-single">
                    <ul className="wa-status-list wa-status-list-live">
                        <li>Email, drafted for you or sent exactly as written</li>
                        <li>Documents and video turned into usable content</li>
                        <li>Scheduled reporting, delivered without anyone asking</li>
                    </ul>
                    <p className="wa-closing-note">
                        And when your team needs something else automated, we build it for
                        you on the same engine.
                    </p>
                </div>
            </section>

            <section className="wa-cta">
                <div className="wa-measure">
                    <h2>Let's talk about your account</h2>
                    <p>
                        Tell us what your company wants to be known for. We will tell you
                        what we would publish and what it would take to run it.
                    </p>
                    <Link to="/contact" className="wa-btn">Start a conversation</Link>
                </div>
            </section>
        </div>
    );
};

export default Product;
