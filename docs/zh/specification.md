---
title: 规范
description: 最新 Agent Context 草案规范。
---

# 规范

Agent Context 最新草案是一套可移植标准，用于表达 context surfaces、context items、source refs、selection and ranking、budget and window、assembly and injection、compaction and summaries、missing-context records、policy refs、evidence refs、telemetry refs 与 context lifecycle events。

Agent Context 拥有“上下文语义”。它不拥有 memory storage、retrieval indexes、prompt templates、model APIs、runtime queues、tool execution、UI rendering、policy decisions、evidence archives、artifact lifecycle、knowledge package authoring 或 skill execution。

## 范围

Agent Context 标准化以下实现问题：

1. 用稳定 identity、scope、lifecycle、actor refs、runtime refs、policy refs、evidence refs 与 telemetry refs 表达 context envelopes。
2. 用 context surfaces 描述 selection 之前可用的候选上下文集合。
3. 用 context items 表达 kind、content mode、source refs、token estimates、freshness、trust、sensitivity 与 redaction state。
4. 用 source refs 保留 URI、selectors、digests、authority、provenance links 与 native protocol mappings。
5. 用 selection and ranking records 记录 candidates、selected items、omitted items、reasons 与 scorer signals。
6. 用 budget and context-window records 记录 tokens、bytes、items、reserved segments、overflow 与 truncation。
7. 用 assembly and injection records 说明哪些有序 blocks 对哪个 target 可见。
8. 用 compaction and summary records 保留 source coverage、replacement facts、loss notes 与 refresh policy。
9. 用 missing-context records 把已知缺口变成可处理事实。
10. 用事件类别表达 surface、item、selection、budget、assembly、injection、compaction、missing-context、redaction 与 export 的变化。

Agent Context **不**定义新的 retrieval engine、vector database、memory store、prompt language、runtime scheduler、UI component library、authorization engine、evidence archive 或 artifact format。

## 核心对象

| 对象 | 作用 |
| --- | --- |
| `context_envelope` | turn、task、session、tool call、review 或 handoff 的可移植快照。 |
| `context_surface` | 某个 scope 下 selection 之前可用的候选上下文。 |
| `context_item` | inline 或 referenced 的上下文单元。 |
| `context_source_ref` | origin、selector、digest、authority 与 native mapping。 |
| `context_selection` | candidate、selected、omitted、ranking 与 rationale facts。 |
| `context_budget` | token、byte、item、time 与 visibility limits 以及实际使用量。 |
| `context_window` | 面向 target 的有序窗口布局与预留 segment。 |
| `context_assembly` | 为某个 target 准备的有序上下文 blocks。 |
| `context_injection` | assembled context 在何处变为可见的记录。 |
| `context_compaction` | 用更短 summary 或 digest 替换大上下文。 |
| `context_summary` | summary content、coverage、loss notes、validation 与 refresh policy。 |
| `missing_context` | 已知 gaps、blockers、questions 与 requested sources。 |
| `context_event` | context 操作的生命周期事件 envelope。 |

## Context envelope

每个导出的 `context_envelope` 应包含：

| 字段 | 要求 |
| --- | --- |
| `schema_version` | 必填，Agent Context schema version。 |
| `context_id` | 必填，此 context snapshot 的稳定 id。 |
| `scope` | 必填：`turn`、`task`、`session`、`tool_invocation`、`review`、`handoff` 或 `custom`。 |
| `lifecycle` | 必填，生命周期状态。 |
| `created_at` | 必填，时间戳。 |
| `producer` | 推荐，producer id 与 version。 |
| `actor_refs` | 推荐，user、agent、model、peer 或 service actors。 |
| `runtime_refs` | 推荐，session、thread、turn、task、queue 或 execution refs。 |
| `surface_refs` | 推荐，指向 `context_surface`。 |
| `item_refs` | 推荐，指向 selected 或 injected context items。 |
| `selection_refs` | 推荐，指向 selection records。 |
| `budget_ref` | 推荐，指向 budget/window decision。 |
| `assembly_refs` | 推荐，指向 target-specific assemblies。 |
| `injection_refs` | 推荐，指向 target-specific injections。 |
| `compaction_refs` | 当 summary 或 compaction 影响当前 context 时推荐。 |
| `missing_context_refs` | 当存在已知 context gaps 时推荐。 |
| `policy_refs` | 当 permission、redaction、retention 或 export rules 生效时推荐。 |
| `evidence_refs` | 当 context 被 review、replay、export 或 audit 时推荐。 |
| `telemetry_refs` | 推荐，trace/span/log/metric correlation refs。 |

