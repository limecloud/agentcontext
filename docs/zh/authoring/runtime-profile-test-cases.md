---
title: Runtime Profile 测试用例
description: 验证 Agent Runtime 兼容 turn 使用 Agent Context facts 的测试矩阵。
---

# Runtime Profile 测试用例

当 Agent Context 被 Agent Runtime、Lime AgentRuntime Profile 或等价 runtime 主链使用时，执行这些用例。目标是证明 context facts 可以被 runtime turns 引用，同时 Agent Context 不变成 runtime state owner。

## 标准边界

```text
ContextSurface / ContextItem / SourceRef / Selection / Assembly / Compaction / MissingContext
  -> RuntimeEvent、ThreadReadModel、TaskSnapshot 或 EvidencePack 上的 context refs
  -> Agent UI 与 Agent Evidence 消费 refs 和 summaries
```

Agent Context 拥有什么 context 可用、被选择、被组装、被注入、被省略、被压缩、被脱敏或缺失。Agent Runtime 拥有 turn status、task status、retry、tool execution、action wait 与 recovery。

## Runtime correlation fields

兼容 context events 和 envelopes SHOULD 在可用时保留这些 ids：

| Field | 作用 |
| --- | --- |
| `runtime_id` | Runtime installation 或 runtime instance。 |
| `session_id` | 请求 context 的 durable work container。 |
| `thread_id` | 有序执行上下文。 |
| `turn_id` | 发生 context selection 或 injection 的 turn。 |
| `task_id` / `run_id` / `attempt_id` | 使用 context 的 managed task attempt。 |
| `step_id` / `tool_call_id` | 消费 context 的 runtime step 或 tool call。 |
| `action_id` | 请求更多 context 的 human/policy action。 |
| `evidence_id` | 引用 context 的 evidence pack 或 source map。 |

## 测试用例

| ID | 用例 | 输入事实 | 期望结果 |
| --- | --- | --- | --- |
| ACTX-AR-ID-001 | Turn context snapshot 保留 ids | Submitted turn 的 context envelope | Envelope 保留 `session_id/thread_id/turn_id`；runtime 可引用 `context_id`。 |
| ACTX-AR-ID-002 | Task context 保留 attempt ids | Task retry 的 selection | Selection records 保留 `task_id/run_id/attempt_id`；旧 attempt context 不被覆盖。 |
| ACTX-AR-SEL-001 | Selected 与 omitted 显式区分 | Candidate context set 超出预算 | Selection records 包含 selected 与 omitted items 以及原因。 |
| ACTX-AR-BUDGET-001 | Budget/window decision 可追溯 | Context window 受限 | Budget record 解释截断；runtime 不从 prompt text 猜测。 |
| ACTX-AR-ASM-001 | Injection 可审计 | Model request 使用 assembled context | Assembly/injection record 指向 source refs 与 context item ids。 |
| ACTX-AR-MISSING-001 | Missing context 是可请求事实 | Runtime 无法访问所需 file/source | Missing-context record 包含 owner、requested action 与安全用户摘要。 |
| ACTX-AR-COMPACT-001 | Compaction 保留边界 | 旧 thread 被 compact | Summary 引用 source window，且不把旧 reasoning 重放为 final answer。 |
| ACTX-AR-POLICY-001 | Redaction 带 policy refs | 敏感 item 被 redacted | Context item 保留 redaction reason 与 `policy_refs`；raw secret 不被注入。 |
| ACTX-AR-EVID-001 | Evidence 可引用 context refs | Evidence pack 导出 source map | Evidence refs 指向 context/source refs，而不是复制所有 context payload。 |
| ACTX-AR-GOV-001 | Context 不拥有 runtime status | Context event 携带 runtime ids | Context record 不声明 turn completed、failed、approved 或 tool succeeded。 |

## 失败用例

以下情况违反边界：

1. Context record 声明 task completion 或 tool success。
2. Missing-context record 未经 Agent Policy 或 runtime confirmation 就被转换成 permission approval。
3. Compaction output 被当作 final answer text。
4. Runtime ids 丢失，导致 evidence 无法把 context join 到 turn 或 task。
5. Redacted context 通过 summaries、diagnostics 或 UI projection 被重新引入。

## Minimum validation set

对 Agent Runtime 兼容集成，至少执行：

1. ACTX-AR-ID-001 与 ACTX-AR-ID-002。
2. ACTX-AR-SEL-001、ACTX-AR-BUDGET-001 与 ACTX-AR-ASM-001。
3. ACTX-AR-MISSING-001 与 ACTX-AR-COMPACT-001。
4. ACTX-AR-POLICY-001 与 ACTX-AR-EVID-001。

Runtime 证明 turn/task state。Agent Context 证明哪些 context facts 可用以及为什么。
