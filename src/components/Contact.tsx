import React, { useState } from 'react';
import './Contact.css';

const EMAIL = 'contact@worldaigent.com';

/* Web3Forms access key, read from .env.local (gitignored) at BUILD time.
   Keeping it out of the repo is housekeeping, not secrecy: CRA inlines
   REACT_APP_* into the bundle, so the key is readable by anyone who opens
   devtools on the live site. That is inherent to a static site and is fine
   here, because the key only authorises sending email to our own inbox. It
   grants no read access and no account access.
   Set it in .env.local as REACT_APP_WEB3FORMS_KEY=...
   If it is missing at build time the form falls back to opening the visitor's
   mail client, so the page never has a dead button. */
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (status !== 'sending') setStatus('idle');
    };

    const openMailClient = () => {
        const subject = `Website enquiry from ${formData.company || formData.name}`;
        const body = [
            `Name: ${formData.name}`,
            `Company: ${formData.company}`,
            `Email: ${formData.email}`,
            '',
            formData.message
        ].join('\n');
        window.location.href =
            `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // No key configured yet: hand the message to the visitor's mail client
        // rather than pretending to send it.
        if (!WEB3FORMS_KEY) {
            openMailClient();
            setStatus('sent');
            return;
        }

        // Honeypot. A real person never sees this field, so anything in it is a bot.
        const botField = (e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement);
        if (botField?.checked) return;

        setStatus('sending');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `Website enquiry from ${formData.company || formData.name}`,
                    from_name: 'World Aigent website',
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    message: formData.message
                })
            });
            const data = await res.json();
            if (data.success) {
                setStatus('sent');
                setFormData({ name: '', company: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const statusMessage = {
        idle: '',
        sending: 'Sending your message.',
        sent: WEB3FORMS_KEY
            ? 'Thank you. Your message is on its way and we will reply the same day.'
            : `Your email app should have opened with the message ready to send. If nothing happened, write to us at ${EMAIL}.`,
        error: `That did not go through. Please write to us at ${EMAIL} instead.`
    }[status];

    return (
        <div className="contact-page wa-page">
            <header className="wa-hero">
                <div className="wa-measure">
                    <h1>Get in touch</h1>
                    <p className="wa-lead">
                        Tell us what your company wants to be known for and what keeps
                        getting in the way. We answer the same day.
                    </p>
                </div>
            </header>

            <section className="wa-section">
                <div className="ct-layout">
                    <div className="ct-aside">
                        <h2>Email us directly</h2>
                        <a className="ct-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <p className="ct-note">
                            If you would rather just write to us, this is the same inbox the
                            form goes to.
                        </p>
                    </div>

                    <form className="ct-form" onSubmit={handleSubmit} noValidate={false}>
                        <h2>Send a message</h2>

                        <div className="ct-field">
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text" id="name" name="name" autoComplete="name"
                                value={formData.name} onChange={handleChange} required
                            />
                        </div>

                        <div className="ct-field">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text" id="company" name="company" autoComplete="organization"
                                value={formData.company} onChange={handleChange} required
                            />
                        </div>

                        <div className="ct-field">
                            <label htmlFor="email">Work email</label>
                            <input
                                type="email" id="email" name="email" autoComplete="email"
                                value={formData.email} onChange={handleChange} required
                            />
                        </div>

                        <div className="ct-field">
                            <label htmlFor="message">What would you like to automate?</label>
                            <textarea
                                id="message" name="message" rows={5}
                                value={formData.message} onChange={handleChange} required
                            />
                        </div>

                        {/* Honeypot: hidden from people and from screen readers, visible to bots. */}
                        <label className="ct-honeypot" aria-hidden="true">
                            Leave this field empty
                            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
                        </label>

                        <button type="submit" className="wa-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending' : 'Send message'}
                        </button>

                        <p className="ct-status" role="status" aria-live="polite">
                            {statusMessage}
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
