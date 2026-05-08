---
title: Compaction and summaries
description: Agent Context compaction and summaries contract.
---

# Compaction and summaries

A `context_compaction` records when original context is replaced by a shorter summary or structured digest.

## Summary contract

A `context_summary` SHOULD include `summary_id`, `summary_kind`, `content`, `source_item_refs`, `coverage`, `loss_notes`, `open_questions`, `freshness`, `validation`, and `refresh_policy`.

## Triggers

Initial triggers: `manual`, `token_pressure`, `session_length`, `task_boundary`, `handoff`, `retention`, `privacy`, `provider_context_editing`, and `custom`.

## Fixed rule

A compaction is safe only if reviewers can tell what it replaced, what it preserved, what it lost, and when it should be refreshed.
