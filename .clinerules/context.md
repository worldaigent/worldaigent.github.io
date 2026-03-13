# 🌐 Cline Rule — worldaigent.com Website Rewrite

## Objective

Rewrite the current website at worldaigent.com to clearly represent
World Aigent as an AI Workflow SaaS platform. The website must satisfy
the Google for Startups Cloud Program validation criteria:
technology startup, digital product, team presence, and
cloud-native business model.

Do not change the tech stack or deployment setup. Only change content,
copy, structure, and page components.

---

## Company Identity

**Company name:** World Aigent  
**Tagline:** AI Workflows. Production-Ready. For Every Business.  
**Type:** Multi-tenant AI Workflow SaaS platform  
**Built on:** Google Cloud (Vertex AI), Temporal, LangGraph  
**Business model:** Usage-based SaaS  
**Target market:** Operations teams, software companies, and enterprises
that need AI automation without building infrastructure  

---

## Required Pages

Create or rewrite the following pages. All must be accessible without
login. Navigation must link to all of them.
```
/ (Home)
/product
/how-it-works
/use-cases
/team
/contact
```

---

## Page: Home (/)

### Hero Section

**Headline:**
> AI Workflows. Production-Ready. For Every Business.

**Subheadline:**
> Run durable, observable, and scalable AI automations on Google Cloud —
> without building the infrastructure yourself.

**Body:**
> World Aigent lets your team deploy AI workflows in minutes. Process
> documents, automate reports, power conversational assistants, and
> connect to your existing tools — all orchestrated, monitored, and
> billed in one place.

**CTA buttons:**
- Primary: "Get Started" → /contact
- Secondary: "See How It Works" → /how-it-works

---

### Product Overview Section

**Heading:** One Platform. Every AI Workflow.

**Body:**
> World Aigent is a cloud-native SaaS platform that orchestrates
> AI-powered workflows for businesses of any size. Each client runs in
> an isolated, secure environment. You define what needs to be done —
> we handle the orchestration, reliability, scaling, and billing.

**3-column feature grid:**

| Icon | Title | Description |
|------|-------|-------------|
| ⚡ | On-Demand Execution | Trigger AI workflows via API, webhook, chatbot, or file upload — anytime. |
| 🔄 | Durable by Default | Built on Temporal. Workflows survive crashes, retries, and network failures automatically. |
| 📊 | Full Observability | Every workflow step is recorded. Inspect history, debug failures, and replay any task. |
| 🔒 | Isolated Per Client | Each client has a dedicated namespace. No data leakage. No shared state. |
| 📅 | Scheduled Workflows | Run daily reports, weekly summaries, or monthly exports on a cron schedule. |
| 🤖 | Conversational AI | WhatsApp and web chatbots that maintain session state and trigger real business actions. |

---

### Use Cases Teaser Section

**Heading:** What Teams Use It For

Show 4 cards linking to /use-cases:

1. **Document Intelligence** — Upload a PDF or Excel file. Get structured, cleaned data back automatically.
2. **Automated Reporting** — Schedule AI-generated summaries from your data, delivered on time, every time.
3. **WhatsApp AI Assistant** — A conversational assistant that remembers context and takes real actions in your systems.
4. **API Integration Pipelines** — Chain your CRM, ERP, or third-party APIs with AI decision steps in between.

---

### Technology Section (brief, on Home)

**Heading:** Built on Enterprise-Grade Cloud Infrastructure

**Body:**
> World Aigent runs on Google Cloud with Vertex AI as the primary
> AI execution layer, Temporal for workflow orchestration, and
> LangGraph for multi-step AI pipelines. Every component is
> containerized, auto-scaling, and production-ready from day one.

**Logos/badges to display:** Google Cloud, Vertex AI, Temporal, LangGraph, FastAPI

---

## Page: /product

### Section 1 — What It Is

**Heading:** The AI Workflow Platform Built for Production

**Body:**
> World Aigent is a multi-tenant SaaS platform that lets businesses
> run AI-powered workflows at scale. Clients connect via API or
> webhook and define the task — text transformation, document
> processing, image generation, or conversational AI. The platform
> handles execution, retries, observability, and usage billing.

---

### Section 2 — Key Features (detailed)

List these as individual feature blocks with heading + paragraph each:

**Durable Workflow Orchestration**  
Every workflow is powered by Temporal, the orchestration engine trusted
by Stripe, Netflix, and Coinbase. Long-running workflows survive
restarts, crashes, and network failures without losing state or
requiring manual intervention.

**AI Model Execution via Vertex AI**  
World Aigent uses Google Cloud's Vertex AI as the primary model
execution layer. Supported capabilities include text generation,
text transformation, structured output, and image generation.
OpenRouter serves as a fallback provider for resilience.

