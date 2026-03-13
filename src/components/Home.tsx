import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const features = [
        {
            icon: '⚡',
            title: 'On-Demand Execution',
            description: 'Trigger AI workflows via API, webhook, chatbot, or file upload — anytime.'
        },
        {
            icon: '🔄',
            title: 'Durable by Default',
            description: 'Built on Temporal. Workflows survive crashes, retries, and network failures automatically.'
        },
        {
            icon: '📊',
            title: 'Full Observability',
            description: 'Every workflow step is recorded. Inspect history, debug failures, and replay any task.'
        },
        {
            icon: '🔒',
            title: 'Isolated Per Client',
            description: 'Each client has a dedicated namespace. No data leakage. No shared state.'
        },
        {
            icon: '📅',
            title: 'Scheduled Workflows',
            description: 'Run daily reports, weekly summaries, or monthly exports on a cron schedule.'
        },
        {
            icon: '🤖',
            title: 'Conversational AI',
            description: 'WhatsApp and web chatbots that maintain session state and trigger real business actions.'
        }
    ];

    const useCases = [
        {
            title: 'Document Intelligence',
            description: 'Upload a PDF or Excel file. Get structured, cleaned data back automatically.'
        },
        {
            title: 'Automated Reporting',
            description: 'Schedule AI-generated summaries from your data, delivered on time, every time.'
        },
        {
            title: 'WhatsApp AI Assistant',
            description: 'A conversational assistant that remembers context and takes real actions in your systems.'
        },
        {
            title: 'API Integration Pipelines',
            description: 'Chain your CRM, ERP, or third-party APIs with AI decision steps in between.'
        }
    ];

    return (
        <div className="home-page">
            <section className="section hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>AI Workflows. Production-Ready. For Every Business.</h1>
                        <p>
                            Run durable, observable, and scalable AI automations on Google Cloud —
                            without building the infrastructure yourself.
                        </p>
                        <p className="hero-body">
                            World Aigent lets your team deploy AI workflows in minutes. Process
                            documents, automate reports, power conversational assistants, and
                            connect to your existing tools — all orchestrated, monitored, and
                            billed in one place.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="cta-button">Get Started</Link>
                            <Link to="/how-it-works" className="secondary-button">See How It Works</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section product-overview">
                <div className="container">
                    <h2>One Platform. Every AI Workflow.</h2>
                    <p>
                        World Aigent is a cloud-native SaaS platform that orchestrates
                        AI-powered workflows for businesses of any size. Each client runs in
                        an isolated, secure environment. You define what needs to be done —
                        we handle the orchestration, reliability, scaling, and billing.
                    </p>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section use-cases-teaser">
                <div className="container">
                    <h2>What Teams Use It For</h2>
                    <div className="use-cases-grid">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="use-case-card">
                                <h3>{useCase.title}</h3>
                                <p>{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section technology">
                <div className="container">
                    <h2>Built on Enterprise-Grade Cloud Infrastructure</h2>
                    <p>
                        World Aigent runs on Google Cloud with Vertex AI as the primary
                        AI execution layer, Temporal for workflow orchestration, and
                        LangGraph for multi-step AI pipelines. Every component is
                        containerized, auto-scaling, and production-ready from day one.
                        The platform is also accessible as an MCP server, enabling any
                        compatible AI agent to trigger and monitor workflows natively.
                    </p>
                    <div className="tech-badges">
                        <div className="badge">Google Cloud</div>
                        <div className="badge">Vertex AI</div>
                        <div className="badge">Temporal</div>
                        <div className="badge">LangGraph</div>
                        <div className="badge">FastAPI</div>
                        <div className="badge">MCP</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;