---
title: Assembly and injection
description: Agent Context assembly and injection contract.
---

# Assembly and injection

Assembly orders context. Injection makes it visible.

## Assembly block

An assembly block SHOULD include `block_id`, `item_refs`, `content_ref`, `wrapper`, `position`, `visibility`, `token_estimate`, `hash`, and `redaction_state`.

## Injection target

Targets include model prompts, message history, tool arguments, tool-visible resources, runtime metadata, UI panels, review exports, peer-agent messages, and artifact inputs.

## Fixed rule

Never infer injection from selection alone. A selected item may be omitted later, compacted, redacted, deferred, or visible only to a non-model target.
