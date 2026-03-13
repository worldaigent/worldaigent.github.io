import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className="how-it-works-page">
            <section className="section overview">
                <div className="container">
                    <h1>From Request to Result in Four Steps</h1>

                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Connect</h3>
                                <p>
                                    Register your company on World Aigent. The platform automatically
                                    provisions your isolated namespace, API credentials, and Nexus
                                    endpoint. No infrastructure setup required on your side.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Define</h3>
                                <p>
                                    Choose the workflow type you need — document processing, text
                                    transformation, image generation, or conversational AI. Submit via
                                    REST API, webhook, WhatsApp message, MCP tool call from any compatible AI agent, or scheduled cron.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Execute</h3>
                                <p>
                                    The platform routes your request to your dedicated worker environment.
                                    LangGraph constructs the AI pipeline, Vertex AI executes the model
                                    call, and Temporal ensures the workflow completes — even if something
                                    fails midway.
                                </p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Retrieve</h3>
                                <p>
                                    Results are stored in Google Cloud Storage and referenced in your
                                    workflow response. Query status, inspect execution history, and pull
                                    results at any time via API.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section execution-flow">
                <div className="container">
                    <h2>Execution Flow</h2>
                    <div className="flow-diagram">
                        <pre>
                            <code>
                                {`POST /workflows/run
  → Validate client
  → Resolve client namespace
  → Validate workflow type
  → Trigger AI workflow
       → LangGraph pipeline
       → Vertex AI model call
       → Result stored in GCS
       → Usage recorded
  → Return result reference`}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="section chatbot-patterns">
                <div className="container">
                    <h2>Two Chatbot Patterns, One Platform</h2>

                    <div className="patterns-container">
                        <div className="pattern">
                            <h3>Pattern A — Stateful Conversational AI</h3>
                            <p>
                                The workflow is the conversation. It stays alive for the duration
                                of the session, receives each new message as a signal, maintains
                                context, and can trigger real business actions like bookings or
                                data lookups. Session timeout is configurable.
                            </p>
                        </div>

                        <div className="pattern">
                            <h3>Pattern B — Command and Result</h3>
                            <p>
                                The chatbot receives a command, triggers a workflow, and returns
                                the result. Fast queries (under a few seconds) return inline.
                                Slow workflows (report generation, file analysis) reply
                                asynchronously when complete.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section file-processing">
                <div className="container">
                    <h2>How File Processing Works</h2>
                    <div className="flow-diagram">
                        <pre>
                            <code>
                                {`User sends file (PDF, Excel, image)
  → File uploaded to Google Cloud Storage
  → Workflow triggered with GCS reference
  → AI pipeline downloads, processes, and cleans file
  → Structured result uploaded to GCS
  → User notified with result link`}
                            </code>
                        </pre>
                    </div>
                    <p className="flow-note">
                        Binary files never travel inside workflow payloads.
                        This keeps workflow history lean, auditable, and within Temporal's
                        storage limits at any scale.
                    </p>
                </div>
            </section>

            <section className="section mcp-accessibility">
                <div className="container">
                    <h2>Accessible to AI Agents via MCP</h2>
                    <p>
                        Beyond REST and webhooks, World Aigent is available as an MCP server.
                        AI agents that support the Model Context Protocol — such as Claude,
                        Cursor, or any agent built on the standard — can call World Aigent
                        workflows as native tools.
                    </p>
                    <p>
                        This means an AI assistant can trigger a report processing job, wait
                        for the result, and hand the output to the next step in a pipeline —
                        without any human in the loop and without custom integration work.
                    </p>
                    <div className="flow-diagram">
                        <pre>
                            <code>
                                {`AI Agent (Claude Desktop / Cursor / custom)
    ↓  MCP protocol
World Aigent MCP Server
    ↓  internal routing
Existing API layer
    ↓  Nexus
Temporal workflow (durable, observable, retryable)
    ↓
Result stored in Google Cloud Storage`}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;