import { solEvolveThesisUrl } from './publications';

export type ProjectKind = 'proof substrate' | 'benchmark' | 'agent memory' | 'deployed system' | 'forecasting' | 'medical AI' | 'research system' | 'education system' | 'game artifact';
export type ProjectStatus = 'active' | 'deployed' | 'research' | 'prototype' | 'submitted' | 'public preview pending';
export type ArtifactLinkKey = 'paper' | 'code' | 'demo' | 'data' | 'docs' | 'slides' | 'source' | 'website' | 'leaderboard' | 'evaluation' | 'reproduce' | 'thesis';

export const artifactLinkLabels: Record<ArtifactLinkKey, string> = {
  paper: 'Paper',
  code: 'Code',
  demo: 'Demo',
  data: 'Data',
  docs: 'MCP usage guide (documentation)',
  slides: 'Slides',
  source: 'Source',
  website: 'Website',
  leaderboard: 'EntropyMath leaderboard',
  evaluation: 'EntropyMath evaluation code',
  reproduce: 'Reviewer reproduction',
  thesis: 'Master’s thesis (Sogang University)',
};

export type ProjectArtifact = {
  title: string;
  slug: string;
  kind: ProjectKind;
  status: ProjectStatus;
  summary: string;
  oneLine: string;
  makerNote: string;
  problem: string;
  whyItMatters: string;
  whatIBuilt: string[];
  evidenceTitle?: string;
  evidence: string[];
  currentStatus: string;
  nextStep: string;
  role: string;
  researchAxis: 'formalized-math-ai' | 'auditable-evaluation' | 'deployed-knowledge-systems' | 'applied-ai-methods';
  tags: string[];
  image?: string;
  link?: string;
  artifactLinks?: Partial<Record<ArtifactLinkKey, string>>;
  relatedPublications?: string[];
};

