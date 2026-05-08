---
title: 生态边界
description: Agent Context 与相邻标准的边界。
---

# 生态边界

## Agent Context vs Agent Runtime

Runtime 拥有执行：接收、调度、排队、流式输出、暂停、恢复与控制。Context 拥有解释 runtime 工作使用了哪些上下文的输入与可见性事实。

## Agent Context vs Agent Knowledge

Knowledge 拥有持久、source-grounded 的知识资产。Context 拥有某个 turn 或 task 中对 knowledge items 的选择与注入记录。

## Agent Context vs Agent Tool

Tool 拥有能力与调用生命周期。Context 拥有工具可见信息、工具结果如何成为上下文、以及这些结果如何被选择或遗漏。

## Agent Context vs Agent Policy

Policy 拥有 allow / deny / approve / redact / retain 决策。Context 拥有 item、selection、assembly、injection、compaction 与 export 上的 redaction state 和 policy refs。

## Agent Context vs Agent Evidence

Evidence 拥有 review、verification、replay 与 export。Context 提供 source refs、selection、omission、compaction、injection 与 missing context 等审计事实。
