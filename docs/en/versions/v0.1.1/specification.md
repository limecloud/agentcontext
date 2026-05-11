---
title: v0.1.1 specification
description: Agent Context v0.1.1 specification snapshot.
---

# Specification

Agent Context latest draft is a portable standard for context surfaces, context items, source refs, selection and ranking, budget and window records, assembly and injection, compaction and summaries, missing-context records, policy refs, evidence refs, telemetry refs, and context lifecycle events.

Agent Context owns context semantics. It does not own memory storage, retrieval indexes, prompt templates, model APIs, runtime queues, tool execution, UI rendering, policy decisions, evidence archives, artifact lifecycle, knowledge package authoring, or skill execution.

## Scope

Agent Context standardizes these implementation concerns:

1. Context envelopes with stable identity, scope, lifecycle, actor refs, runtime refs, policy refs, evidence refs, and telemetry refs.
2. Context surfaces that describe the set of context candidates available before selection.
3. Context items with kind, content mode, source refs, token estimates, freshness, trust, sensitivity, and redaction state.
4. Source refs with URI, selectors, digests, authority, provenance links, and native protocol mappings.
5. Selection and ranking records for candidates, selected items, omitted items, reasons, and scorer signals.
6. Budget and context-window records for tokens, bytes, items, reserved segments, overflow, and truncation.
7. Assembly and injection records that show the exact ordered blocks visible to a target.
8. Compaction and summary records that preserve source coverage, replacement facts, loss notes, and refresh policy.
9. Missing-context records that make known unknowns actionable.
10. Event classes for surface, item, selection, budget, assembly, injection, compaction, missing-context, redaction, and export changes.
11. Runtime profile linkage tests that prove context facts can be referenced by Agent Runtime without becoming runtime status, task state, tool success, or approval state.

Agent Context does **not** define a new retrieval engine, vector database, memory store, prompt language, runtime scheduler, UI component library, authorization engine, evidence archive, or artifact format.

## Core objects

| Object | Purpose |
| --- | --- |
| `context_envelope` | Portable snapshot for a turn, task, session, tool call, review, or handoff. |
| `context_surface` | Candidate context available in a scope before selection. |
| `context_item` | Inline or referenced unit of context. |
| `context_source_ref` | Origin, selector, digest, authority, and native mapping. |
| `context_selection` | Candidate, selected, omitted, ranking, and rationale facts. |
| `context_budget` | Token, byte, item, time, and visibility limits plus actual usage. |
| `context_window` | Ordered window layout and reserved segments for a target. |
| `context_assembly` | Ordered context blocks prepared for a target. |
| `context_injection` | Record of where assembled context became visible. |
| `context_compaction` | Replacement of larger context with a shorter summary or digest. |
| `context_summary` | Summary content, coverage, loss notes, validation, and refresh policy. |
| `missing_context` | Known gaps, blockers, questions, and requested sources. |
| `context_event` | Lifecycle event envelope for context operations. |

## Context envelope

Every exported `context_envelope` SHOULD include:

| Field | Requirement |
| --- | --- |
| `schema_version` | Required Agent Context schema version. |
| `context_id` | Required stable id for this context snapshot. |
| `scope` | Required scope: `turn`, `task`, `session`, `tool_invocation`, `review`, `handoff`, or `custom`. |
| `lifecycle` | Required lifecycle state. |
| `created_at` | Required timestamp. |
| `producer` | Recommended producer id and version. |
| `actor_refs` | Recommended user, agent, model, peer, or service actors. |
| `runtime_refs` | Recommended session, thread, turn, task, queue, or execution refs. |
| `surface_refs` | Recommended refs to `context_surface` records. |
| `item_refs` | Recommended refs to selected or injected context items. |
| `selection_refs` | Recommended refs to selection records. |
| `budget_ref` | Recommended ref to the budget/window decision. |
| `assembly_refs` | Recommended refs to target-specific assemblies. |
| `injection_refs` | Recommended refs to target-specific injections. |
| `compaction_refs` | Recommended when summary or compaction affects this context. |
| `missing_context_refs` | Recommended when context gaps are known. |
| `policy_refs` | Recommended when permissions, redaction, retention, or export rules apply. |
| `evidence_refs` | Recommended when the context is reviewed, replayed, exported, or audited. |
| `telemetry_refs` | Recommended trace/span/log/metric correlation refs. |

