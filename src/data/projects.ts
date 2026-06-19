export type ProjectArtifact = {
  title: string;
  kind: 'proof' | 'benchmark' | 'agent memory' | 'product' | 'forecasting' | 'medical AI' | 'research system';
  status: 'active' | 'deployed' | 'research' | 'prototype';
  summary: string;
  makerNote: string;
  tags: string[];
  image?: string;
  link?: string;
};

export const projectArtifacts: ProjectArtifact[] = [
  {
    title: 'CodingTheoryLib / CodingTheoryLib-MCP',
    kind: 'agent memory',
    status: 'active',
    summary:
      'A formalized coding-theory substrate: Lean definitions, proof work, graph memory, and MCP-style access for agents.',
    makerNote:
      'The goal is not only to prove isolated theorems. I want a working memory for a mathematical domain, something a prover agent can actually search and reuse.',
    tags: ['Lean', 'Mathlib', 'coding theory', 'MCP', 'Neo4j'],
    image: '/previews/codingtheorylib.svg',
  },
  {
    title: 'EntropyMath / EntropyMaG / EntropyMaLean',
    kind: 'benchmark',
    status: 'active',
    summary:
      'A family of systems for evolving math problems with lineage, solver traces, and verification hooks instead of treating benchmarks as frozen files.',
    makerNote:
      'I keep coming back to the same question: can a benchmark be something you audit, not just something you download?',
    tags: ['AI4Math', 'evaluation', 'Lean', 'benchmark evolution'],
    image: '/1212/1212_workshop_fig_1.png',
    link: 'https://entropymath.com',
  },
  {
    title: 'SolEvolve',
    kind: 'research system',
    status: 'research',
    summary:
      'An LLM-guided evolutionary discovery system for algorithmic and mathematical search, developed around coding-theory constructions.',
    makerNote:
      'This is the part of my work where the agent is allowed to be a messy researcher: propose, mutate, test, fail, and try again.',
    tags: ['evolutionary search', 'SAT', 'coding theory', 'LLM agents'],
    image: '/thesis/graphical_abstract.png',
  },
  {
    title: 'SOGAMBOT',
    kind: 'product',
    status: 'deployed',
    summary:
      'A university RAG chatbot that turns scattered Sogang documents and administrative knowledge into a searchable assistant.',
    makerNote:
      'This is the product version of the same pattern: take institutional knowledge that nobody can easily search, then make it usable.',
    tags: ['RAG', 'university chatbot', 'retrieval', 'deployment'],
    image: '/sogambot_events.jpg',
    link: 'https://sogambot.com',
  },
  {
    title: 'MindBuddhi',
    kind: 'product',
    status: 'prototype',
    summary:
      'A Buddhist and meditation knowledge assistant built around source-grounded answers, counseling flows, and shareable artifacts.',
    makerNote:
      'The hard part is not only the chatbot. It is preserving the texture of the source material while still making the experience simple enough to use.',
    tags: ['RAG', 'Buddhist texts', 'counseling UX', 'source grounding'],
    image: '/previews/mindbuddhi.svg',
  },
  {
    title: 'Water-level forecasting pipeline',
    kind: 'forecasting',
    status: 'research',
    summary:
      'A hydrological forecasting workflow around TimeGPT, classical baselines, rainfall features, and rolling-origin evaluation.',
    makerNote:
      'This is applied AI with real-world friction: missing values, stations, flood events, and evaluation choices that matter outside the notebook.',
    tags: ['TimeGPT', 'hydrology', 'forecasting', 'environmental AI'],
    image: '/accepted/Application_of_TimeGPT_for_enhancing_water_level_prediction_in_Gamcheon_River__Korea/TimeGPT_predictions.png',
  },
  {
    title: 'MekaNet / medical AI pipelines',
    kind: 'medical AI',
    status: 'research',
    summary:
      'Whole-slide-image and cell-analysis pipelines for pathology tasks such as tiny-object detection and cellularity assessment.',
    makerNote:
      'The maker problem here is scale. Gigapixel images do not fit neatly into toy examples, so the system has to respect the data.',
    tags: ['WSI', 'pathology', 'tiny object detection', 'cellularity'],
    image: '/mekanet.png',
  },
];
