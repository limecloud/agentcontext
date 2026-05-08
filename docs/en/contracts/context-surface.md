---
title: Context surface
description: Agent Context context surface contract.
---

# Context surface

A `context_surface` describes what context was available before a selection decision. It is the context equivalent of a tool surface: small enough to reason about, large enough to explain omissions.

## Fields

A surface SHOULD include `surface_id`, `scope`, `producer`, `available_source_refs`, `available_item_refs`, `capability_refs`, `policy_refs`, `visibility`, `created_at`, `expires_at`, and `metadata`.

## Surface kinds

- `turn_surface`
- `task_surface`
- `session_surface`
- `tool_surface`
- `review_surface`
- `handoff_surface`
- `custom`

## Fixed rule

Do not expose the whole world as a surface. Large catalogs should be represented through discovery, search, retrieval, or deferred source refs.
