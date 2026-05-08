---
title: Source refs
description: Agent Context Source refs 契约。
---

# Source refs

## 定位

来源引用用于保留 context item 的来源、定位、selector、digest、authority 与 native mapping，使 context 在 summary、redaction、export 或 review 后仍可追踪。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
