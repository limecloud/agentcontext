---
title: Missing context request
description: Agent Context Missing context request 示例。
---

# Missing context request

```json
{
  "missing_id": "missing_customer_pdf",
  "scope": "turn",
  "question": "The task references the customer's signed PDF, but no PDF or extracted text is available.",
  "needed_for": "verify contractual constraints before drafting the response",
  "severity": "blocking",
  "candidate_sources": [
    { "kind": "file", "hint": "customer agreement PDF" },
    { "kind": "artifact", "hint": "latest contract extraction" }
  ],
  "blocked_actions": ["final_answer", "artifact_export"],
  "requested_from": "user",
  "status": "requested",
  "created_at": "2026-05-08T00:00:00Z"
}
```

Missing context can drive a UI question, retrieval action, tool request, or peer-agent handoff.

> 示例字段保持英文，便于与 JSON Schema、LLM entrypoints 和实现代码对应。
