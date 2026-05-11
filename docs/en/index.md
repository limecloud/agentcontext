---
layout: home
hero:
  name: Agent Context
  text: Portable context semantics for agent systems
  tagline: Source refs, selection, budgets, assembly, injection, compaction, and missing-context facts for model, tool, runtime, UI, and peer-agent boundaries.
  actions:
    - theme: brand
      text: Read the specification
      link: /en/specification
    - theme: alt
      text: LLM full context
      link: ../llms-full.txt
features:
  - title: Explain what was available
    details: Context surfaces and source refs make user messages, memory, knowledge, artifacts, tool results, browser state, and runtime state discoverable without merging them into one store.
  - title: Explain what was selected
    details: Selection, ranking, omission, token budgets, and window records show why specific context entered a turn or task.
  - title: Explain what was injected
    details: Assembly, injection, compaction, redaction, missing-context, evidence, and telemetry refs make final context reproducible and auditable.
---

# Agent Context

Agent Context is a portable standard for the context layer in agent systems. It defines how available context is surfaced, selected, budgeted, assembled, injected, compacted, summarized, omitted, requested, redacted, and linked to evidence without replacing runtime schedulers, memory stores, retrieval systems, UI renderers, tool protocols, policy engines, artifact stores, or knowledge packages.

Use Agent Context when a product needs to answer: what did the agent know, where did it come from, why was this slice selected, what was left out, what was compacted, what was injected into a model or tool, and what context is still missing?

## Start here

- [Latest specification](specification)
- [Context model](concepts/context-model)
- [Runtime profile test cases](authoring/runtime-profile-test-cases)
- [JSON Schemas](reference/json-schemas)
