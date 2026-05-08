---
title: Context items
description: Agent Context context items contract.
---

# Context items

A `context_item` is one unit of usable context. It can be text, structured data, a resource link, an artifact part, a tool result ref, a browser observation, a summary, or opaque referenced content.

## Required fields

| Field | Purpose |
| --- | --- |
| `item_id` | Stable item id. |
| `context_kind` | Semantic kind of the item. |
| `content_mode` | Inline, ref, summary, embedded resource, resource link, artifact ref, tool result ref, or opaque. |
| `visibility` | Targets allowed to see the item. |

## Recommended fields

Add `title`, `mime_type`, `language`, `source_refs`, `token_estimate`, `byte_size`, `freshness`, `trust_level`, `priority`, `sensitivity`, `redaction_state`, and `metadata`.

## Fixed rule

An item is context, not authority by itself. Authority comes from its source refs, provenance, freshness, and policy/evidence links.
