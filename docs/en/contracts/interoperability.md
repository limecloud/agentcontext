---
title: Interoperability
description: Agent Context interoperability contract.
---

# Interoperability

Agent Context is a bridge standard. It should preserve native ids and map to adjacent standards by refs.

## Agent Runtime

When Agent Context is used by Agent Runtime-compatible systems, context records should be referenced from `RuntimeEvent`, `ThreadReadModel`, `TaskSnapshot`, and `EvidencePack` rather than copied into runtime status.

| Agent Context fact | Runtime relationship |
| --- | --- |
| Context envelope | Snapshot of context available to `session_id/thread_id/turn_id`. |
| Selection and budget records | Explain why context was selected, omitted, truncated, or deferred. |
| Assembly and injection records | Explain what actually became visible to a model, tool, UI, runtime, or peer agent. |
| Missing-context records | Produce explicit missing facts or follow-up actions without becoming approval state. |
| Compaction summaries | Preserve context boundaries and source refs without becoming final answer text. |
| Policy/evidence refs | Let Agent Policy and Agent Evidence join context to decisions and packs. |

Agent Context MUST NOT declare turn completion, tool success, task status, or permission grants. Those are runtime, tool, task, and policy facts.

## MCP

Map MCP resources, resource templates, roots, prompts, resource links, annotations, and JSON-RPC ids into source refs, context items, and external mappings.

## A2A

Map A2A `contextId`, task ids, messages, parts, artifacts, and agent skills into peer-agent source refs and handoff envelopes.

## OpenTelemetry

Map trace ids, span ids, GenAI operation names, prompt events, token usage, and conversation/session attributes into telemetry refs.

## W3C PROV and Web Annotation

Use PROV-style entity/activity/agent relationships for derivation and attribution. Use Web Annotation-style selectors for precise source anchoring.

## Fixed rule

Interoperability means preserving foreign identity. Do not collapse native protocols into Agent Context-only ids.