## 生命周期

Context records 应使用这些生命周期状态：

| 状态 | 含义 |
| --- | --- |
| `draft` | 正在组装，尚未最终确定。 |
| `available` | 候选上下文存在，但不一定被选中。 |
| `selected` | 已为某个 scope 选中，但可能还未预算或组装。 |
| `assembled` | 已按 target-specific 结构排序。 |
| `injected` | 已对 model、tool、UI、runtime、user、reviewer 或 peer agent 可见。 |
| `compacted` | 已被 summary 或 digest 替换。 |
| `redacted` | 敏感部分已被移除或遮蔽。 |
| `expired` | 因 freshness、retention 或 source state 改变而失效。 |
| `archived` | 仅用于历史或审计。 |

## Context items

`context_item` 应包含 `item_id`、`context_kind`、`title`、`content_mode`、`content`、`content_ref`、`mime_type`、`language`、`source_refs`、`token_estimate`、`byte_size`、`freshness`、`trust_level`、`sensitivity`、`redaction_state`、`visibility`、`priority`、`created_at` 与 `metadata`。

`content_mode` 应为：`inline`、`ref`、`summary`、`embedded_resource`、`resource_link`、`artifact_ref`、`tool_result_ref` 或 `opaque`。

大体积、可变、私密或二进制内容应优先用引用，不要直接嵌入。

## Source refs

`context_source_ref` 应用 `source_id`、`uri`、`source_kind`、`selector`、`digest`、`authority`、`provenance_refs`、`external_mappings`、`license`、`retrieved_at`、`modified_at` 与 `metadata` 保留来源身份。

Selectors 可以使用 text quote、text position、byte range、line range、JSON Pointer、CSS selector、XPath、page region、media time range 或 custom selector types。实现应让 selector 足够稳定，以支持 evidence review 与 replay。

## Selection and ranking

`context_selection` 应包含 `selection_id`、`surface_id`、`query`、`intent`、`candidate_item_refs`、`selected_item_refs`、`omitted_item_refs`、`ranking_signals`、`selection_policy`、`budget_ref`、`rationale`、`actor_ref`、`model_ref`、`created_at` 与 `metadata`。

Omitted context 是一等事实。如果一个 item 可用但未被选中，selection record 应说明原因：budget、低相关性、source stale、policy block、重复覆盖、不支持的 media、privacy risk 或 permission missing。

## Budget and window

`context_budget` 应包含 `budget_id`、`target`、`max_tokens`、`reserved_tokens`、`max_bytes`、`max_items`、`actual_tokens`、`actual_bytes`、`actual_items`、`overflow_strategy`、`truncation_records`、`window_segments` 与 `created_at`。

初始 `overflow_strategy`：`reject`、`truncate_tail`、`truncate_middle`、`summarize_oldest`、`summarize_low_priority`、`defer_to_retrieval`、`ask_for_choice`、`policy_block`、`custom`。

## Assembly and injection

`context_assembly` 应包含 `assembly_id`、`target`、`ordered_blocks`、`wrapping_policy`、`separator_policy`、`visibility`、`budget_ref`、`source_item_refs`、`redaction_state` 与 `created_at`。

`context_injection` 应包含 `injection_id`、`assembly_id`、`target`、`injection_point`、`native_id`、`visibility`、`final_ref`、`hash`、`created_at` 与 `metadata`。

初始 `injection_point`：`system_prompt`、`developer_prompt`、`message_history`、`user_message_appendix`、`tool_argument`、`tool_visible_resource`、`runtime_metadata`、`ui_panel`、`review_export`、`peer_agent_message`、`artifact_input`、`custom`。

