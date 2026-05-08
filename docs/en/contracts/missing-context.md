---
title: Missing context
description: Agent Context missing context contract.
---

# Missing context

`missing_context` turns known gaps into portable facts.

## Use cases

- The user asked about a file that is not loaded.
- A source exists but permission is missing.
- The selected context is stale.
- A tool result references an artifact that was not available to the model.
- A peer agent needs a document excerpt before continuing.

## Status values

Initial status values: `open`, `requested`, `waiting`, `resolved`, `declined`, `blocked`, and `expired`.

## Fixed rule

Do not hide uncertainty inside a final answer. If missing context materially affects work, record it and surface it to the system that can resolve it.
