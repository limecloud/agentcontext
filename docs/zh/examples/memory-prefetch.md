---
title: Memory prefetch
description: Agent Context Memory prefetch 示例。
---

# Memory prefetch

```json
{
  "selection_id": "selection_memory_prefetch_7",
  "surface_id": "surface_turn_7",
  "query": "Summarize the launch plan and continue writing.",
  "selected_item_refs": ["wm_progress", "durable_brand_voice", "latest_compaction"],
  "omitted_item_refs": [
    { "item_ref": "old_task_log", "reason": "superseded_by_summary" },
    { "item_ref": "unrelated_preference", "reason": "low_relevance" }
  ],
  "ranking_signals": {
    "wm_progress": { "relevance": 0.92, "recency": 0.88 },
    "durable_brand_voice": { "relevance": 0.76, "authority": 0.81 }
  },
  "created_at": "2026-05-08T00:00:00Z"
}
```

Memory prefetch is a selection fact. It is not the memory store itself.

> 示例字段保持英文，便于与 JSON Schema、LLM entrypoints 和实现代码对应。
