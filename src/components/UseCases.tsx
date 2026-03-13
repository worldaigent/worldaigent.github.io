import React from 'react';
import './UseCases.css';

const UseCases = () => {
    const useCases = [
        {
            title: "Document Intelligence",
            description: "Upload a PDF, Excel file, or scanned image. The platform extracts, cleans, and structures the data using AI — returning a validated JSON or CSV output ready for downstream systems.",
            users: "Finance teams, legal departments, operations teams"
        },
        {
            title: "Automated Reporting",
            description: "Schedule daily, weekly, or monthly AI-generated summaries from your data sources. Reports are generated automatically, stored in GCS, and delivered on a configurable schedule.",
            users: "Management teams, analysts, client-facing businesses"
        },
        {
            title: "WhatsApp AI Assistant",
            description: "A conversational assistant embedded in WhatsApp that remembers session context, queries your internal systems, and can confirm reservations, look up records, or escalate to a human agent.",
            users: "Customer service teams, hospitality, e-commerce"
        },
        {
            title: "Data Transformation Pipelines",
            description: "Convert unstructured text — emails, forms, support tickets — into validated structured JSON at scale. Configurable output schema per client.",
            users: "SaaS companies, data teams, integration builders"
        },
        {
            title: "API Integration Workflows",
            description: "Chain your CRM, ERP, billing system, or third-party APIs with AI decision steps in between. The platform handles retry logic, credential management, and execution history automatically.",
            users: "Operations teams, software companies, agencies"
        },
        {
            title: "Scheduled AI Workflows",
            description: "Run any AI workflow on a cron schedule: extract data at midnight, summarize at 6am, export at end of month. No manual trigger needed.",
            users: "Any team with recurring data or reporting tasks"
        },
        {
            title: "AI Agent Automation",
            description: "Connect Claude Desktop, Cursor, or your own AI agent directly to World Aigent via MCP. Agents can trigger workflows, poll for completion, and consume results — all through a standardized tool interface, with no custom API integration required.",
            users: "AI engineers, product teams building agent pipelines, developer tools users"
        },
        {
            title: "Content production",
            description: "Generate content for your website, blog, or social media accounts using AI. The platform handles retry logic, credential management, and execution history automatically.",
            users: "Content creators, marketing teams, social media managers"
        }
    ];

    return (
        <div className="use-cases-page">
            <section className="section hero">
                <div className="container">
                    <h1>What Teams Use World Aigent</h1>
                    <p>
                        Discover how businesses are leveraging AI workflows to automate processes,
                        analyze data, and deliver better customer experiences.
                    </p>
                </div>
            </section>

            <section className="section use-cases-grid">
                <div className="container">
                    <div className="cases-grid">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="use-case-card">
                                <h2>{useCase.title}</h2>
                                <p>{useCase.description}</p>
                                <div className="users-tag">
                                    <span className="label">Who uses this:</span>
                                    <span className="users">{useCase.users}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCases;