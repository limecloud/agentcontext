---
title: Selection and ranking
description: Agent Context Selection and ranking 契约。
---

# Selection and ranking

## 定位

选择与排序用于解释 candidate context 如何变成 selected 或 omitted context。omission reason 与 ranking signals 必须是一等事实。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
