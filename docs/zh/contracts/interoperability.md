---
title: Interoperability
description: Agent Context Interoperability 契约。
---

# Interoperability

## 定位

互操作用于Agent Context 通过 refs 保留 MCP、A2A、OpenTelemetry、W3C PROV、Web Annotation、CloudEvents 与 model APIs 的 native ids。

## Agent Runtime

当 Agent Context 被 Agent Runtime 兼容系统使用时，context records 应该被 `RuntimeEvent`、`ThreadReadModel`、`TaskSnapshot` 与 `EvidencePack` 引用，而不是复制成 runtime status。

| Agent Context fact | Runtime 关系 |
| --- | --- |
| Context envelope | `session_id/thread_id/turn_id` 可用上下文的 snapshot。 |
| Selection 与 budget records | 解释 context 为什么被 selected、omitted、truncated 或 deferred。 |
| Assembly 与 injection records | 解释哪些内容实际对 model、tool、UI、runtime 或 peer agent 可见。 |
| Missing-context records | 产生显式 missing facts 或 follow-up actions，但不变成 approval state。 |
| Compaction summaries | 保留 context boundaries 与 source refs，但不成为 final answer text。 |
| Policy/evidence refs | 让 Agent Policy 与 Agent Evidence 能把 context join 到 decisions 和 packs。 |

Agent Context MUST NOT 声明 turn completion、tool success、task status 或 permission grants。这些属于 runtime、tool、task 与 policy facts。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
