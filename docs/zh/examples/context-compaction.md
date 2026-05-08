---
title: Context compaction
description: Agent Context Context compaction 示例。
---

# Context compaction

```json
{
  "compaction_id": "compact_session_12",
  "scope": "session",
  "source_item_refs": ["turn_1", "turn_2", "turn_3", "turn_4"],
  "summary_ref": "summary_session_12",
  "method": "rolling_summary",
  "trigger": "token_pressure",
  "coverage": { "items_covered": 4, "estimated_tokens_before": 12800, "estimated_tokens_after": 640 },
  "loss_notes": ["Exact wording of early brainstorming omitted", "Final decisions preserved"],
  "validation": { "status": "reviewed", "reviewer": "agent" },
  "replacement_policy": "summary_replaces_source_until_review_requested",
  "created_at": "2026-05-08T00:00:00Z"
}
```

The compaction record makes a shortened context window auditable.

> 示例字段保持英文，便于与 JSON Schema、LLM entrypoints 和实现代码对应。
