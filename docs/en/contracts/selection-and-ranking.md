---
title: Selection and ranking
description: Agent Context selection and ranking contract.
---

# Selection and ranking

A `context_selection` explains how candidate context became selected or omitted context.

## Ranking signals

Common signals include `relevance`, `recency`, `authority`, `user_pin`, `policy_allow`, `freshness`, `coverage`, `dedupe_score`, `token_cost`, `sensitivity`, `tool_visibility`, and `runtime_need`.

## Omission reasons

Initial omission reasons: `budget_limit`, `low_relevance`, `duplicate`, `stale`, `policy_blocked`, `permission_missing`, `unsupported_media`, `too_large`, `sensitive`, `superseded_by_summary`, `not_visible_to_target`, and `custom`.

## Fixed rule

If an omitted item would reasonably change the answer, the selection should either record a high-impact omission or create a `missing_context` record.
