---
title: Policy and redaction
description: Agent Context Policy and redaction 契约。
---

# Policy and redaction

## 定位

策略与脱敏用于Context 记录 policy 相关事实，但不做 policy decision。redacted context 不应被当成原上下文。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
