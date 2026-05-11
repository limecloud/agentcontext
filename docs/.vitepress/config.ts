import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-context' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/turn-context-snapshot' },
  { text: 'Ecosystem', link: '/en/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/en/reference/json-schemas' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
      { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/en/versions/v0.1.0/specification' }
    ]
  }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-context' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/turn-context-snapshot' },
  { text: '生态', link: '/zh/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/zh/reference/json-schemas' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/zh/versions/v0.1.0/specification' }
    ]
  }
]

const enSidebar = [
  { text: 'Start here', items: [
    { text: 'Overview', link: '/en/' },
    { text: 'What is Agent Context?', link: '/en/what-is-agent-context' },
    { text: 'Context model', link: '/en/concepts/context-model' },
    { text: 'Specification', link: '/en/specification' }
  ]},
  { text: 'Contracts', items: [
    { text: 'Context envelope', link: '/en/contracts/context-envelope' },
    { text: 'Context surface', link: '/en/contracts/context-surface' },
    { text: 'Context items', link: '/en/contracts/context-items' },
    { text: 'Source refs', link: '/en/contracts/source-refs' },
    { text: 'Selection and ranking', link: '/en/contracts/selection-and-ranking' },
    { text: 'Budget and window', link: '/en/contracts/budget-and-window' },
    { text: 'Assembly and injection', link: '/en/contracts/assembly-and-injection' },
    { text: 'Compaction and summaries', link: '/en/contracts/compaction-and-summaries' },
    { text: 'Missing context', link: '/en/contracts/missing-context' },
    { text: 'Policy and redaction', link: '/en/contracts/policy-and-redaction' },
    { text: 'Interoperability', link: '/en/contracts/interoperability' }
  ]},
  { text: 'For implementors', items: [
    { text: 'Implementation quickstart', link: '/en/authoring/quickstart' },
    { text: 'Acceptance scenarios', link: '/en/authoring/acceptance-scenarios' },
    { text: 'Runtime profile test cases', link: '/en/authoring/runtime-profile-test-cases' }
  ]},
  { text: 'Examples', items: [
    { text: 'Turn context snapshot', link: '/en/examples/turn-context-snapshot' },
    { text: 'Memory prefetch', link: '/en/examples/memory-prefetch' },
    { text: 'Knowledge selection', link: '/en/examples/knowledge-selection' },
    { text: 'Context compaction', link: '/en/examples/context-compaction' },
    { text: 'Missing context request', link: '/en/examples/missing-context-request' }
  ]},
  { text: 'Reference', items: [
    { text: 'Glossary', link: '/en/reference/glossary' },
    { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
    { text: 'Ecosystem boundaries', link: '/en/reference/ecosystem-boundaries' },
    { text: 'Research sources', link: '/en/reference/research-sources' },
    { text: 'Source analysis', link: '/en/reference/source-analysis' }
  ]},
  { text: 'Versions', items: [
    { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
    { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
    { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
    { text: 'v0.1.0 specification', link: '/en/versions/v0.1.0/specification' },
    { text: 'v0.1.0 changelog', link: '/en/versions/v0.1.0/changelog' }
  ]}
]

const zhSidebar = [
  { text: '开始', items: [
    { text: '概览', link: '/zh/' },
    { text: '什么是 Agent Context', link: '/zh/what-is-agent-context' },
    { text: 'Context 模型', link: '/zh/concepts/context-model' },
    { text: '规范', link: '/zh/specification' }
  ]},
  { text: '契约', items: [
    { text: 'Context envelope', link: '/zh/contracts/context-envelope' },
    { text: 'Context surface', link: '/zh/contracts/context-surface' },
    { text: 'Context items', link: '/zh/contracts/context-items' },
    { text: 'Source refs', link: '/zh/contracts/source-refs' },
    { text: 'Selection 与 ranking', link: '/zh/contracts/selection-and-ranking' },
    { text: 'Budget 与 window', link: '/zh/contracts/budget-and-window' },
    { text: 'Assembly 与 injection', link: '/zh/contracts/assembly-and-injection' },
    { text: 'Compaction 与 summaries', link: '/zh/contracts/compaction-and-summaries' },
    { text: 'Missing context', link: '/zh/contracts/missing-context' },
    { text: 'Policy 与 redaction', link: '/zh/contracts/policy-and-redaction' },
    { text: 'Interoperability', link: '/zh/contracts/interoperability' }
  ]},
  { text: '实现者', items: [
    { text: '快速开始', link: '/zh/authoring/quickstart' },
    { text: '验收场景', link: '/zh/authoring/acceptance-scenarios' },
    { text: 'Runtime Profile 测试用例', link: '/zh/authoring/runtime-profile-test-cases' }
  ]},
  { text: '示例', items: [
    { text: 'Turn context snapshot', link: '/zh/examples/turn-context-snapshot' },
    { text: 'Memory prefetch', link: '/zh/examples/memory-prefetch' },
    { text: 'Knowledge selection', link: '/zh/examples/knowledge-selection' },
    { text: 'Context compaction', link: '/zh/examples/context-compaction' },
    { text: 'Missing context request', link: '/zh/examples/missing-context-request' }
  ]},
  { text: '参考', items: [
    { text: '术语表', link: '/zh/reference/glossary' },
    { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
    { text: '生态边界', link: '/zh/reference/ecosystem-boundaries' },
    { text: '调研来源', link: '/zh/reference/research-sources' },
    { text: '实现分析摘要', link: '/zh/reference/source-analysis' }
  ]},
  { text: '版本', items: [
    { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
    { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
    { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
    { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
    { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
  ]}
]

export default defineConfig({
  base,
  title: 'Agent Context',
  description: 'A portable standard for context surfaces, items, source refs, selection, budgets, assembly, injection, compaction, and missing-context facts.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'English', items: enNav },
      { text: '中文', items: zhNav }
    ],
    sidebar: { '/en/': enSidebar, '/zh/': zhSidebar },
    search: { provider: 'local' },
    footer: {
      message: 'Draft standard for portable agent context surfaces, selection, budgets, injection, compaction, and missing-context facts.',
      copyright: 'Copyright © 2026'
    }
  },
  markdown: { lineNumbers: true }
})
