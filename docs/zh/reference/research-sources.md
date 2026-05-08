---
title: 调研来源
description: Agent Context 草案使用的外部参考。
---

# 调研来源

Agent Context v0.1.0 参考既有的 context、resource、eventing、telemetry、provenance、annotation 与 validation 标准。这些来源只影响标准形态，不转移 Agent Context 的语义所有权。

| Source | What Agent Context takes from it |
| --- | --- |
| [Model Context Protocol resources specification](https://modelcontextprotocol.io/specification/2025-11-25/server/resources) | Resource discovery, resource URIs, resource templates, resource links, annotations, and read/list boundaries for context sources. |
| [Model Context Protocol roots specification](https://modelcontextprotocol.io/specification/2025-11-25/client/roots) | Root boundaries for filesystem and workspace context. |
| [Model Context Protocol prompts specification](https://modelcontextprotocol.io/specification/2025-11-25/server/prompts) | Prompt arguments, reusable prompt surfaces, and context-producing prompt templates. |
| [Agent2Agent Protocol](https://a2a-protocol.org/latest/specification/) | Peer-agent task context ids, messages, parts, artifacts, agent cards, and skills as native handoff mappings. |
| [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | Trace/span correlation, operation names, prompt events, token usage, and conversation/session telemetry refs. |
| [W3C PROV Data Model](https://www.w3.org/TR/prov-dm/) | Entity, activity, agent, derivation, attribution, and generation concepts for context provenance. |
| [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/) | Targets and selectors for precise source anchoring, including text position and text quote selectors. |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | Portable event envelope fields such as `id`, `source`, `specversion`, `type`, `subject`, `time`, and content metadata. |
| [JSON Schema 2020-12](https://json-schema.org/draft/2020-12/json-schema-core) | Structural schema vocabulary and validation vocabulary for public schemas. |
| [Agent Skills](https://agentskills.io/) | AI-friendly authoring style, progressive disclosure, and package-versus-runtime boundary discipline. |
