import React from 'react';
import { Link } from 'react-router-dom';
import './UseCases.css';

const cases = [
    {
        title: 'The founder who should be posting',
        problem: 'You know your personal profile is where the deals actually start. You also have a company to run, and the last post is from four months ago.',
        answer: 'Posts in your voice, from your profile, on a schedule you set once. You prompt them in Slack between meetings.',
        who: 'Founders, partners, anyone selling on their own name'
    },
    {
        title: 'The company page nobody owns',
        problem: 'The page exists. Someone posts to it when they remember, which is rarely, and it shows to every prospect who checks.',
        answer: 'A steady stream of posts, carousels and articles from the company page.',
        who: 'Companies where marketing is one person, or nobody'
    },
    {
        title: 'The agency that has to look busy',
        problem: 'Clients judge you by your own marketing. Yours is always the work that slips when billable work arrives.',
        answer: 'Your own presence runs itself while your team stays on client work. Personal profiles and the company page, together.',
        who: 'Agencies, consultancies, professional services'
    },
    {
        title: 'The content already sitting in a folder',
        problem: 'A whitepaper nobody read, a webinar recording sitting in a shared drive, a deck from a conference. Good material, seen once.',
        answer: 'Drop the PDF or send the recording link. It becomes weeks of posts drawn from what is actually in it.',
        who: 'Teams that produce research, talks or long-form content'
    },
    {
        title: 'The team that cannot say if it worked',
        problem: 'You are publishing. Whether any of it is doing anything is a question nobody can answer without an afternoon in analytics.',
        answer: 'A weekly and monthly PDF that says what went out, how it did, and what it means, ready to action.',
        who: 'Marketing leads reporting upward, agencies reporting to clients'
    },
    {
        title: 'The process that is not LinkedIn at all',
        problem: 'Something repetitive your team does every week that needs judgment, so it never got automated.',
        answer: 'Tell us what it is. If it can be a workflow, we build it for you and it runs on the same engine.',
        who: 'Operations teams with a recurring job nobody wants'
    }
];

const UseCases: React.FC = () => {
    return (
        <div className="use-cases-page wa-page">
            <header className="wa-hero">
                <div className="wa-measure">
                    <h1>Who this is for</h1>
                    <p className="wa-lead">
                        Every company below had the same problem: they knew what they should
                        be publishing, and it kept not happening.
                    </p>
                    <div className="wa-actions">
                        <Link to="/contact" className="wa-btn">Talk to us</Link>
                        <Link to="/product" className="wa-btn wa-btn-quiet">See what you get</Link>
                    </div>
                </div>
            </header>

            <section className="wa-section">
                <div className="uc-grid">
                    {cases.map(({ title, problem, answer, who }) => (
                        <article className="uc-case" key={title}>
                            <h2>{title}</h2>
                            <p className="uc-problem">{problem}</p>
                            <p className="uc-answer">{answer}</p>
                            <p className="uc-who">{who}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="wa-cta">
                <div className="wa-measure">
                    <h2>None of these quite you?</h2>
                    <p>
                        Tell us what your company wants to be known for and what keeps
                        getting in the way. We will tell you honestly whether we can help.
                    </p>
                    <Link to="/contact" className="wa-btn">Start a conversation</Link>
                </div>
            </section>
        </div>
    );
};

export default UseCases;
