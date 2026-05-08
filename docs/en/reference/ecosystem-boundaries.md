---
title: Ecosystem boundaries
description: Boundaries between Agent Context and adjacent standards.
---

# Ecosystem Boundaries

## Agent Context vs Agent Runtime

Runtime owns execution: accepting work, scheduling, queueing, streaming, pausing, resuming, recovery, and control. Context owns the input and visibility facts that explain what context runtime work used.

## Agent Context vs Agent Knowledge

Knowledge owns durable source-grounded knowledge artifacts. Context owns per-turn or per-task selection and injection of knowledge items.

## Agent Context vs Agent Tool

Tool owns capabilities and invocation lifecycle. Context owns what information was visible to a tool, what tool results became context, and how those results were selected or omitted.

## Agent Context vs Agent Policy

Policy owns allow/deny/approve/redact/retain decisions. Context owns the redaction state and policy refs attached to items, selections, assemblies, injections, compactions, and exports.

## Agent Context vs Agent Evidence

Evidence owns review, verification, replay, and export. Context supplies audit facts: source refs, selection, omission, compaction, injection, and missing context.

## Agent Context vs Agent Artifact

Artifact owns durable deliverables and their versions. Context may reference artifact versions, parts, previews, or diffs as input context.

## Agent Context vs Agent UI

UI owns user-visible surfaces and controls. Context gives UI explainable context records, missing-context prompts, and reviewable context traces.
