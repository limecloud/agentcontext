# Agent Context

Agent Context is a portable draft standard for the context layer in agent systems: context surfaces, context items, source refs, selection and ranking, budget and window constraints, assembly and injection, compaction and summaries, missing-context records, policy refs, evidence refs, and telemetry refs.

It interoperates with MCP, Agent2Agent, OpenTelemetry, W3C PROV, W3C Web Annotation, CloudEvents, JSON Schema, Agent Runtime, Agent UI, Agent Policy, Agent Evidence, Agent Artifact, Agent Tool, Agent Knowledge, Agent Skills, memory stores, retrieval systems, and model APIs without taking ownership of those systems.

## What v0.1.0 defines

- Context envelopes that snapshot the context available to a turn, task, session, tool, or peer-agent handoff.
- Context surfaces and items for user messages, system prompts, session history, working memory, durable memory, knowledge snippets, artifact refs, tool results, browser state, runtime state, policy notes, and computed summaries.
- Source refs with selectors, digests, authority, provenance, and native protocol mappings.
- Selection, ranking, budget, and context-window records.
- Assembly and injection records that explain what actually became visible to a model, tool, UI, runtime, or peer agent.
- Compaction, summaries, omissions, missing-context requests, redaction, and lifecycle events.
- Public JSON Schemas and LLM-friendly `llms.txt` / `llms-full.txt` entrypoints.
- Runtime profile test cases that verify context envelopes, selection, assembly, compaction, missing-context records, and refs can be consumed by Agent Runtime without becoming runtime state.

## Documentation

- [Specification](docs/en/specification.md)
- [Context model](docs/en/concepts/context-model.md)
- [Context envelope](docs/en/contracts/context-envelope.md)
- [Context surface](docs/en/contracts/context-surface.md)
- [Context items](docs/en/contracts/context-items.md)
- [Selection and ranking](docs/en/contracts/selection-and-ranking.md)
- [Budget and window](docs/en/contracts/budget-and-window.md)
- [Assembly and injection](docs/en/contracts/assembly-and-injection.md)
- [Compaction and summaries](docs/en/contracts/compaction-and-summaries.md)
- [Missing context](docs/en/contracts/missing-context.md)
- [Runtime profile test cases](docs/en/authoring/runtime-profile-test-cases.md)
- [JSON Schemas](docs/en/reference/json-schemas.md)
- [Research sources](docs/en/reference/research-sources.md)
- [中文规范](docs/zh/specification.md)

## LLM entrypoints

- [`llms.txt`](llms.txt): concise navigation index for AI clients.
- [`llms-full.txt`](llms-full.txt): concatenated current English documentation with source URLs.
- [`llm.txt`](llm.txt) and [`llm-full.txt`](llm-full.txt): compatibility aliases.

## Related Agent standards

- [Agent Knowledge](https://limecloud.github.io/agentknowledge/) - source-grounded knowledge packs.
- [Agent UI](https://limecloud.github.io/agentui/) - interaction surfaces for agent products.
- [Agent Runtime](https://limecloud.github.io/agentruntime/) - execution facts, controls, tasks, tools, and recovery.
- [Agent Evidence](https://limecloud.github.io/agentevidence/) - evidence, provenance, verification, review, replay, and export.
- [Agent Policy](https://limecloud.github.io/agentpolicy/) - policy decisions, approvals, permissions, risk, retention, waivers, and traces.
- [Agent Artifact](https://limecloud.github.io/agentartifact/) - durable deliverables, versions, parts, previews, exports, and handoff packages.
- [Agent Tool](https://limecloud.github.io/agenttool/) - tool declarations, surfaces, invocations, progress, results, permissions, and audit refs.
- [Agent Context](https://limecloud.github.io/agentcontext/) - context surfaces, items, source refs, selection, budgets, assembly, injection, compaction, and missing-context facts.

See the [Agent standards ecosystem](docs/en/reference/agent-ecosystem.md) page for the mutual-link map and future standard candidates.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist`.
