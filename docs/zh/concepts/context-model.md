---
title: Context 模型
description: Agent Context 的对象模型与生命周期。
---

# Context 模型

Agent Context 使用一条简单生命周期：

```text
sources -> context_surface -> context_selection -> context_budget -> context_assembly -> context_injection -> context_evidence
                              |                     |
                              v                     v
                         missing_context       context_compaction
```

## 核心对象

| 对象 | 作用 |
| --- | --- |
| `context_envelope` | turn、task、session、tool call、review 或 handoff 的上下文快照 |
| `context_surface` | selection 之前可用的候选上下文 |
| `context_item` | inline 或 ref 形式的上下文单元 |
| `context_source_ref` | item 的来源、selector、digest、authority 与 native mapping |
| `context_selection` | candidates、selected、omitted、ranking 与 rationale |
| `context_budget` | token、byte、item、time 与 visibility 限制 |
| `context_window` | 面向目标的有序上下文窗口 |
| `context_assembly` | 为目标组装的有序 block |
| `context_injection` | 上下文在某个目标上变为可见的记录 |
| `context_compaction` | 用 summary 或 digest 替换更大上下文的记录 |
| `missing_context` | 已知缺口、阻塞项、问题与待请求来源 |
| `context_event` | surface、selection、budget、injection、compaction、redaction、export 等事件 |
