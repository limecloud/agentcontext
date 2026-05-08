---
title: Agent 标准生态
description: Agent Knowledge、Agent UI、Agent Runtime、Agent Evidence、Agent Policy、Agent Artifact、Agent Tool 与 Agent Context 的互链。
---

# Agent 标准生态

Agent 标准生态把 Agent 产品拆成可移植契约。每个标准只拥有一层语义，并通过稳定 refs 连接其他标准，而不是吞并它们的职责。

## Agent Context 的位置

Agent Context 拥有可移植上下文事实：哪些上下文可用、被选择、被遗漏、被预算、被组装、被注入、被压缩、被摘要、仍然缺失、已被脱敏，以及如何链接到证据。

## 当前标准

| 标准 | 角色 | Site | LLM context | Repository |
| --- | --- | --- | --- | --- |
| Agent Knowledge | Source-grounded knowledge packs for agents. | [site](https://limecloud.github.io/agentknowledge/) | [llms-full](https://limecloud.github.io/agentknowledge/llms-full.txt) | [repo](https://github.com/limecloud/agentknowledge) |
| Agent UI | Interaction surfaces for agent products. | [site](https://limecloud.github.io/agentui/) | [llms-full](https://limecloud.github.io/agentui/llms-full.txt) | [repo](https://github.com/limecloud/agentui) |
| Agent Runtime | Execution facts, controls, tasks, tools, and recovery. | [site](https://limecloud.github.io/agentruntime/) | [llms-full](https://limecloud.github.io/agentruntime/llms-full.txt) | [repo](https://github.com/limecloud/agentruntime) |
| Agent Evidence | Evidence, provenance, verification, review, replay, and export. | [site](https://limecloud.github.io/agentevidence/) | [llms-full](https://limecloud.github.io/agentevidence/llms-full.txt) | [repo](https://github.com/limecloud/agentevidence) |
| Agent Policy | Risk, permission, approval, retention, waiver, access, and policy decision facts. | [site](https://limecloud.github.io/agentpolicy/) | [llms-full](https://limecloud.github.io/agentpolicy/llms-full.txt) | [repo](https://github.com/limecloud/agentpolicy) |
| Agent Artifact | Durable deliverables, versions, parts, previews, exports, source links, and handoff packages. | [site](https://limecloud.github.io/agentartifact/) | [llms-full](https://limecloud.github.io/agentartifact/llms-full.txt) | [repo](https://github.com/limecloud/agentartifact) |
| Agent Tool | Tool declarations, surfaces, invocations, progress, results, permissions, and audit refs. | [site](https://limecloud.github.io/agenttool/) | [llms-full](https://limecloud.github.io/agenttool/llms-full.txt) | [repo](https://github.com/limecloud/agenttool) |
| Agent Context | Context surfaces, items, source refs, selection, budgets, assembly, injection, compaction, and missing-context facts. | [site](https://limecloud.github.io/agentcontext/) | [llms-full](https://limecloud.github.io/agentcontext/llms-full.txt) | [repo](https://github.com/limecloud/agentcontext) |

## 边界规则

```text
Agent Knowledge -> Agent 可使用哪些持久、source-grounded 上下文
Agent Runtime   -> Agent 工作如何被接收、执行、控制与恢复
Agent UI        -> Agent 工作如何投影到用户可见表面
Agent Evidence  -> Agent 结果为何可信、如何 review、replay 与 export
Agent Policy    -> Agent action 是否允许继续以及约束是什么
Agent Artifact  -> Agent 生成了什么持久交付物以及它如何变化
Agent Tool      -> Agent 暴露、调用、推进并返回了什么能力
Agent Context   -> Agent 当前可用、选择、组装、压缩、缺失并注入了什么上下文
```

任何一个标准都不应该变成全栈。兼容实现应该保留 native ids，并通过 refs 连接相邻标准。
