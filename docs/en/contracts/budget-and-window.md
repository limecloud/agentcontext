---
title: Budget and window
description: Agent Context budget and window contract.
---

# Budget and window

A `context_budget` records the constraints applied to a target context window.

## Budget dimensions

Use token budgets when models are the target, byte budgets when resources or exports are the target, item budgets when UI or tool surfaces are the target, and time budgets when retrieval or peer-agent context gathering is bounded.

## Window segments

A window segment SHOULD include `segment_id`, `role`, `target`, `reserved_tokens`, `actual_tokens`, `item_refs`, `order`, and `truncation_records`.

## Fixed rule

Budget decisions should be reproducible. Record both the limit and the measured usage estimate available at the time.
