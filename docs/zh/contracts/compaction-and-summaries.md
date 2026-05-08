---
title: Compaction and summaries
description: Agent Context Compaction and summaries 契约。
---

# Compaction and summaries

## 定位

压缩与摘要用于记录大上下文被 summary 或 digest 替换时的 source refs、coverage、loss notes、validation 与 refresh policy。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