## Compaction and summaries

`context_compaction` 应包含 `compaction_id`、`scope`、`source_item_refs`、`summary_ref`、`method`、`trigger`、`coverage`、`loss_notes`、`validation`、`replacement_policy`、`created_at` 与 `metadata`。

初始 `method`：`extractive_summary`、`abstractive_summary`、`structured_digest`、`rolling_summary`、`semantic_memory_update`、`human_curated_summary`、`provider_context_editing`、`custom`。

Compaction 不应静默擦除 source context。它应该记录替换了什么、为什么替换、如何 refresh，以及引入了哪些不确定性或损失。

## Missing context

`missing_context` 应包含 `missing_id`、`scope`、`question`、`needed_for`、`severity`、`candidate_sources`、`blocked_actions`、`requested_from`、`status`、`resolution_refs`、`created_at` 与 `metadata`。

初始 `severity`：`info`、`low`、`medium`、`high`、`blocking`。

兼容的 UI、runtime 或 peer-agent bridge 可以把 `missing_context` 转成用户问题、retrieval request、tool invocation、policy request 或 peer-agent task。

## Policy and redaction

Agent Context 记录 policy 事实，但不做 policy decision。Context records 应通过 `policy_refs` 链接到 policy decisions，并在相关位置记录 `sensitivity`、`retention_hint`、`redaction_state`、`redaction_method` 与 `redacted_by`。

初始 `redaction_state`：`none`、`masked`、`removed`、`summarized`、`encrypted_ref`、`policy_blocked`、`unknown`。

## 外部映射

Agent Context 应保留 native ids，而不是替换它们。

| Native source | Mapping fields |
| --- | --- |
| MCP | `server_id`、`mcp_session_id`、`resource_uri`、`resource_template`、`prompt_name`、`root_uri`、`jsonrpc_request_id`。 |
| A2A | `agent_card_url`、`task_id`、`context_id`、`message_id`、`part_id`、`artifact_id`、`skill_id`。 |
| OpenTelemetry | `trace_id`、`span_id`、`event_name`、`conversation_id`、`system`、`operation_name`、`token_usage`。 |
| Model API | `response_id`、`message_id`、`prompt_cache_key`、`tool_call_id`、`input_tokens`、`cached_input_tokens`。 |
| Web Annotation | `target`、`selector_type`、`start`、`end`、`exact`、`prefix`、`suffix`。 |
| W3C PROV | `entity`、`activity`、`agent`、`wasDerivedFrom`、`wasAttributedTo`、`wasGeneratedBy`。 |
| CloudEvents | `id`、`source`、`type`、`subject`、`time`、`datacontenttype`。 |
| JSON Schema | `$id`、`$schema`、`$ref`、`type`、`properties`、`required`、`additionalProperties`。 |

## 事件类别

兼容实现应发出或导出这些事件类别：

- `context.surface.created`
- `context.surface.updated`
- `context.item.added`
- `context.item.updated`
- `context.item.removed`
- `context.selection.started`
- `context.selection.completed`
- `context.budget.applied`
- `context.assembly.created`
- `context.injection.applied`
- `context.compaction.started`
- `context.compaction.completed`
- `context.summary.created`
- `context.missing.detected`
- `context.missing.requested`
- `context.missing.resolved`
- `context.redaction.applied`
- `context.exported`

## 兼容性要求

兼容的 Agent Context 实现应：

1. 为重要 turn、task、tool call 与 handoff 导出 context envelopes。
2. 保留 native source ids 与 protocol ids。
3. 在 selection 非平凡时记录 selected 与 omitted context。
4. 在上下文受限时记录 token 或 size budgets。
5. 分开记录 assembly 与 injection target。
6. 记录 compaction sources 与 summary replacement facts。
7. 当 Agent 知道输入缺口会影响质量或安全时记录 missing context。
8. 通过 refs 连接 policy、evidence、artifact、tool、runtime、UI、knowledge 与 telemetry facts，而不是嵌入完整外部对象。
