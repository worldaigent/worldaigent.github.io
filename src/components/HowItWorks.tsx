import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';

/* A genuine sequence, which is the only thing that justifies numbering it. */
const onboarding = [
    {
        title: 'A conversation',
        detail: 'You tell us what your company does, who you want to reach, and what you want to be known for.'
    },
    {
        title: 'We set it up',
        detail: 'We connect your LinkedIn accounts, add the command to your Slack, and load what we learned about your business. You do not configure anything.'
    },
    {
        title: 'Your first campaign',
        detail: 'Your team asks for it, and sees every post before any of them publish. Change the voice, the timing, the subjects. Nothing goes out until you are happy with it.'
    }
];

const rhythm = [
    {
        term: 'You ask',
        detail: 'Someone on your team types a sentence in Slack. A launch, an announcement, a theme for the month, or nothing at all if the plan is already set.'
    },
    {
        term: 'You see it first',
        detail: 'The posts come back to the same Slack channel before anything is published. Approve them, change one, or drop one.'
    },
    {
        term: 'It publishes',
        detail: 'On your days, at your times, to the accounts you chose. Nobody has to be at a desk for it to happen.'
    },
    {
        term: 'You hear about it',
        detail: 'A message when a post goes out, and a PDF at the end of the week and the month telling you how the campaign did. Then you ask for the next one.'
    }
];

const asks = [
    'Make a campaign of 5 posts for the company page about our new pricing',
    'Write 3 posts from my personal profile about what we learned this quarter',
    'Make a carousel about how we cut approvals from days to hours',
    'Write 2 posts based on this PDF',
    'Create a post with this text: \u2026',
    'Reschedule [id] to Friday at 10am',
    'Change [id] to make the opening stronger'
];

const HowItWorks: React.FC = () => {
    return (
        <div className="how-it-works-page wa-page">
            <header className="wa-hero">
                <div className="wa-measure">
                    <h1>How it works</h1>
                    <p className="wa-lead">
                        There is no software to install, no dashboard to learn, and no
                        account for anyone to forget the password to. There is a Slack
                        channel, and things happen in it.
                    </p>
                    <div className="wa-actions">
                        <Link to="/contact" className="wa-btn">Talk to us</Link>
                        <Link to="/product" className="wa-btn wa-btn-quiet">See what you get</Link>
                    </div>
                </div>
            </header>

            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>Getting started</h2>
                    <p>From first conversation to first published post, usually inside a week.</p>
                </div>
                <ol className="hiw-steps">
                    {onboarding.map(({ title, detail }, i) => (
                        <li className="hiw-step" key={title}>
                            <span className="hiw-step-n" aria-hidden="true">{i + 1}</span>
                            <div className="hiw-step-body">
                                <h3>{title}</h3>
                                <p>{detail}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>What a month looks like</h2>
                    <p>
                        A campaign has a beginning and an end. You ask for one, it runs to
                        the last post, and the month after that looks much the same.
                    </p>
                </div>
                <dl className="wa-defs">
                    {rhythm.map(({ term, detail }) => (
                        <div className="wa-def" key={term}>
                            <dt>{term}</dt>
                            <dd>{detail}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* The most convincing thing here is simply showing the vocabulary:
                there isn't one, you just write what you want. */}
            <section className="wa-section">
                <div className="wa-section-head">
                    <h2>What you would actually type</h2>
                    <p>
                        Plain English. No menu to hunt through and no syntax to get wrong.
                    </p>
                </div>
                <div className="hiw-asks">
                    <ul>
                        {asks.map((ask) => (
                            <li key={ask}>{ask}</li>
                        ))}
                    </ul>
                    <p className="hiw-asks-note">
                        If a request is clear, it runs. If it is not, it asks you rather
                        than guessing.
                    </p>
                </div>
            </section>

            <section className="wa-section wa-section-tinted">
                <div className="wa-section-head">
                    <h2>Who needs to be involved</h2>
                </div>
                <dl className="wa-defs">
                    <div className="wa-def">
                        <dt>Marketing</dt>
                        <dd>Says what the company wants to talk about, and approves what comes back. That is the whole job.</dd>
                    </div>
                    <div className="wa-def">
                        <dt>Leadership</dt>
                        <dd>Reads the monthly report. That is where the answer to "is this working" lives.</dd>
                    </div>
                </dl>
            </section>

            <section className="wa-cta">
                <div className="wa-measure">
                    <h2>See it on your own account</h2>
                    <p>
                        The fastest way to understand it is to watch it write for your
                        company rather than read about it writing for someone else's.
                    </p>
                    <Link to="/contact" className="wa-btn">Start a conversation</Link>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