**Multi-Step AI Pipelines with LangGraph**  
Complex tasks are handled by LangGraph pipelines running inside
Temporal activities. LangGraph manages prompt construction,
multi-step reasoning, and deterministic structured output formatting —
ensuring consistent, auditable results on every run.

**Per-Client Isolation**  
Every client runs in a dedicated Temporal namespace. Workflow history,
usage data, and integrations are fully separated. No workflow from one
client can observe or affect another.

**File and Report Processing**  
Clients can submit PDFs, Excel files, images, and other documents for
AI processing. Files are stored securely in Google Cloud Storage.
Workflow payloads never contain binary data — only references.

**Flexible Scheduling**  
Workflows can run on demand or on a cron schedule. Daily reports,
weekly summaries, and monthly exports are first-class citizens of
the platform.

**External API Integrations**  
The platform connects to external APIs as part of any workflow.
Credentials are stored securely in Google Secret Manager and never
appear in the database or workflow history.

---

### Section 3 — Workflow Input Model

Show this in a styled code block:
```python
class AIWorkflowInput(BaseModel):
    client_id: str
    task_type: str      # text_transform | report_clean | conversation | generate_image
    model_name: str
    input_text: str | None = None
    prompt: str | None = None
    output_format: str | None = None
    file_ref: str | None = None     # GCS URI for file-based workflows
    session_id: str | None = None   # for conversational workflows
```

**Caption:** Every workflow is triggered with a typed, validated input.
The platform routes it to the correct handler, executes it durably,
and returns a result reference when complete.

---

### Section 4 — Technology Stack

Display as a table or icon grid:

| Layer | Technology |
|-------|-----------|
| Cloud Infrastructure | Google Cloud (Cloud Run / GKE Autopilot) |
| AI Models | Vertex AI (primary), OpenRouter (fallback) |
| Workflow Orchestration | Temporal |
| AI Pipeline Construction | LangGraph |
| API Layer | FastAPI |
| Storage | Google Cloud Storage |
| Database | Cloud SQL for PostgreSQL |
| Secrets | Google Secret Manager |
| Observability | Cloud Monitoring, OpenTelemetry |

---

## Page: /how-it-works

### Section 1 — Overview

**Heading:** From Request to Result in Four Steps

**Steps:**

**1. Connect**  
Register your company on World Aigent. The platform automatically
provisions your isolated namespace, API credentials, and Nexus
endpoint. No infrastructure setup required on your side.

**2. Define**  
Choose the workflow type you need — document processing, text
transformation, image generation, or conversational AI. Submit via
REST API, webhook, WhatsApp message, or scheduled cron.

**3. Execute**  
The platform routes your request to your dedicated worker environment.
LangGraph constructs the AI pipeline, Vertex AI executes the model
call, and Temporal ensures the workflow completes — even if something
fails midway.

**4. Retrieve**  
Results are stored in Google Cloud Storage and referenced in your
workflow response. Query status, inspect execution history, and pull
results at any time via API.

---

### Section 2 — Execution Flow Diagram

Show as a vertical or horizontal step diagram:
```
POST /workflows/run
  → Validate client
  → Resolve client namespace
  → Validate workflow type
  → Trigger AI workflow
       → LangGraph pipeline
       → Vertex AI model call
       → Result stored in GCS
       → Usage recorded
  → Return result reference
```

---

### Section 3 — Chatbot Patterns

**Heading:** Two Chatbot Patterns, One Platform

**Pattern A — Stateful Conversational AI**  
The workflow is the conversation. It stays alive for the duration
of the session, receives each new message as a signal, maintains
context, and can trigger real business actions like bookings or
data lookups. Session timeout is configurable.

**Pattern B — Command and Result**  
The chatbot receives a command, triggers a workflow, and returns
the result. Fast queries (under a few seconds) return inline.
Slow workflows (report generation, file analysis) reply
asynchronously when complete.

---

### Section 4 — File Processing Flow

**Heading:** How File Processing Works
```
User sends file (PDF, Excel, image)
  → File uploaded to Google Cloud Storage
  → Workflow triggered with GCS reference
  → AI pipeline downloads, processes, and cleans file
  → Structured result uploaded to GCS
  → User notified with result link
```

**Note:** Binary files never travel inside workflow payloads.
This keeps workflow history lean, auditable, and within Temporal's
storage limits at any scale.

---

## Page: /use-cases

List the following use cases as individual sections or cards.
Each has a heading, 2–3 sentence description, and a "Who uses this" note.

---

**Document Intelligence**  
Upload a PDF, Excel file, or scanned image. The platform extracts,
cleans, and structures the data using AI — returning a validated
JSON or CSV output ready for downstream systems.  
*Who uses this: Finance teams, legal departments, operations teams*

