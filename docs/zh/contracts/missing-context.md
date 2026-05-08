---
title: Missing context
description: Agent Context Missing context 契约。
---

# Missing context

## 定位

缺失上下文用于把已知缺口变成可处理事实，例如缺文件、缺权限、source stale、tool result 没有入模或 peer agent 等待输入。

## 推荐字段

实现应优先保留稳定 id、scope、created_at、source refs、policy refs、evidence refs、telemetry refs 与 metadata。字段名保持英文，以便与 JSON Schema、LLM entrypoints 和跨语言实现直接对应。

## 固定规则

- 保留 native ids，不要把外部协议身份吞并成只属于 Agent Context 的 id。
- 大体积、敏感、可变或二进制内容优先使用 refs。
- selected、omitted、assembled、injected、compacted、redacted 是不同状态，不能互相推断。