## Lifecycle

Context records SHOULD use these lifecycle states:

| State | Meaning |
| --- | --- |
| `draft` | Being assembled or not yet final. |
| `available` | Candidate context exists but has not necessarily been selected. |
| `selected` | Chosen for a scope before final budget or assembly. |
| `assembled` | Ordered into a target-specific structure. |
| `injected` | Made visible to a model, tool, UI, runtime, user, reviewer, or peer agent. |
| `compacted` | Replaced by summary or digest. |
| `redacted` | Sensitive portions removed or masked. |
| `expired` | No longer valid because freshness, retention, or source state changed. |
| `archived` | Kept only for historical or audit use. |

## Context items

A `context_item` SHOULD include `item_id`, `context_kind`, `title`, `content_mode`, `content`, `content_ref`, `mime_type`, `language`, `source_refs`, `token_estimate`, `byte_size`, `freshness`, `trust_level`, `sensitivity`, `redaction_state`, `visibility`, `priority`, `created_at`, and `metadata`.

`content_mode` SHOULD be one of:

- `inline`
- `ref`
- `summary`
- `embedded_resource`
- `resource_link`
- `artifact_ref`
- `tool_result_ref`
- `opaque`

Large, mutable, private, or binary content SHOULD be referenced rather than embedded.

## Source refs

A `context_source_ref` SHOULD preserve source identity with `source_id`, `uri`, `source_kind`, `selector`, `digest`, `authority`, `provenance_refs`, `external_mappings`, `license`, `retrieved_at`, `modified_at`, and `metadata`.

Selectors MAY use text quote, text position, byte range, line range, JSON Pointer, CSS selector, XPath, page region, media time range, or custom selector types. Implementations SHOULD keep selectors stable enough for evidence review and replay.

## Selection and ranking

A `context_selection` SHOULD include `selection_id`, `surface_id`, `query`, `intent`, `candidate_item_refs`, `selected_item_refs`, `omitted_item_refs`, `ranking_signals`, `selection_policy`, `budget_ref`, `rationale`, `actor_ref`, `model_ref`, `created_at`, and `metadata`.

Omitted context is first-class. If an item was available but not selected, the selection record SHOULD say whether it was omitted because of budget, low relevance, stale source, policy block, duplicate coverage, unsupported media, privacy risk, or missing permission.

## Budget and window

A `context_budget` SHOULD include `budget_id`, `target`, `max_tokens`, `reserved_tokens`, `max_bytes`, `max_items`, `actual_tokens`, `actual_bytes`, `actual_items`, `overflow_strategy`, `truncation_records`, `window_segments`, and `created_at`.

Initial `overflow_strategy` values:

- `reject`
- `truncate_tail`
- `truncate_middle`
- `summarize_oldest`
- `summarize_low_priority`
- `defer_to_retrieval`
- `ask_for_choice`
- `policy_block`
- `custom`

## Assembly and injection

A `context_assembly` SHOULD include `assembly_id`, `target`, `ordered_blocks`, `wrapping_policy`, `separator_policy`, `visibility`, `budget_ref`, `source_item_refs`, `redaction_state`, and `created_at`.

A `context_injection` SHOULD include `injection_id`, `assembly_id`, `target`, `injection_point`, `native_id`, `visibility`, `final_ref`, `hash`, `created_at`, and `metadata`.

Initial `injection_point` values:

- `system_prompt`
- `developer_prompt`
- `message_history`
- `user_message_appendix`
- `tool_argument`
- `tool_visible_resource`
- `runtime_metadata`
- `ui_panel`
- `review_export`
- `peer_agent_message`
- `artifact_input`
- `custom`

