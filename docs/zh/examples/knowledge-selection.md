---
title: Knowledge selection
description: Agent Context Knowledge selection 示例。
---

# Knowledge selection

```json
{
  "item_id": "item_knowledge_pricing_claim",
  "context_kind": "knowledge_pack_item",
  "title": "Approved pricing claim",
  "content_mode": "ref",
  "content_ref": "knowledge://acme-product/compiled/pricing#claim-12",
  "source_refs": [
    {
      "source_id": "source_pricing_doc",
      "uri": "knowledge://acme-product/documents/pricing.md",
      "selector": { "type": "text_position", "start": 1204, "end": 1388 },
      "digest": "sha256:example"
    }
  ],
  "visibility": ["model", "reviewer"],
  "trust_level": "official",
  "token_estimate": 78
}
```

Agent Knowledge owns the knowledge artifact. Agent Context records the selected knowledge item and source anchor for this turn.

> 示例字段保持英文，便于与 JSON Schema、LLM entrypoints 和实现代码对应。
