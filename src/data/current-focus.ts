export type CurrentFocus = {
  title: string;
  horizon: string;
  why: string;
  artifact: string;
  tags: string[];
};

export const currentFocus: CurrentFocus[] = [
  {
    title: 'Formalized Mathematical AI',
    horizon: 'core thesis',
    why: 'CodingTheoryLib, Lean, and MCP-style memory are the spine of my long-term research direction.',
    artifact: 'A reusable coding-theory substrate that theorem-proving agents can search, inspect, and extend.',
    tags: ['Lean', 'coding theory', 'MCP', 'formal memory'],
  },
  {
    title: 'Auditable benchmark evolution',
    horizon: 'active paper track',
    why: 'EntropyMath and EntropyMaLean connect generated math problems to solver traces, verifier contracts, and revision-ready evidence.',
    artifact: 'Benchmark lineages that can be audited rather than treated as static download files.',
    tags: ['EntropyMath', 'AI4Math', 'evaluation', 'verification'],
  },
  {
    title: 'Applied AI systems with real users',
    horizon: 'product/research bridge',
    why: 'SOGAMBOT, MindBuddhi, water-level forecasting, and medical AI keep the research grounded in messy real-world data and users.',
    artifact: 'Deployed assistants, forecasting workflows, and domain-specific pipelines with source-grounded outputs.',
    tags: ['RAG', 'forecasting', 'medical AI', 'deployment'],
  },
];
