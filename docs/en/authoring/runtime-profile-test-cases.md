---
title: Runtime profile test cases
description: Test matrix for Agent Context facts used by Agent Runtime-compatible turns.
---

# Runtime profile test cases

Use these cases when Agent Context is used by Agent Runtime, Lime AgentRuntime Profile, or an equivalent runtime spine. The goal is to prove that context facts can be referenced by runtime turns without turning Agent Context into a runtime state owner.

## Canonical boundary

```text
ContextSurface / ContextItem / SourceRef / Selection / Assembly / Compaction / MissingContext
  -> context refs on RuntimeEvent, ThreadReadModel, TaskSnapshot, or EvidencePack
  -> Agent UI and Agent Evidence consume refs and summaries
```

Agent Context owns what context was available, selected, assembled, injected, omitted, compacted, redacted, or missing. Agent Runtime owns turn status, task status, retries, tool execution, action waits, and recovery.

## Runtime correlation fields

Compatible context events and envelopes SHOULD preserve these ids when available:

| Field | Purpose |
| --- | --- |
| `runtime_id` | Runtime installation or runtime instance. |
| `session_id` | Durable work container that requested context. |
| `thread_id` | Ordered execution context. |
| `turn_id` | Turn whose context was selected or injected. |
| `task_id` / `run_id` / `attempt_id` | Managed task attempt using the context. |
| `step_id` / `tool_call_id` | Runtime step or tool call that consumed context. |
| `action_id` | Human/policy action that requested more context. |
| `evidence_id` | Evidence pack or source map that references the context. |

## Test cases

| ID | Case | Input facts | Expected result |
| --- | --- | --- | --- |
| ACTX-AR-ID-001 | Turn context snapshot keeps ids | Context envelope for a submitted turn | Envelope preserves `session_id/thread_id/turn_id`; runtime can reference `context_id`. |
| ACTX-AR-ID-002 | Task context keeps attempt ids | Selection for task retry | Selection records preserve `task_id/run_id/attempt_id`; old attempt context is not overwritten. |
| ACTX-AR-SEL-001 | Selected vs omitted are explicit | Candidate context set exceeds budget | Selection records include selected and omitted items with reasons. |
| ACTX-AR-BUDGET-001 | Budget/window decision is traceable | Context window is constrained | Budget record explains truncation; runtime does not guess from prompt text. |
| ACTX-AR-ASM-001 | Injection is auditable | Model request uses assembled context | Assembly/injection record points to source refs and context item ids. |
| ACTX-AR-MISSING-001 | Missing context becomes requestable fact | Runtime cannot access needed file/source | Missing-context record includes owner, requested action, and safe user-facing summary. |
| ACTX-AR-COMPACT-001 | Compaction preserves boundary | Old thread is compacted | Summary references source window and does not replay old reasoning as final answer. |
| ACTX-AR-POLICY-001 | Redaction is a context fact with policy refs | Sensitive item is redacted | Context item preserves redaction reason and `policy_refs`; raw secret is not injected. |
| ACTX-AR-EVID-001 | Evidence can cite context refs | Evidence pack exports source map | Evidence refs point to context/source refs instead of copying all context payloads. |
| ACTX-AR-GOV-001 | Context does not own runtime status | Context event contains runtime ids | No context record declares turn completed, failed, approved, or tool succeeded. |

## Failure cases

These are incompatible with the boundary:

1. A context record declares task completion or tool success.
2. A missing-context record is converted into a permission approval without Agent Policy or runtime confirmation.
3. Compaction output is treated as final answer text.
4. Runtime ids are dropped, making evidence unable to join context to turn or task.
5. Redacted context is reintroduced through summaries, diagnostics, or UI projection.

## Minimum validation set

For Agent Runtime-compatible integration, run at least:

1. ACTX-AR-ID-001 and ACTX-AR-ID-002.
2. ACTX-AR-SEL-001, ACTX-AR-BUDGET-001, and ACTX-AR-ASM-001.
3. ACTX-AR-MISSING-001 and ACTX-AR-COMPACT-001.
4. ACTX-AR-POLICY-001 and ACTX-AR-EVID-001.

Runtime proves the turn/task state. Agent Context proves which context facts were available and why.