## Compaction and summaries

A `context_compaction` SHOULD include `compaction_id`, `scope`, `source_item_refs`, `summary_ref`, `method`, `trigger`, `coverage`, `loss_notes`, `validation`, `replacement_policy`, `created_at`, and `metadata`.

Initial `method` values:

- `extractive_summary`
- `abstractive_summary`
- `structured_digest`
- `rolling_summary`
- `semantic_memory_update`
- `human_curated_summary`
- `provider_context_editing`
- `custom`

Compaction SHOULD never silently erase source context. It should record what was replaced, why, how to refresh it, and what uncertainty or losses were introduced.

## Missing context

A `missing_context` record SHOULD include `missing_id`, `scope`, `question`, `needed_for`, `severity`, `candidate_sources`, `blocked_actions`, `requested_from`, `status`, `resolution_refs`, `created_at`, and `metadata`.

Initial `severity` values:

- `info`
- `low`
- `medium`
- `high`
- `blocking`

A compatible UI, runtime, or peer-agent bridge MAY turn `missing_context` into a user question, retrieval request, tool invocation, policy request, or peer-agent task.

## Policy and redaction

Agent Context records policy facts; it does not make policy decisions. Context records SHOULD link to policy decisions through `policy_refs` and record `sensitivity`, `retention_hint`, `redaction_state`, `redaction_method`, and `redacted_by` where relevant.

Initial `redaction_state` values:

- `none`
- `masked`
- `removed`
- `summarized`
- `encrypted_ref`
- `policy_blocked`
- `unknown`

## External mappings

Agent Context SHOULD preserve native ids instead of replacing them.

| Native source | Mapping fields |
| --- | --- |
| MCP | `server_id`, `mcp_session_id`, `resource_uri`, `resource_template`, `prompt_name`, `root_uri`, `jsonrpc_request_id`. |
| A2A | `agent_card_url`, `task_id`, `context_id`, `message_id`, `part_id`, `artifact_id`, `skill_id`. |
| OpenTelemetry | `trace_id`, `span_id`, `event_name`, `conversation_id`, `system`, `operation_name`, `token_usage`. |
| Model API | `response_id`, `message_id`, `prompt_cache_key`, `tool_call_id`, `input_tokens`, `cached_input_tokens`. |
| Web Annotation | `target`, `selector_type`, `start`, `end`, `exact`, `prefix`, `suffix`. |
| W3C PROV | `entity`, `activity`, `agent`, `wasDerivedFrom`, `wasAttributedTo`, `wasGeneratedBy`. |
| CloudEvents | `id`, `source`, `type`, `subject`, `time`, `datacontenttype`. |
| JSON Schema | `$id`, `$schema`, `$ref`, `type`, `properties`, `required`, `additionalProperties`. |

## Event classes

Compatible implementations SHOULD emit or export these event classes:

- `context.surface.created`
- `context.surface.updated`
- `context.item.added`
- `context.item.updated`
- `context.item.removed`
- `context.selection.started`
- `context.selection.completed`
- `context.budget.applied`
- `context.assembly.created`
- `context.injection.applied`
- `context.compaction.started`
- `context.compaction.completed`
- `context.summary.created`
- `context.missing.detected`
- `context.missing.requested`
- `context.missing.resolved`
- `context.redaction.applied`
- `context.exported`

## Compatibility requirements

A compatible Agent Context implementation SHOULD:

1. Export context envelopes for important turns, tasks, tool calls, and handoffs.
2. Preserve native source ids and protocol ids.
3. Record both selected and omitted context where selection is non-trivial.
4. Record token or size budgets whenever context is constrained.
5. Record assembly and injection targets separately.
6. Record compaction sources and summary replacement facts.
7. Record missing context when the agent knows an input gap affects quality or safety.
8. Link policy, evidence, artifact, tool, runtime, UI, knowledge, and telemetry facts by refs rather than embedding entire foreign objects.
