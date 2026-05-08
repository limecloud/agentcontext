---
title: Implementation quickstart
description: Quickstart for implementing Agent Context.
---

# Implementation Quickstart

1. Inventory context sources and preserve their native ids.
2. Create `context_surface` records for each turn, task, tool call, review, or handoff boundary.
3. Normalize candidate units into `context_item` records with source refs, visibility, sensitivity, and token estimates.
4. Run selection and produce `context_selection` records for selected and omitted items.
5. Apply `context_budget` and `context_window` records before prompt or tool assembly.
6. Produce `context_assembly` records per target instead of assuming one prompt equals all context.
7. Produce `context_injection` records when assembled blocks become visible.
8. Record compaction sources, summaries, omissions, and missing-context requests.
9. Link policy, evidence, artifact, tool, runtime, UI, knowledge, and telemetry facts by refs.
10. Export `context_event` records so reviewers can replay how context changed.
