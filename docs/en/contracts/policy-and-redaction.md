---
title: Policy and redaction
description: Agent Context policy and redaction contract.
---

# Policy and redaction

Agent Context records policy-related facts but does not decide policy.

## Policy refs

A context item, selection, assembly, injection, compaction, or export MAY link to `policy_refs`. These refs can point to approvals, denials, retention decisions, data access grants, redaction decisions, or waiver records.

## Redaction records

A redaction record SHOULD include `redaction_state`, `redaction_method`, `redacted_fields`, `policy_refs`, `actor_ref`, `created_at`, and `replacement_ref` when replacement content exists.

## Fixed rule

Do not treat redacted context as the same context. Preserve a relationship to the original by ref when policy allows; otherwise preserve a digest and redaction reason.
