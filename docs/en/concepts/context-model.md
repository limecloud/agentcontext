---
title: Context model
description: Object model and lifecycle for Agent Context.
---

# Context Model

Agent Context uses a simple lifecycle:

```text
sources -> context_surface -> context_selection -> context_budget -> context_assembly -> context_injection -> context_evidence
                              |                     |
                              v                     v
                         missing_context       context_compaction
```

## Objects

| Object | Purpose |
| --- | --- |
| `context_envelope` | One portable snapshot for a turn, task, session, tool call, UI review, or peer-agent handoff. |
| `context_surface` | The context that was available before selection. |
| `context_item` | A unit of context, either inline or by reference. |
| `context_source_ref` | Origin, selector, digest, authority, and native id mapping for an item. |
| `context_selection` | Candidate, selected, omitted, ranking, and rationale records. |
| `context_budget` | Token, byte, item, time, and visibility limits. |
| `context_window` | Ordered segments and reserved space for the final context window. |
| `context_assembly` | Ordered blocks assembled for a target. |
| `context_injection` | Where context became visible: system prompt, message history, tool argument, tool-visible resource, UI panel, runtime metadata, or peer-agent message. |
| `context_compaction` | Replacement of original context with a shorter summary or structured digest. |
| `context_summary` | Summary content plus source coverage, loss notes, and refresh policy. |
| `missing_context` | Known missing inputs, blockers, questions, and requested sources. |
| `context_event` | Lifecycle event for surfaces, selections, budgets, injections, compactions, redactions, and exports. |

## Context kinds

Initial `context_kind` values:

- `user_message`
- `system_prompt`
- `developer_instruction`
- `session_history`
- `thread_summary`
- `working_memory`
- `durable_memory`
- `knowledge_pack_item`
- `document_excerpt`
- `file_excerpt`
- `artifact_ref`
- `tool_result`
- `browser_state`
- `runtime_state`
- `team_memory`
- `policy_note`
- `external_resource`
- `manual_note`
- `computed_summary`
- `peer_agent_message`
- `retrieval_result`
- `custom`

## Visibility targets

Context may be visible to one or more targets:

- `model`
- `tool`
- `runtime`
- `ui`
- `user`
- `reviewer`
- `peer_agent`
- `evidence_export`

A compatible implementation should not assume that context injected into one target is visible to every target.
