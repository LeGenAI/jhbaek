export type PublicationStatus = 'Published' | 'Accepted' | 'Under Review' | 'Submitted' | 'In Preparation';

export type PublicationLinkKey = 'doi' | 'paper' | 'project' | 'code' | 'source' | 'researchGate' | 'artifact' | 'slides' | 'data';

export type Publication = {
  title: string;
  slug: string;
  authors: string;
  venue: string;
  year: string;
  status: PublicationStatus;
  area: string;
  summary: string;
  tldr: string;
  role: string;
  problem: string;
  keyIdea: string;
  methods: string[];
  results: string[];
  contribution: string[];
  statusNote: string;
  researchAxis: 'formalized-math-ai' | 'auditable-evaluation' | 'deployed-knowledge-systems' | 'applied-ai-methods';
  relatedProjects: string[];
  tags: string[];
  image?: string;
  links?: Partial<Record<PublicationLinkKey, string>>;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'Proposal of an LLM-Lean Approach and Architecture for Automated Mathematical Problem Solving',
    slug: 'llm-lean-closed-agent-math-solving',
    authors: 'Youngjik Lee, Jon-Lark Kim, Woo-Seok Jeong, Beom-Soo Kim, Jae-Hyun Baek',
    venue: '2026 KIIS Spring Conference — Best Paper Award',
    year: '2026',
    status: 'Accepted',
    area: 'AI4Math / Lean agents',
    summary:
      'A closed-agent architecture for mathematical problem solving that compares a Single solver structure with a Dual structure where a falsifier participates in the reasoning loop, emphasizing token/compute efficiency and final solving performance.',
    tldr: 'A Lean-facing multi-agent math-solving architecture where a falsifier makes the solver loop more inspectable and efficient.',
    role: 'Co-author; connected the Lean/AI4Math framing to the broader formalized mathematical-agent program.',
    problem:
      'LLM math solvers often produce plausible reasoning without a stable verification contract. For formal math workflows, the system needs a way to check, falsify, and iterate rather than only generate.',
    keyIdea:
      'Compare a single solver structure with a dual closed-agent structure in which a falsifier participates in the reasoning loop and pushes the solver toward stronger final answers.',
    methods: ['Closed-agent solver/falsifier architecture', 'Lean-oriented mathematical problem solving', 'Token and compute efficiency comparison'],
    results: ['Recognized with a 2026 KIIS Spring Conference Best Paper Award', 'Provides a public anchor for the IMDS Lean/AI4Math line'],
    contribution: ['Positions Lean as a working interface for mathematical agents', 'Connects formal checking to agent workflow design'],
    statusNote: 'Accepted conference paper and public institutional news item; source link available.',
    researchAxis: 'formalized-math-ai',
    relatedProjects: ['codingtheorylib-mcp', 'solevolve', 'entropymath-entropymag-entropymalean'],
    tags: ['LLM-Lean', 'closed agents', 'falsifier', 'AI4Math', 'best paper'],
    image: '/previews/codingtheorylib.svg',
    links: {
      source: 'https://imds.sogang.ac.kr/front/cmsboardview.do?currentPage=1&searchField=ALL&searchValue=&searchLowItem=ALL&bbsConfigFK=7110&siteId=imds&pkid=937656',
    },
    featured: true,
  },
  {
    title: 'Performance Improvement of LLMs for Regulatory Document Understanding based on Modified RAG Approach',
    slug: 'regulatory-rag-llm-understanding',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    venue: 'JKIIS',
    year: '2025',
    status: 'Published',
    area: 'RAG / Regulatory AI',
    summary:
      'A modified retrieval augmented generation framework for regulatory documents. This is one of the applied roots of my current interest in turning domain documents into agent-readable memory.',
    tldr: 'A regulatory-document RAG system that foreshadows my current focus on agent-readable domain memory.',
    role: 'Lead author; designed the applied RAG framing and evaluation direction.',
    problem:
      'Regulatory documents are difficult for general LLMs because answer quality depends on retrieving the right provision, preserving context, and making the source trail visible.',
    keyIdea:
      'Modify the RAG pipeline around regulatory-document structure so the model answers with stronger source grounding and less brittle context selection.',
    methods: ['Retrieval-augmented generation', 'Regulatory document chunking', 'LLM answer evaluation'],
    results: ['Published in JKIIS', 'Established the applied-RAG root of later legal/tax and institutional assistant projects'],
    contribution: ['Shows how domain documents can become a queryable substrate', 'Connects retrieval design to downstream answer reliability'],
    statusNote: 'Published work; ResearchGate profile used as public metadata reference.',
    researchAxis: 'deployed-knowledge-systems',
    relatedProjects: ['sogambot', 'mindbuddhi'],
    tags: ['RAG', 'regulatory documents', 'LLM evaluation', 'domain memory'],
    image: '/previews/mindbuddhi.svg',
    links: {
      researchGate: 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf',
    },
    featured: true,
  },
  {
    title: 'Water Level Forecasting in the Gamcheon River, Korea, Using TimeGPT',
    slug: 'timegpt-gamcheon-water-level',
    authors: 'Jon-Lark Kim, Jae-Hyun Baek, Keon-Hwi Kim, Tae Hyo Baek, Chang-Lae Jang',
    venue: 'International Journal of Fuzzy Logic and Intelligent Systems',
    year: '2026',
    status: 'Published',
    area: 'Time-series / Hydrology AI',
    summary:
      'A study of foundation-model forecasting for river water levels. We compare TimeGPT with classical and linear baselines under rolling-origin evaluation on the Gamcheon River setting.',
    tldr: 'A real-world forecasting study that tests foundation-model time-series methods against hydrological constraints and evaluation choices.',
    role: 'Co-author; contributed to the AI forecasting and evaluation framing.',
    problem:
      'River forecasting is not only a point-prediction problem: event timing, rainfall context, station sensitivity, and evaluation windows matter for operational usefulness.',
    keyIdea:
      'Use TimeGPT as a foundation-model baseline while comparing it against classical/linear approaches under rolling-origin evaluation in a real river setting.',
    methods: ['TimeGPT forecasting', 'Rolling-origin evaluation', 'Hydrological time-series preprocessing'],
    results: ['Published in IJFIS', 'Provides an applied evidence line for domain-specific forecasting systems'],
    contribution: ['Connects foundation time-series models to river-water forecasting', 'Highlights evaluation choices that matter outside notebook benchmarks'],
    statusNote: 'Published with DOI available.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: ['water-level-forecasting'],
    tags: ['TimeGPT', 'water-level prediction', 'foundation models', 'environmental AI'],
    image: '/accepted/Application_of_TimeGPT_for_enhancing_water_level_prediction_in_Gamcheon_River__Korea/TimeGPT_overall.png',
    links: {
      doi: 'https://doi.org/10.5391/ijfis.2026.26.1.10',
      researchGate: 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf',
    },
    featured: true,
  },
  {
    title: 'Hybrid Multimodal GenAI for Solving Math Problems Containing Various Figures',
    slug: 'hybrid-multimodal-genai-math-figures',
    authors: 'Sangsoo Lee, Jae-Hyun Baek, Jon-Lark Kim',
    venue: 'Accepted manuscript',
    year: '2025',
    status: 'Accepted',
    area: 'VLM / Mathematical reasoning',
    summary:
      'A hybrid pipeline combining visual retrieval and LLM reasoning for diagram-heavy mathematical problems, especially cases where OCR-only methods miss the actual structure of the figure.',
    tldr: 'A multimodal math-solving pipeline for figure-heavy problems where text-only reasoning misses the visual structure.',
    role: 'Co-author; connected multimodal retrieval to mathematical reasoning evaluation.',
    problem:
      'Many mathematical problems rely on diagrams and spatial relations that text-only OCR pipelines fail to preserve.',
    keyIdea:
      'Use multimodal retrieval and LLM reasoning as a hybrid pipeline so figure information remains part of the solving context.',
    methods: ['Vision-language retrieval', 'Multimodal math reasoning', 'Figure-aware prompt construction'],
    results: ['Accepted manuscript', 'Complements the formal math line by addressing visual mathematical structure'],
    contribution: ['Bridges visual problem understanding and math-solver evaluation', 'Adds a multimodal route into the broader AI4Math portfolio'],
    statusNote: 'Accepted manuscript; public metadata currently referenced through ResearchGate.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: ['entropymath-entropymag-entropymalean'],
    tags: ['VLM', 'ColPali', 'MathVision', 'multimodal reasoning'],
    image: '/accepted/Hybrid multimodal GenAI for solving math problems containing various figures_v2_20250209/colpalianstwo.png',
    links: {
      researchGate: 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf',
    },
    featured: true,
  },
  {
    title: 'SolEvolve: LLM-driven Evolutionary Discovery of Algorithms',
    slug: 'solevolve-evolutionary-discovery',
    authors: 'Jae-Hyun Baek',
    venue: "Master's thesis / manuscript track",
    year: '2025',
    status: 'Submitted',
    area: 'Evolutionary discovery / Coding theory',
    summary:
      'An autonomous search system where LLM-guided operators, SAT-seeded search, and verification loops rediscover strong coding-theoretic constructions.',
    tldr: 'An LLM-guided evolutionary search system for discovering and testing coding-theoretic constructions.',
    role: 'Lead researcher and system builder.',
    problem:
      'Algorithmic discovery in coding theory needs a loop that can propose candidates, test them, preserve evidence, and continue searching without relying on one-shot generation.',
    keyIdea:
      'Combine LLM-guided mutation/recombination, SAT-seeded search, and verification loops to explore construction spaces.',
    methods: ['Evolutionary search', 'SAT-seeded candidate generation', 'LLM-guided operators', 'Verification loops'],
    results: ['Submitted/manuscript track', 'Acts as a precursor to later benchmark-evolution and formal-agent systems'],
    contribution: ['Turns search trajectories into reusable research evidence', 'Connects coding-theory search with agentic experimentation'],
    statusNote: 'Submitted manuscript / thesis-derived research line.',
    researchAxis: 'formalized-math-ai',
    relatedProjects: ['solevolve', 'codingtheorylib-mcp'],
    tags: ['evolutionary search', 'SAT', 'coding theory', 'algorithm discovery'],
    image: '/thesis/graphical_abstract.png',
    featured: true,
  },
  {
    title: 'MekaNet: WSI-based Tiny Object Detection',
    slug: 'mekanet-wsi-tiny-object-detection',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Medical image analysis manuscript',
    year: '2025',
    status: 'Under Review',
    area: 'Medical AI / Computer vision',
    summary:
      'A whole-slide-image pipeline for small object detection in pathology. It belongs to the applied side of my work: turning difficult domain data into usable AI systems.',
    tldr: 'A pathology WSI pipeline for tiny-object detection and clinical-data evaluation under real imaging constraints.',
    role: 'Technical contributor; data, evaluation, and manuscript-support role.',
    problem:
      'Whole-slide pathology images are huge, sparse, and clinically constrained, so toy CV pipelines do not translate directly.',
    keyIdea:
      'Build a WSI-oriented detection and evaluation pipeline that respects tiny-object scale, hospital data splits, and clinical reporting needs.',
    methods: ['Whole-slide image processing', 'Tiny-object detection', 'External validation', 'Clinical metric reporting'],
    results: ['Under review', 'Public release and manuscript-support artifacts exist in the project portfolio'],
    contribution: ['Shows the applied-system side of domain-substrate work', 'Adds clinical-data rigor to the portfolio'],
    statusNote: 'Under review; public-facing details intentionally kept concise.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: ['mekanet-medical-ai'],
    tags: ['medical AI', 'WSI', 'tiny object detection', 'computer vision'],
    image: '/mekanet.png',
  },
  {
    title: 'Symmetric Sudoku-Type Games from Perfect Codes',
    slug: 'symmetric-sudoku-perfect-codes',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Submitted manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Coding theory / Combinatorial games',
    summary:
      'A coding-theoretic construction of Sudoku-type puzzle structures from perfect codes and symmetry principles.',
    tldr: 'A combinatorial-game manuscript that connects coding theory, symmetry, and puzzle construction.',
    role: 'Research contributor and application builder.',
    problem:
      'Puzzle structures can be treated as mathematical artifacts, but the connection to coding-theoretic constructions is not always made explicit.',
    keyIdea:
      'Use perfect-code and symmetry principles to construct Sudoku-type game structures with mathematical provenance.',
    methods: ['Perfect codes', 'Combinatorial construction', 'Symmetry analysis'],
    results: ['Submitted manuscript', 'Connected to a playable Sudoku application artifact'],
    contribution: ['Turns coding-theory structure into a public-facing game artifact', 'Supports the maker/research bridge in the portfolio'],
    statusNote: 'Submitted manuscript; public app artifacts are separate from the paper status.',
    researchAxis: 'formalized-math-ai',
    relatedProjects: ['sudoku-game'],
    tags: ['coding theory', 'perfect codes', 'games', 'combinatorics'],
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);
