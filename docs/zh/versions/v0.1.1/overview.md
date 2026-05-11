---
title: v0.1.1 概览
description: Agent Context v0.1.1 发布概览。
---

# Agent Context v0.1.1

Agent Context v0.1.1 是 patch release，用于让 Agent Context 能直接对 Agent Runtime profile facts 做测试，同时不把 runtime ownership 移入 context 标准。

## 重点

- 新增 runtime profile 测试用例，覆盖 context envelopes、selection、budgets、assemblies、missing-context records、compaction、redaction 与 evidence refs。
- 将互操作指南对齐 Agent Runtime events、thread read models、task snapshots 与 evidence packs。
- 在公共 event schema 中加入可选 runtime correlation 字段。
- 刷新 README、导航、LLM entrypoints、release notes、package metadata 与 v0.1.1 版本快照。
