---
title: 实现分析摘要
description: 从 Agent context、memory、prompt assembly、tool 与 runtime 系统中提炼出的分析摘要。
---

# 实现分析摘要

Agent Context exists because modern agent systems do not have a single context source. A turn can combine session history, working memory, durable memory, knowledge snippets, artifacts, tool results, browser observations, runtime metadata, policy notes, and peer-agent messages.

## What existing standards already solve

MCP defines resources, prompts, roots, tools, and annotations. A2A defines peer-agent tasks, messages, artifacts, and context ids. OpenTelemetry defines trace and token telemetry. W3C PROV defines provenance relationships. Web Annotation defines selectors. CloudEvents defines portable events. JSON Schema defines validation.

## What agent products add

Agent products assemble all of those into a model or tool context window under budget pressure. They must decide what to include, omit, summarize, redact, and request from a user or peer. Native protocols do not all describe selection, omission, compaction, target-specific visibility, and missing-context facts the same way.

## Design conclusions

1. Preserve source identity rather than copying all content into prompts.
2. Separate available context, selected context, assembled context, and injected context.
3. Make omissions and missing context explicit.
4. Treat model-visible and tool-visible context as different targets.
5. Record budget pressure and truncation decisions.
6. Make compaction auditable through source refs, summary refs, coverage, and loss notes.
7. Link to policy and evidence rather than embedding their full models.
8. Keep context portable even when native systems use different prompt, resource, or memory mechanics.