export const projectArtifacts: ProjectArtifact[] = [
  {
    title: 'CodingTheoryLib / CodingTheoryLib-MCP',
    slug: 'codingtheorylib-mcp',
    kind: 'proof substrate',
    status: 'active',
    summary: 'I designed CodingTheoryLib-MCP to retrieve a theorem alongside related results and textbook sources. A reader or a model can then check which assumptions a construction needs and trace them back to the text.',
    oneLine: 'Look up the definitions a model needs to reason about an error-correcting code.',
    makerNote: 'I use the graph to keep a construction together with its field assumptions when different textbooks use different notation.',
    problem: 'Different textbooks use different names and notation for equivalent constructions.',
    whyItMatters: 'A theorem statement is easier to use when its field assumptions and definitions travel with it.',
    whatIBuilt: ['Lean definitions for coding theory', 'A retrieval interface for textbook definitions and theorem statements'],
    evidenceTitle: 'Illustrative retrieval example',
    evidence: ['Example input: “What assumptions does the building-up construction need?”', 'Neo4j lookup: follow references from the construction to self-duality and the underlying bilinear form across textbooks.', 'Context for the LLM: the retrieved definitions, theorem assumptions, and source passages.'],
    currentStatus: 'The library and retrieval interface are under development.',
    nextStep: 'Publish a query and its returned textbook passages.',
    role: 'Library and retrieval interface developer.',
    researchAxis: 'formalized-math-ai',
    tags: ['Lean', 'Mathlib', 'coding theory', 'MCP', 'formal memory'],
    image: '/previews/codingtheorylib.svg',
    artifactLinks: { docs: 'https://codingtheorylib.com/mcp-guide' },
    relatedPublications: ['llm-lean-closed-agent-math-solving', 'solevolve-evolutionary-discovery'],
  },
  {
    title: 'EntropyMaLean proof-checking harness',
    slug: 'entropymath-entropymag-entropymalean',
    kind: 'benchmark',
    status: 'active',
    summary: 'I refined EntropyMaLean to feed Lean errors back to the model for revision and to replay each accepted proof against the original goal. I set up the experiments for two Nemotron models.',
    oneLine: 'Repairing generated proofs and checking them against the original goal.',
    makerNote: 'A proof can compile after a revision changes the statement. Replaying it against the original goal checks that it proves the claim we asked for.',
    problem: 'Answer accuracy and proof validity require different tests.',
    whyItMatters: 'Per-problem results let readers inspect the attempts behind a leaderboard score.',
    whatIBuilt: ['A revision loop that feeds Lean diagnostics back to the model', 'A replay check against the original goal', 'Experiment configurations for two Nemotron models'],
    evidenceTitle: 'EntropyMath benchmark evidence',
    evidence: ['Public benchmark results include accuracy and Pass@3.', 'The evaluation repository includes dataset configurations, grading scripts, and compact result summaries.'],
    currentStatus: 'EntropyMaG generates the problems. The public EntropyMath leaderboard and evaluation code cover benchmark scoring.',
    nextStep: 'Release a worked EntropyMaLean proof-checking example.',
    role: 'Proof-checking harness and Nemotron experiment setup.',
    researchAxis: 'auditable-evaluation',
    tags: ['AI4Math', 'evaluation', 'Lean', 'benchmark evolution', 'provenance'],
    image: '/1212/1212_workshop_fig_1.png',
    link: 'https://entropymath.com',
    artifactLinks: {
      leaderboard: 'https://entropymath.com/',
      evaluation: 'https://github.com/LeGenAI/entropymath_eval',
    },
    relatedPublications: ['entropymath-evolutionary-benchmark-generation', 'hybrid-multimodal-genai-math-figures'],
  },
  {
    title: 'SolEvolve',
    slug: 'solevolve',
    kind: 'research system',
    status: 'research',
    summary:
      'An LLM-guided evolutionary discovery system for algorithmic and mathematical search, developed around coding-theory constructions.',
    oneLine: 'An agentic search loop for proposing, mutating, testing, and preserving mathematical candidates.',
    makerNote:
      'This is the part of my work where the agent is allowed to be a messy researcher: propose, mutate, test, fail, and try again.',
    problem:
      'One-shot generation is a poor fit for discovery; useful mathematical search needs memory, operators, constraints, and repeated falsification.',
    whyItMatters:
      'The same search-and-verify pattern appears in coding theory, benchmark generation, and formal proof workflows.',
    whatIBuilt: ['LLM-guided evolutionary search pipeline', 'SAT-seeded candidate generation direction', 'Verification-oriented research traces'],
    evidence: ['Master’s thesis/manuscript track', 'Connects to coding-theory construction search and EntropyMath-style lineage'],
    currentStatus: 'The SolEvolve manuscript is under review at Neurocomputing.',
    nextStep: 'Clarify what part of the trajectory can become reusable data for specialized mathematical agents.',
    role: 'Lead researcher and system builder.',
    researchAxis: 'formalized-math-ai',
    tags: ['evolutionary search', 'SAT', 'coding theory', 'LLM agents'],
    image: '/thesis/graphical_abstract.png',
    artifactLinks: {
      reproduce: 'https://github.com/LeGenAI/sol_evolve#reviewer-reproduction',
      thesis: solEvolveThesisUrl,
      code: 'https://github.com/LeGenAI/sol_evolve',
    },
    relatedPublications: ['solevolve-evolutionary-discovery'],
  },
  {
    title: 'SOGAMBOT',
    slug: 'sogambot',
    kind: 'deployed system',
    status: 'deployed',
    summary:
      'A university RAG chatbot that turns scattered Sogang documents and administrative knowledge into a searchable assistant.',
    oneLine: 'A deployed university assistant built from messy institutional documents and retrieval workflows.',
    makerNote:
      'This is the product version of the same pattern: take institutional knowledge that nobody can easily search, then make it usable.',
    problem:
      'University information is scattered across pages, notices, PDFs, and local institutional knowledge that users cannot search reliably.',
    whyItMatters:
      'It grounds the agent-readable-knowledge thesis in a real user-facing deployment, not just a research prototype.',
    whatIBuilt: ['RAG assistant workflow', 'Public-facing chatbot/product surface', 'Operational improvements around retrieval and answer quality'],
    evidence: ['Deployed public artifact', 'Connected to DeepFountain/Sogang chatbot work'],
    currentStatus: 'Deployed system; used as applied evidence for the knowledge-substrate pattern.',
    nextStep: 'Use anonymized usage and failure patterns to improve retrieval and interaction design.',
    role: 'Technical lead / product builder.',
    researchAxis: 'deployed-knowledge-systems',
    tags: ['RAG', 'university chatbot', 'retrieval', 'deployment'],
    image: '/sogambot_events.jpg',
    link: 'https://sogambot.com',
    artifactLinks: {
      demo: 'https://sogambot.com',
    },
    relatedPublications: ['regulatory-rag-llm-understanding'],
  },
  {
    title: 'MindBuddhi',
    slug: 'mindbuddhi',
    kind: 'deployed system',
    status: 'prototype',
    summary:
      'A Buddhist and meditation knowledge assistant built around source-grounded answers, counseling flows, and shareable artifacts.',
    oneLine: 'A source-grounded Buddhist/meditation assistant that turns texts into counseling-oriented interactions.',
    makerNote:
      'The hard part is not only the chatbot. It is preserving the texture of the source material while still making the experience simple enough to use.',
    problem:
      'Religious and meditation texts need source sensitivity, citation behavior, and UX that does not flatten the original material into generic chatbot output.',
    whyItMatters:
      'It tests whether source-grounded agent interfaces can respect a domain’s texture while still becoming accessible to real users.',
    whatIBuilt: ['Mobile-responsive UI/UX improvements', 'Markdown rendering and answer-card sharing direction', 'Audio/share feature experiments and app-release planning'],
    evidence: ['Prototype website/app direction', 'External stakeholder interest and MOU-oriented planning'],
    currentStatus: 'Prototype under iteration; public release direction depends on stakeholder-specific planning.',
    nextStep: 'Turn chat logs and feature requests into a clean product/research case study without exposing private details.',
    role: 'Technical builder and product/research coordinator.',
    researchAxis: 'deployed-knowledge-systems',
    tags: ['RAG', 'Buddhist texts', 'counseling UX', 'source grounding'],
    image: '/previews/mindbuddhi.svg',
  },
  {
    title: 'Water-level forecasting pipeline',
    slug: 'water-level-forecasting',
    kind: 'forecasting',
    status: 'research',
    summary:
      'A hydrological forecasting workflow around TimeGPT, classical baselines, rainfall features, and rolling-origin evaluation.',
    oneLine: 'A real-world forecasting pipeline where event timing and hydrological context matter as much as aggregate error.',
    makerNote:
      'This is applied AI with real-world friction: missing values, stations, flood events, and evaluation choices that matter outside the notebook.',
    problem:
      'Hydrological forecasting requires sensitivity to rainfall, upstream stations, event periods, and the operational meaning of early detection.',
    whyItMatters:
      'It keeps the portfolio honest about messy, non-math-domain data while still fitting the substrate/evaluation pattern.',
    whatIBuilt: ['Time-series forecasting workflow', 'Baseline/evaluation comparisons', 'Research framing around sensitivity and event analysis'],
    evidence: ['Published IJFIS TimeGPT water-level paper', 'Follow-up meeting notes around physical loss, station sensitivity, and mid-scale flood analysis'],
    currentStatus: 'Published foundation-model forecasting paper with ongoing follow-up analysis direction.',
    nextStep: 'Frame the next draft around event detection, physical loss, and sensitivity rather than only raw prediction accuracy.',
    role: 'AI forecasting/evaluation contributor.',
    researchAxis: 'applied-ai-methods',
    tags: ['TimeGPT', 'hydrology', 'forecasting', 'environmental AI'],
    image: '/accepted/Application_of_TimeGPT_for_enhancing_water_level_prediction_in_Gamcheon_River__Korea/TimeGPT_predictions.png',
    relatedPublications: ['timegpt-gamcheon-water-level'],
  },
  {
    title: 'MekaNet / medical AI pipelines',
    slug: 'mekanet-medical-ai',
    kind: 'medical AI',
    status: 'research',
    summary:
      'Whole-slide-image and cell-analysis pipelines for pathology tasks such as tiny-object detection and cellularity assessment.',
    oneLine: 'Medical image pipelines where scale, validation, and clinical reporting shape the AI system.',
    makerNote:
      'The maker problem here is scale. Gigapixel images do not fit neatly into toy examples, so the system has to respect the data.',
    problem:
      'Clinical WSI data is large, sparse, and institution-dependent; methods need careful validation and reporting to be credible.',
    whyItMatters:
      'It demonstrates the applied-AI side of turning expert data into inspectable, publishable systems.',
    whatIBuilt: ['Data and result validation support', 'WSI/tiny-object detection project scaffolding', 'Medical AI release/manuscript support'],
    evidence: ['MekaNet release/project artifacts', 'Tiling and semi-supervised detection manuscript submitted to BMC'],
    currentStatus: 'Research/manuscript track with external clinical context.',
    nextStep: 'Keep public portfolio detail concise while preserving enough evidence of technical scope.',
    role: 'Technical contributor for data, evaluation, and manuscript reliability.',
    researchAxis: 'applied-ai-methods',
    tags: ['WSI', 'pathology', 'tiny object detection', 'cellularity'],
    image: '/mekanet.png',
    relatedPublications: ['mekanet-tiling-enhanced-semisupervised-megakaryocytes'],
  },
];

export const featuredArtifacts = projectArtifacts.slice(0, 5);
