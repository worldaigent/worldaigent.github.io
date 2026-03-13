import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your message! We will get back to you within 1 business day.');
        setFormData({ name: '', company: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <section className="section hero">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>
                        Ready to automate your AI workflows? Reach out to the World Aigent
                        team to discuss your use case, request access, or ask a question.
                    </p>
                </div>
            </section>

            <section className="section contact-form">
                <div className="container">
                    <div className="contact-container">
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p className="contact-description">
                                We respond right away.
                            </p>
                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <p>contact@worldaigent.com</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form-wrapper">
                            <h2>Send us a message</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Work email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;