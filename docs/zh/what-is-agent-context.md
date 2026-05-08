---
title: 什么是 Agent Context
description: Agent Context 的定位与边界。
---

# 什么是 Agent Context

Agent Context 是 Agent 在某个工作时刻实际可用上下文的可移植契约。它位于“来源”和“执行”之间。

上下文来源可以是用户消息、系统提示、会话历史、工作记忆、持久记忆、知识包、文档摘录、文件摘录、Artifact、工具结果、浏览器状态、运行时状态、Policy note、Peer Agent 消息、外部资源或计算摘要。Agent Context 不拥有这些来源；它记录这些来源如何被暴露、选择、预算、组装、注入、压缩、摘要、遗漏、请求与脱敏。

## 核心边界

| 层 | 拥有什么 | 与 Agent Context 的关系 |
| --- | --- | --- |
| Runtime | 接收、调度、执行、暂停、恢复工作 | Context 记录执行使用的输入快照与注入事实 |
| UI | 展示消息、预览、控制、引用、review 面板 | Context 提供可解释的上下文、遗漏与缺失请求 |
| Tool | 声明和调用能力 | Context 记录工具可见或工具产出的上下文 |
| Policy | 决定权限、脱敏、保留、导出 | Context 链接 policy decision 并记录 redaction state |
| Evidence | review、verify、replay、export | Context 提供 selection、omission、compaction、injection 事实 |
| Artifact | 持久生成物及版本 | Context 可引用 artifact version 或 part 作为输入上下文 |
| Knowledge | source-grounded knowledge package | Context 记录本轮选择了哪些 knowledge item |
| Skills | 可执行方法与流程包 | Context 可把技能文档或资产作为数据引用，但不执行它们 |

## 设计原则

1. 保留来源系统、模型 API、工具与 peer-agent 协议的 native ids。
2. 把上下文选择与存储 / 检索分开。
3. 把 injected context 视为快照，而不是隐式副作用。
4. 对大体积、敏感或可变材料优先使用 refs。
5. 记录 omitted 与 missing context，而不只记录 selected context。
6. policy decision 不放进 Context 标准，只保留 policy refs。
7. compaction 必须可审计：来源、摘要、损失与验证都要可追踪。
8. 支持 model、tool、runtime、UI、user、reviewer、peer_agent 等不同可见目标。
