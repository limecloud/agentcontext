---
title: Context envelope
description: Agent Context Context envelope 契约。
---

# Context envelope

## 定位

顶层快照用于回答这个 turn、task、tool invocation、review 或 handoff 关联了哪些上下文记录。它不是可变 memory store；上下文变化应通过事件或新快照表达。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
