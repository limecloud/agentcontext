---
title: Turn context snapshot
description: Agent Context Turn context snapshot 示例。
---

# Turn context snapshot

```json
{
  "schema_version": "0.1.0",
  "context_id": "ctx_turn_01HZ",
  "scope": "turn",
  "lifecycle": "injected",
  "runtime_refs": [{ "kind": "turn", "id": "turn_42" }],
  "surface_refs": ["surface_turn_42"],
  "item_refs": ["item_user_1", "item_history_summary", "item_policy_note"],
  "selection_refs": ["selection_turn_42"],
  "budget_ref": "budget_turn_42",
  "assembly_refs": ["assembly_model_42"],
  "injection_refs": ["inject_system_prompt_42"],
  "created_at": "2026-05-08T00:00:00Z"
}
```

This envelope does not embed the whole prompt. It points to the records that explain how prompt context was selected and injected.

> 示例字段保持英文，便于与 JSON Schema、LLM entrypoints 和实现代码对应。
