---
title: v0.1.1 changelog
description: Agent Context v0.1.1 changelog.
---

# v0.1.1 Changelog

### Added

- Adds Agent Runtime profile test cases in English and Simplified Chinese, covering context ids, selection, budget, assembly, missing-context, compaction, redaction, and evidence refs.

### Changed

- Aligns interoperability guidance with Agent Runtime `RuntimeEvent`, `ThreadReadModel`, `TaskSnapshot`, and `EvidencePack` references.
- Extends the Agent Context event schema with optional runtime correlation fields such as `runtime_id`, `session_id`, `thread_id`, `turn_id`, `task_id`, `run_id`, `attempt_id`, `step_id`, `tool_call_id`, `action_id`, and `evidence_id`.
