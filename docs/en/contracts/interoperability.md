---
title: Interoperability
description: Agent Context interoperability contract.
---

# Interoperability

Agent Context is a bridge standard. It should preserve native ids and map to adjacent standards by refs.

## MCP

Map MCP resources, resource templates, roots, prompts, resource links, annotations, and JSON-RPC ids into source refs, context items, and external mappings.

## A2A

Map A2A `contextId`, task ids, messages, parts, artifacts, and agent skills into peer-agent source refs and handoff envelopes.

## OpenTelemetry

Map trace ids, span ids, GenAI operation names, prompt events, token usage, and conversation/session attributes into telemetry refs.

## W3C PROV and Web Annotation

Use PROV-style entity/activity/agent relationships for derivation and attribution. Use Web Annotation-style selectors for precise source anchoring.

## Fixed rule

Interoperability means preserving foreign identity. Do not collapse native protocols into Agent Context-only ids.