**Automated Reporting**  
Schedule daily, weekly, or monthly AI-generated summaries from
your data sources. Reports are generated automatically, stored in
GCS, and delivered on a configurable schedule.  
*Who uses this: Management teams, analysts, client-facing businesses*

**WhatsApp AI Assistant**  
A conversational assistant embedded in WhatsApp that remembers
session context, queries your internal systems, and can confirm
reservations, look up records, or escalate to a human agent.  
*Who uses this: Customer service teams, hospitality, e-commerce*

**Data Transformation Pipelines**  
Convert unstructured text — emails, forms, support tickets — into
validated structured JSON at scale. Configurable output schema
per client.  
*Who uses this: SaaS companies, data teams, integration builders*

**API Integration Workflows**  
Chain your CRM, ERP, billing system, or third-party APIs with AI
decision steps in between. The platform handles retry logic,
credential management, and execution history automatically.  
*Who uses this: Operations teams, software companies, agencies*

**Scheduled AI Workflows**  
Run any AI workflow on a cron schedule: extract data at midnight,
summarize at 6am, export at end of month. No manual trigger needed.  
*Who uses this: Any team with recurring data or reporting tasks*

---

## Page: /team

**Heading:** Built by Engineers, for Builders

**Body:**
> World Aigent was founded by engineers with a background in
> distributed systems, cloud infrastructure, and applied AI.
> The platform is designed from first principles: durable by default,
> observable at every step, and portable across any cloud runtime.

---

Add at least one founder card with:
```
Name: [Founder Name]
Role: Founder & CEO / CTO
Background: Engineer specializing in distributed systems,
            AI workflow orchestration, and cloud-native platforms.
            Built on Google Cloud, Temporal, and large language models.
LinkedIn: [URL if available]
```

If the real founder name/photo is not available, use a placeholder
and leave a TODO comment in the component for easy replacement.

---

## Page: /contact

**Heading:** Get in Touch

**Body:**
> Ready to automate your AI workflows? Reach out to the World Aigent
> team to discuss your use case, request access, or ask a question.

**Show:**
- Email: [contact@worldaigent.com or team@worldaigent.com]
- Form fields: Name, Company, Work email, Message
- Note: "We respond within 1 business day."

**Important:** The contact email domain must be @worldaigent.com —
not Gmail, Outlook, or any generic provider. This is required for
Google for Startups program validation.

---

## Navigation

The top navigation must include:
```
World Aigent [logo]    Product   How It Works   Use Cases   Team   Contact [CTA button]
```

The "Contact" item should be styled as a filled button (CTA).
All nav links must work without authentication.

---

## Footer

Include in footer:

- Company name: World Aigent
- Short description: AI Workflow SaaS Platform built on Google Cloud
- Links: Product, How It Works, Use Cases, Team, Contact
- Email: contact@worldaigent.com
- Copyright: © 2026 World Aigent. All rights reserved.

---

## Style Constraints

- Keep the existing color palette and font choices if they are clean
  and professional. If not, use a dark navy/white palette with a blue
  or violet accent.
- All pages must render without JavaScript disabled warning pages.
  The current site shows "You need to enable JavaScript to run this app"
  — consider adding a basic `<noscript>` fallback or meta description
  at minimum for crawlers.
- Add proper `<title>` and `<meta name="description">` tags to each page:

| Page | Title | Meta Description |
|------|-------|-----------------|
| / | World Aigent — AI Workflow Platform | Run durable, scalable AI workflows on Google Cloud. No infrastructure required. |
| /product | Product — World Aigent | AI orchestration platform powered by Vertex AI, Temporal, and LangGraph. |
| /how-it-works | How It Works — World Aigent | From request to result: how World Aigent executes, monitors, and scales your AI workflows. |
| /use-cases | Use Cases — World Aigent | Document processing, automated reports, WhatsApp AI, and more. |
| /team | Team — World Aigent | Meet the engineers behind World Aigent. |
| /contact | Contact — World Aigent | Get in touch with the World Aigent team. |

---

## Acceptance Criteria

The implementation is complete when:

- [ ] All 6 pages exist and are publicly accessible via HTTPS
- [ ] Hero section clearly states what the product is, who it's for,
      and what technology powers it
- [ ] Product page describes the platform as cloud-native SaaS
- [ ] How It Works page explains the execution flow
- [ ] Use Cases page lists at least 4 real business scenarios
- [ ] Team page shows at least one founder with name and role
- [ ] Contact page shows a @worldaigent.com email address
- [ ] Navigation links to all pages and works without login
- [ ] Footer is present on all pages
- [ ] Meta titles and descriptions are set on all pages
- [ ] The site does not appear to be a blog, agency, or consulting firm