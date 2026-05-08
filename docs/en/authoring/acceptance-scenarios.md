---
title: Acceptance scenarios
description: Minimal scenarios for validating an Agent Context implementation.
---

# Acceptance Scenarios

## Turn snapshot

Given a user turn with session history, working memory, a knowledge snippet, and a tool result, the implementation exports a `context_envelope` with a surface, selected items, a budget, an assembly, and an injection record.

## Omitted context

Given five candidate snippets and a three-item budget, the implementation records the two omitted snippets and their omission reasons.

## Compaction

Given a long session replaced by a summary, the implementation records source item refs, summary content or summary ref, coverage, loss notes, and replacement policy.

## Tool-visible context

Given a tool that receives a resource ref not shown to the model, the implementation records a tool-targeted injection separate from model prompt injection.

## Missing context

Given a task blocked by a missing file, the implementation creates a `missing_context` record with severity, requested source, blocked action, and resolution status.

## Redaction

Given a selected item with private content, the implementation records redaction state, redaction method, policy refs, and a redacted assembly block.
