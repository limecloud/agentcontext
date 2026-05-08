---
title: Budget and window
description: Agent Context Budget and window 契约。
---

# Budget and window

## 定位

预算与窗口用于记录 token、byte、item、time 或 visibility 约束，以及目标上下文窗口的实际使用与截断决策。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
