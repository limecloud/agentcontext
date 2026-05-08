---
title: What is Agent Context?
description: Overview and boundaries for Agent Context.
---

# What is Agent Context?

Agent Context is the portable contract for the context actually available to an agent at a moment of work. It sits between sources and execution.

Sources can include user messages, system instructions, session history, working memory, durable memory, knowledge packages, document excerpts, file excerpts, artifacts, tool results, browser state, runtime state, policy notes, peer-agent messages, external resources, and computed summaries. Agent Context does not own those sources. It records how they are surfaced, selected, constrained, assembled, injected, compacted, and reported.

## The problem

Agent systems often answer incorrectly because the context story is implicit:

- a memory was available but not selected;
- a selected item was truncated without a record;
- a summary replaced original turns but the loss was not tracked;
- a tool saw different context from the model;
- a policy redaction changed a snippet but the UI only shows the final answer;
- a reviewer cannot reproduce which sources entered the prompt.

Agent Context makes those facts explicit.

## Core boundary

| Layer | Owns | Agent Context relationship |
| --- | --- | --- |
| Runtime | Accepts, schedules, executes, pauses, resumes, and recovers work. | Context records the input snapshot and injection facts used by runtime work. |
| UI | Shows messages, previews, controls, citations, and review panels. | Context gives UI explainable surfaces, omissions, and missing-context requests. |
| Tool | Declares and invokes capabilities. | Context records which context items were visible to or produced by tools. |
| Policy | Decides permission, redaction, retention, and export constraints. | Context links to policy decisions and records redaction state. |
| Evidence | Reviews, verifies, replays, and exports trust records. | Context supplies selection, omission, compaction, and injection facts for audit. |
| Artifact | Owns durable deliverables and their versions. | Context may reference artifact versions or parts as input context. |
| Knowledge | Owns source-grounded knowledge packages and compiled views. | Context records which knowledge items were selected into a turn. |
| Skills | Own executable methods and procedural packages. | Context may show skill docs or assets as selected data; it does not execute them. |

## Design principles

1. Preserve native ids from source systems, model APIs, tools, and peer-agent protocols.
2. Keep context selection separate from storage and retrieval.
3. Treat injected context as a snapshot, not a vague side effect.
4. Prefer refs for large, sensitive, or mutable material.
5. Record omissions and missing context, not only selected context.
6. Keep policy decisions outside the context standard while preserving policy refs.
7. Make compaction auditable: source items, replacement summary, losses, and validation.
8. Support different visibility targets: model, tool, runtime, UI, user, reviewer, and peer agent.
