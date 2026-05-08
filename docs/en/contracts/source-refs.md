---
title: Source refs
description: Agent Context source refs contract.
---

# Source refs

A `context_source_ref` preserves where a context item came from and how to locate or verify it again.

## Selector types

Initial selector types: `text_quote`, `text_position`, `byte_range`, `line_range`, `json_pointer`, `css_selector`, `xpath`, `page_region`, `media_time_range`, `artifact_part`, `message_part`, and `custom`.

## Recommended fields

Use `source_id`, `uri`, `source_kind`, `selector`, `digest`, `authority`, `provenance_refs`, `external_mappings`, `license`, `retrieved_at`, and `modified_at`.

## Fixed rule

A source ref should remain useful after context is summarized, redacted, exported, or reviewed. If the original source cannot be shared, preserve a digest and a redacted locator.
