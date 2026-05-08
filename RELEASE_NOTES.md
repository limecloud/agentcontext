# Agent Context v0.1.0

Agent Context v0.1.0 is the first public draft of a portable context standard for agent systems.

## Added

- Defines context envelopes, surfaces, items, source refs, selection and ranking, budgets and windows, assembly and injection, compaction and summaries, missing-context records, policy/redaction refs, interoperability mappings, and lifecycle events.
- Adds public JSON Schemas for the core records.
- Adds English and Simplified Chinese documentation with versioned snapshots.
- Adds examples for turn context snapshots, memory prefetch, knowledge selection, context compaction, and missing-context requests.
- Adds LLM-friendly entrypoints: `llms.txt`, `llms-full.txt`, `llm.txt`, and `llm-full.txt`.

## Compatibility

This is an initial draft. Implementations should preserve native ids from MCP, A2A, model APIs, telemetry, provenance, annotation, runtime, UI, policy, evidence, artifact, tool, knowledge, and skill systems.
