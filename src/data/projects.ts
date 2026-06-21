export type ProjectKind = 'proof substrate' | 'benchmark' | 'agent memory' | 'deployed system' | 'forecasting' | 'medical AI' | 'research system' | 'education system' | 'game artifact';
export type ProjectStatus = 'active' | 'deployed' | 'research' | 'prototype' | 'submitted' | 'public preview pending';
export type ArtifactLinkKey = 'paper' | 'code' | 'demo' | 'data' | 'docs' | 'slides' | 'source' | 'website';

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
    summary:
      'A formalized coding-theory substrate: Lean definitions, proof work, graph memory, and MCP-style access for agents.',
    oneLine: 'Formal coding-theory knowledge shaped into a reusable substrate for theorem-proving agents.',
    makerNote:
      'The goal is not only to prove isolated theorems. I want a working memory for a mathematical domain, something a prover agent can actually search and reuse.',
    problem:
      'General theorem-proving models struggle when a research topic depends on local definitions, naming conventions, and domain-specific theorem structure.',
    whyItMatters:
      'If a mathematical domain has no formal, searchable substrate, every agent must rediscover the vocabulary before it can reason productively.',
    whatIBuilt: ['Lean/Mathlib formalization work around coding theory', 'A graph/MCP direction for exposing the library to agents', 'Project scaffolding for domain-specific formal memory'],
    evidence: ['Core thesis project in the portfolio', 'Connected to the LLM-Lean award thread and building-up/self-dual-code work'],
    currentStatus: 'Active research substrate; public preview and documentation are being shaped around the long-term AI4Math direction.',
    nextStep: 'Make the agent-facing interface and example workflows clearer for external readers.',
    role: 'Lead builder/researcher for the agent-readable coding-theory substrate direction.',
    researchAxis: 'formalized-math-ai',
    tags: ['Lean', 'Mathlib', 'coding theory', 'MCP', 'formal memory'],
    image: '/previews/codingtheorylib.svg',
    artifactLinks: {
      code: 'https://github.com/LeGenAI/CodingTheoryLib',
    },
    relatedPublications: ['llm-lean-closed-agent-math-solving', 'solevolve-evolutionary-discovery'],
  },
  {
    title: 'EntropyMath / EntropyMaG / EntropyMaLean',
    slug: 'entropymath-entropymag-entropymalean',
    kind: 'benchmark',
    status: 'active',
    summary:
      'A family of systems for evolving math problems with lineage, solver traces, and verification hooks instead of treating benchmarks as frozen files.',
    oneLine: 'Math benchmarks treated as auditable processes rather than static downloads.',
    makerNote:
      'I keep coming back to the same question: can a benchmark be something you audit, not just something you download?',
    problem:
      'Generated math benchmarks can look impressive while hiding provenance, contamination risk, solver dependence, and weak validation contracts.',
    whyItMatters:
      'AI4Math evaluation needs artifacts that can be inspected, traced, and revised, especially when generated data becomes part of the benchmark supply chain.',
    whatIBuilt: ['Multi-generation math problem evolution pipeline', 'Quality gates around verification, lineage, and release metadata', 'Evaluation artifacts for ICML AI4Math workshop submission/revision'],
    evidence: ['Public EntropyMath artifact', 'EntropyMaG/EntropyMaLean project family', 'Revision-ready evidence and benchmark lineage framing'],
    currentStatus: 'Active paper/revision track after workshop review; being reframed around auditable benchmark evolution.',
    nextStep: 'Sharpen the contribution around a narrow Lean-gated validity contract and stronger evidence scale.',
    role: 'Lead system builder and paper framer.',
    researchAxis: 'auditable-evaluation',
    tags: ['AI4Math', 'evaluation', 'Lean', 'benchmark evolution', 'provenance'],
    image: '/1212/1212_workshop_fig_1.png',
    link: 'https://entropymath.com',
    artifactLinks: {
      demo: 'https://entropymath.com',
      code: 'https://github.com/LeGenAI/EntropyMaG-2',
    },
    relatedPublications: ['hybrid-multimodal-genai-math-figures', 'solevolve-evolutionary-discovery'],
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
    currentStatus: 'Submitted/manuscript track; used as a bridge between coding-theory search and agentic evaluation.',
    nextStep: 'Clarify what part of the trajectory can become reusable data for specialized mathematical agents.',
    role: 'Lead researcher and system builder.',
    researchAxis: 'formalized-math-ai',
    tags: ['evolutionary search', 'SAT', 'coding theory', 'LLM agents'],
    image: '/thesis/graphical_abstract.png',
    artifactLinks: {
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
    evidence: ['MekaNet release/project artifacts', 'Under-review manuscript line'],
    currentStatus: 'Research/manuscript track with external clinical context.',
    nextStep: 'Keep public portfolio detail concise while preserving enough evidence of technical scope.',
    role: 'Technical contributor for data, evaluation, and manuscript reliability.',
    researchAxis: 'applied-ai-methods',
    tags: ['WSI', 'pathology', 'tiny object detection', 'cellularity'],
    image: '/mekanet.png',
    relatedPublications: ['mekanet-wsi-tiny-object-detection'],
  },
];

export const featuredArtifacts = projectArtifacts.slice(0, 5);
