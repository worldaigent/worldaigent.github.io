```markdown
# 🔌 Cline Rule — worldaigent.com MCP Integration Content

## Objective

Add MCP (Model Context Protocol) content to the existing website at
worldaigent.com. This does not replace any existing page — it extends
the product story. MCP is an additive capability that makes the platform
accessible to AI agents, developer tools like Claude Desktop and Cursor,
and custom automation pipelines.

Do not invent features. Only describe what the architecture supports:
the platform exposes MCP tools that wrap existing workflow endpoints.

---

## What is MCP — context for copy

MCP (Model Context Protocol) is an open standard created by Anthropic
that allows AI agents and coding tools to connect to external services
through a unified interface. When a platform exposes an MCP server,
any compatible AI agent can discover and call its tools without custom
integration code.

World Aigent implements MCP as an additional interface layer on top of
its existing API. No new infrastructure. No new workflow logic. The same
durable Temporal workflows are invoked — just through a new entry point
that AI agents understand natively.

---

## Pages to modify

### 1. /product — add MCP section

Add a new feature block after the existing feature list. Same visual
style as the other feature blocks.

---

**Heading:** MCP-Native: Connect Any AI Agent to Your Workflows

**Body:**
> World Aigent exposes its workflow engine as a Model Context Protocol
> (MCP) server. Any MCP-compatible AI agent — including Claude Desktop,
> Cursor, or your own custom agent — can discover, trigger, and monitor
> your workflows without writing a single line of integration code.
>
> Your AI assistant can run a document processing workflow, check its
> status, or pull usage data for a client, all through the same MCP
> interface it uses to call any other tool.

**Tools exposed via MCP:**

Display as a styled code block or table:

```
run_workflow         Trigger any AI workflow for a client
get_workflow_status  Check the status of a running or completed workflow
list_workflows       List all available workflow types for a client
get_usage            Retrieve token and cost usage for a client by period
```

**Caption:**
> MCP tools are authenticated with the same API key as REST requests.
> No separate credentials. No additional setup for existing clients.

---

### 2. /how-it-works — add MCP as a fourth entry point

In the existing "Step 2 — Define" section (or wherever trigger methods
are listed), add MCP as an additional trigger method alongside API,
webhook, and WhatsApp.

Update the trigger list to read:

```
Submit via:
  REST API
  Webhook
  WhatsApp message
  MCP tool call from any compatible AI agent
  Scheduled cron
```

Also add a new subsection at the bottom of the page:

---

**Heading:** Accessible to AI Agents via MCP

**Body:**
> Beyond REST and webhooks, World Aigent is available as an MCP server.
> AI agents that support the Model Context Protocol — such as Claude,
> Cursor, or any agent built on the standard — can call World Aigent
> workflows as native tools.
>
> This means an AI assistant can trigger a report processing job, wait
> for the result, and hand the output to the next step in a pipeline —
> without any human in the loop and without custom integration work.

**Architecture diagram (text-based, styled as a flow):**

```
AI Agent (Claude Desktop / Cursor / custom)
    ↓  MCP protocol
World Aigent MCP Server
    ↓  internal routing
Existing API layer
    ↓  Nexus
Temporal workflow (durable, observable, retryable)
    ↓
Result stored in Google Cloud Storage
```

---

### 3. /use-cases — add one MCP-specific use case card

Add to the existing use case grid:

**Heading:** AI Agent Automation

**Body:**
> Connect Claude Desktop, Cursor, or your own AI agent directly to
> World Aigent via MCP. Agents can trigger workflows, poll for
> completion, and consume results — all through a standardized tool
> interface, with no custom API integration required.

*Who uses this: AI engineers, product teams building agent pipelines,
developer tools users*

---

### 4. Home — update technology section

In the existing technology logos/badges row, add **MCP** as a supported
standard alongside Google Cloud, Vertex AI, Temporal, LangGraph, and
FastAPI.

Also update the body copy of the technology section to include one
sentence referencing MCP:

Add at the end of the existing paragraph:
> The platform is also accessible as an MCP server, enabling any
> compatible AI agent to trigger and monitor workflows natively.

---

### 5. Navigation — no change required

Do not add MCP as a top-level nav item. It is a product capability,
not a separate page. It lives within /product and /how-it-works.

---

## SEO — update meta descriptions

| Page | Updated Meta Description |
|------|--------------------------|
| /product | AI orchestration platform powered by Vertex AI, Temporal, LangGraph, and MCP. |
| /how-it-works | Trigger AI workflows via API, webhook, WhatsApp, or MCP tool call. |

---

## Style constraints

- MCP content must visually match existing sections — same card/block
  style, same font, same spacing.
- The MCP code blocks (tool list) should use the same styling as the
  `AIWorkflowInput` block already on /product.
- Do not add a separate MCP page. All MCP content is embedded in
  existing pages.
- Do not use the phrase "AI-first" — it reads as marketing filler.
  Describe what the tool actually does.

---

## Acceptance criteria

- [ ] /product has a dedicated MCP feature block with the four tool names
- [ ] /how-it-works lists MCP as a trigger method and has an MCP flow diagram
- [ ] /use-cases has an "AI Agent Automation" card
- [ ] Home technology section mentions MCP
- [ ] Meta descriptions on /product and /how-it-works are updated
- [ ] All MCP content is consistent in tone with existing product copy
- [ ] No new top-level pages created for MCP
```