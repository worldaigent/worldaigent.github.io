import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product-page">
            <section className="section what-it-is">
                <div className="container">
                    <h1>The AI Workflow Platform Built for Production</h1>
                    <p>
                        World Aigent is a multi-tenant SaaS platform that lets businesses
                        run AI-powered workflows at scale. A one-time implementation to deploy AI workflow agents, followed by a monthly platform subscription to host, monitor, and optimize the automations.
                    </p>
                    <p>
                        Clients connect via API or
                        webhook and define the task — text transformation, document
                        processing, image generation, or conversational AI. The platform
                        handles execution, retries, observability, and usage billing.
                    </p>
                </div>
            </section>

            <section className="section key-features">
                <div className="container">
                    <h2>Key Features</h2>

                    <div className="feature-grid">
                        <div className="feature-block">
                            <h3>Durable Workflow Orchestration</h3>
                            <p>
                                Every workflow is powered by Temporal, the orchestration engine trusted
                                by Stripe, Netflix, and Coinbase. Long-running workflows survive
                                restarts, crashes, and network failures without losing state or
                                requiring manual intervention.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>AI Model Execution via Vertex AI</h3>
                            <p>
                                World Aigent uses Google Cloud's Vertex AI as the primary model
                                execution layer. Supported capabilities include text generation,
                                text transformation, structured output, and image generation.
                                OpenRouter serves as a fallback provider for resilience.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>Multi-Step AI Pipelines with LangGraph</h3>
                            <p>
                                Complex tasks are handled by LangGraph pipelines running inside
                                Temporal activities. LangGraph manages prompt construction,
                                multi-step reasoning, and deterministic structured output formatting —
                                ensuring consistent, auditable results on every run.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>Per-Client Isolation</h3>
                            <p>
                                Every client runs in a dedicated Temporal namespace. Workflow history,
                                usage data, and integrations are fully separated. No workflow from one
                                client can observe or affect another.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>File and Report Processing</h3>
                            <p>
                                Clients can submit PDFs, Excel files, images, and other documents for
                                AI processing. Files are stored securely in Google Cloud Storage.
                                Workflow payloads never contain binary data — only references.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>Flexible Scheduling</h3>
                            <p>
                                Workflows can run on demand or on a cron schedule. Daily reports,
                                weekly summaries, and monthly exports are first-class citizens of
                                the platform.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>External API Integrations</h3>
                            <p>
                                The platform connects to external APIs as part of any workflow.
                                Credentials are stored securely in Google Secret Manager and never
                                appear in the database or workflow history.
                            </p>
                        </div>

                        <div className="feature-block">
                            <h3>MCP-Native: Connect Any AI Agent to Your Workflows</h3>
                            <p>
                                World Aigent exposes its workflow engine as a Model Context Protocol
                                (MCP) server. Any MCP-compatible AI agent — including Claude Desktop,
                                Cursor, or your own custom agent — can discover, trigger, and monitor
                                your workflows without writing a single line of integration code.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section workflow-model">
                <div className="container">
                    <h2>Workflow Input Model</h2>
                    <div className="code-block">
                        <pre>
                            <code>
                                {`class AIWorkflowInput(BaseModel):
    client_id: str
    task_type: str      # text_transform | report_clean | conversation | generate_image
    model_name: str
    input_text: str | None = None
    prompt: str | None = None
    output_format: str | None = None
    file_ref: str | None = None     # GCS URI for file-based workflows
    session_id: str | None = None   # for conversational workflows`}
                            </code>
                        </pre>
                    </div>
                    <p className="code-caption">
                        Every workflow is triggered with a typed, validated input.
                        The platform routes it to the correct handler, executes it durably,
                        and returns a result reference when complete.
                    </p>
                </div>
            </section>

            <section className="section workflow-model">
                <h2>Endpoints</h2>
                <div className="code-block">
                    <pre>
                        <code>
                            {`run_workflow         Trigger any AI workflow for a client
get_workflow_status  Check the status of a running or completed workflow
list_workflows       List all available workflow types for a client
get_usage            Retrieve token and cost usage for a client by period`}
                        </code>
                    </pre>
                </div>
                <p className="code-caption">
                    MCP tools are authenticated with the same API key as REST requests.
                    No separate credentials. No additional setup for existing clients.
                </p>
            </section>

            <section className="section technology-stack">
                <div className="container">
                    <h2>Technology Stack</h2>
                    <div className="tech-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Layer</th>
                                    <th>Technology</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cloud Infrastructure</td>
                                    <td>Google Cloud (Cloud Run / GKE Autopilot)</td>
                                </tr>
                                <tr>
                                    <td>AI Models</td>
                                    <td>Vertex AI (primary), OpenRouter (fallback)</td>
                                </tr>
                                <tr>
                                    <td>Workflow Orchestration</td>
                                    <td>Temporal</td>
                                </tr>
                                <tr>
                                    <td>AI Pipeline Construction</td>
                                    <td>LangGraph</td>
                                </tr>
                                <tr>
                                    <td>API Layer</td>
                                    <td>FastAPI</td>
                                </tr>
                                <tr>
                                    <td>Storage</td>
                                    <td>Google Cloud Storage</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Cloud SQL for PostgreSQL</td>
                                </tr>
                                <tr>
                                    <td>Secrets</td>
                                    <td>Google Secret Manager</td>
                                </tr>
                                <tr>
                                    <td>Observability</td>
                                    <td>Cloud Monitoring, OpenTelemetry</td>
                                </tr>
                                <tr>
                                    <td>AI Agent Integration</td>
                                    <td>MCP</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;