# Changelog

## Unreleased

## v0.1.1 - 2026-05-11

### Added

- Adds Agent Runtime profile test cases in English and Simplified Chinese, covering context ids, selection, budget, assembly, missing-context, compaction, redaction, and evidence refs.

### Changed

- Aligns interoperability guidance with Agent Runtime `RuntimeEvent`, `ThreadReadModel`, `TaskSnapshot`, and `EvidencePack` references.
- Extends the Agent Context event schema with optional runtime correlation fields such as `runtime_id`, `session_id`, `thread_id`, `turn_id`, `task_id`, `run_id`, `attempt_id`, `step_id`, `tool_call_id`, `action_id`, and `evidence_id`.


## v0.1.0 - 2026-05-08

### Added

- Initial Agent Context draft standard.
- English and Simplified Chinese documentation site.
- Core contracts for context envelopes, surfaces, items, source refs, selection, budget/window, assembly/injection, compaction/summaries, missing context, policy/redaction, interoperability, and events.
- Public JSON Schemas under `docs/public/schemas/`.
- Examples for turn snapshots, memory prefetch, knowledge selection, context compaction, and missing-context requests.
- LLM entrypoints: `llms.txt`, `llms-full.txt`, `llm.txt`, and `llm-full.txt`.
