---
layout: home
hero:
  name: Agent Context
  text: 面向 Agent 系统的可移植上下文标准
  tagline: 用 source refs、selection、budgets、assembly、injection、compaction 与 missing-context facts 解释 Agent 当下看见了什么。
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: LLM 完整上下文
      link: ../llms-full.txt
features:
  - title: 说明哪些上下文可用
    details: 用 context surface 与 source refs 表达用户消息、记忆、知识、产物、工具结果、浏览器状态和运行时状态，而不是把它们混成一个存储。
  - title: 说明为什么选中
    details: 用 selection、ranking、omission、token budget 和 context window 记录进入当前 turn 或 task 的选择依据。
  - title: 说明最终如何入模
    details: 用 assembly、injection、compaction、redaction、missing-context、evidence 与 telemetry refs 让最终上下文可复现、可审计。
---

# Agent Context

Agent Context 是 Agent 系统上下文层的可移植标准。它定义可用上下文如何被暴露、选择、预算、组装、注入、压缩、摘要、遗漏、请求、脱敏，并与证据关联；它不替代 runtime scheduler、memory store、retrieval system、UI renderer、tool protocol、policy engine、artifact store 或 knowledge package。

当一个产品需要回答“Agent 当时知道什么、来自哪里、为什么选了这一段、哪些没放进去、哪些被压缩、哪些被注入模型或工具、还缺什么上下文”时，就应该使用 Agent Context。

## 从这里开始

- [最新规范](specification)
- [Context 模型](concepts/context-model)
- [Runtime Profile 测试用例](authoring/runtime-profile-test-cases)
- [JSON Schemas](reference/json-schemas)
