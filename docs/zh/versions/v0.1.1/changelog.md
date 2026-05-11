---
title: v0.1.1 变更记录
description: Agent Context v0.1.1 变更记录。
---

# v0.1.1 变更记录

## Added

- 新增英文与简体中文 Agent Runtime profile 测试用例，覆盖 context ids、selection、budget、assembly、missing-context、compaction、redaction 与 evidence refs。

## Changed

- 将互操作指南对齐 Agent Runtime `RuntimeEvent`、`ThreadReadModel`、`TaskSnapshot` 与 `EvidencePack` 引用。
- 扩展 Agent Context event schema，加入可选 runtime correlation 字段，如 `runtime_id`、`session_id`、`thread_id`、`turn_id`、`task_id`、`run_id`、`attempt_id`、`step_id`、`tool_call_id`、`action_id` 与 `evidence_id`。
