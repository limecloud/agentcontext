---
title: Context envelope
description: Agent Context context envelope contract.
---

# Context envelope

A `context_envelope` is the top-level snapshot for one context boundary. It answers: which context records belong to this turn, task, tool invocation, review, or handoff?

## Required fields

| Field | Purpose |
| --- | --- |
| `schema_version` | Agent Context schema version. |
| `context_id` | Stable snapshot id. |
| `scope` | Boundary such as `turn`, `task`, `session`, `tool_invocation`, `review`, or `handoff`. |
| `lifecycle` | Current lifecycle state. |
| `created_at` | Snapshot timestamp. |

## Recommended refs

Use refs rather than embedding complete records when envelopes travel across systems: `surface_refs`, `item_refs`, `selection_refs`, `budget_ref`, `assembly_refs`, `injection_refs`, `compaction_refs`, `missing_context_refs`, `policy_refs`, `evidence_refs`, `artifact_refs`, `tool_refs`, `runtime_refs`, and `telemetry_refs`.

## Fixed rule

The envelope is a snapshot, not a mutable memory store. If context changes, create a new event and, when needed, a new envelope revision.
