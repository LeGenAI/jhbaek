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
  {
    title: 'EntropyMath: An Evolutionary Benchmark Generation System for Evaluating High-Difficulty Mathematical Reasoning',
    slug: 'entropymath-evolutionary-benchmark-generation',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'ICML AI for Math Workshop submission',
    year: '2026',
    status: 'Submitted',
    area: 'AI4Math / Benchmark evaluation',
    summary:
      'A benchmark-generation system that treats difficult mathematical reasoning data as an evolutionary, auditable process with lineage, solver traces, and validation gates.',
    tldr: 'The submitted EntropyMath workshop paper: benchmarks as auditable evolutionary processes rather than static problem sets.',
    role: 'Lead system builder and paper framer.',
    problem:
      'Generated math benchmarks can be useful but difficult to trust when provenance, solver dependence, and validation contracts are hidden.',
    keyIdea:
      'Make benchmark generation inspectable through evolutionary lineages, solver traces, and explicit validation/evidence artifacts.',
    methods: ['Evolutionary problem generation', 'Benchmark lineage tracking', 'Solver-trace analysis', 'Validation-gate design'],
    results: ['Submitted to the ICML AI for Math Workshop track', 'Created the current revision agenda around scope, contribution framing, and evidence scale'],
    contribution: ['Defines the auditable-benchmark axis of the portfolio', 'Connects EntropyMath, EntropyMaG, and EntropyMaLean into one research program'],
    statusNote: 'Workshop submission; currently useful as the public anchor for the benchmark-evolution research line.',
    researchAxis: 'auditable-evaluation',
    relatedProjects: ['entropymath-entropymag-entropymalean'],
    tags: ['EntropyMath', 'AI4Math', 'benchmark generation', 'lineage', 'verification'],
    image: '/1212/1212_workshop_fig_1.png',
    links: {
      project: 'https://entropymath.com',
      code: 'https://github.com/LeGenAI/EntropyMaG-2',
    },
  },
  {
    title: 'A Case Study on Alignment Faking in LLMs',
    slug: 'alignment-faking-llm-case-study',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    venue: 'ISIS 2025 — Best Presentation Award',
    year: '2025',
    status: 'Accepted',
    area: 'LLM safety / Alignment evaluation',
    summary:
      'A case-study presentation on alignment faking: when externally aligned behavior may diverge from internal reasoning under evaluation or monitoring pressure.',
    tldr: 'An accepted ISIS 2025 alignment-safety work that connects behavioral evaluation to formalizable conditions for apparent compliance.',
    role: 'Co-author and presenter; framed the phenomenon toward formal definitions and conditions.',
    problem:
      'A model can appear aligned in monitored settings while its internal reasoning may reflect strategic compliance rather than genuine objective alignment.',
    keyIdea:
      'Treat alignment faking as a gap between external behavior and internal reasoning signals, then discuss conditions under which that gap can persist.',
    methods: ['LLM safety case study', 'Behavior/internal-reasoning distinction', 'Formal-methods-oriented framing'],
    results: ['Accepted for ISIS 2025 presentation', 'Received Best Presentation Award'],
    contribution: ['Adds an AI safety/evaluation thread to the portfolio', 'Connects alignment evaluation to the broader interest in formal guarantees'],
    statusNote: 'Accepted presentation/workshop-style paper; public-facing source is the ISIS 2025 award note and slides.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: [],
    tags: ['alignment faking', 'LLM safety', 'formal methods', 'evaluation'],
    image: '/ISIS/slide1.png',
  },
  {
    title: 'MekaNet: A Deep Learning Framework for Megakaryocyte Detection and Myeloproliferative Neoplasm Classification with Enhanced Feature Engineering',
    slug: 'mekanet-megakaryocyte-mpn-feature-engineering',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Submitted medical AI manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Medical AI / Pathology',
    summary:
      'A medical-image manuscript on megakaryocyte detection and myeloproliferative neoplasm classification with enhanced feature-engineering support.',
    tldr: 'A submitted MekaNet manuscript connecting megakaryocyte detection, MPN classification, and clinically shaped feature engineering.',
    role: 'Technical contributor for model/evaluation workflow and manuscript-support artifacts.',
    problem:
      'Megakaryocyte detection and MPN classification require clinically meaningful image features, reliable detection, and evaluation beyond generic computer-vision metrics.',
    keyIdea:
      'Combine detection-oriented deep learning with feature-engineering choices that better reflect the pathology task.',
    methods: ['Deep learning detection', 'Feature engineering', 'Pathology image analysis', 'Clinical classification workflow'],
    results: ['Submitted manuscript identified in the Overleaf paper-candidate index', 'Part of the broader MekaNet medical AI line'],
    contribution: ['Strengthens the applied-medical-AI axis', 'Shows how domain constraints reshape model and evaluation design'],
    statusNote: 'Submitted/draft manuscript; public detail intentionally remains high-level until venue status is final.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: ['mekanet-medical-ai'],
    tags: ['MekaNet', 'megakaryocyte', 'MPN', 'pathology', 'feature engineering'],
    image: '/mekanet.png',
  },
  {
    title: 'MekaNet: A Tiling-Enhanced Semi-Supervised Detection Framework for Megakaryocytes',
    slug: 'mekanet-tiling-enhanced-semisupervised-megakaryocytes',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'BMC / medical AI manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Medical AI / Pathology',
    summary:
      'A BMC-style medical-image manuscript on a tiling-enhanced semi-supervised framework for detecting megakaryocytes in pathology imagery.',
    tldr: 'A submitted MekaNet manuscript focused on tiling and semi-supervised detection for megakaryocytes.',
    role: 'Technical contributor for WSI/data pipeline, evaluation, and manuscript support.',
    problem:
      'Megakaryocyte detection in large pathology imagery is sensitive to tile construction, object scale, sparse labels, and semi-supervised data use.',
    keyIdea:
      'Use a tiling-enhanced semi-supervised detection framework to better handle the scale and label constraints of megakaryocyte detection.',
    methods: ['Tiling strategy', 'Semi-supervised detection', 'WSI/pathology preprocessing', 'Detection evaluation'],
    results: ['Submitted manuscript tracked in the Overleaf project index', 'Complements the broader MekaNet WSI/tiny-object work'],
    contribution: ['Documents a concrete medical-AI system, not just a generic model application', 'Adds domain-friction evidence to the applied-AI portfolio'],
    statusNote: 'Submitted/draft manuscript; details kept concise for public portfolio use.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: ['mekanet-medical-ai'],
    tags: ['MekaNet', 'tiling', 'semi-supervised learning', 'megakaryocyte', 'WSI'],
    image: '/meka-release.png',
  },
  {
    title: 'Automated Cellularity Assessment in Bone Marrow Using Deep Learning-Based Segmentation',
    slug: 'automated-cellularity-assessment-bone-marrow',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Submitted medical AI manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Medical AI / Segmentation',
    summary:
      'A bone-marrow cellularity assessment manuscript using deep learning-based segmentation for clinical image-analysis support.',
    tldr: 'A submitted medical-AI manuscript on bone-marrow cellularity assessment using segmentation.',
    role: 'Technical contributor for data/evaluation workflow and manuscript support.',
    problem:
      'Bone-marrow cellularity assessment requires robust segmentation and clinically meaningful aggregation rather than a single generic image-classification output.',
    keyIdea:
      'Use a segmentation-first pipeline to turn marrow imagery into cellularity estimates that can be evaluated and interpreted.',
    methods: ['Deep learning segmentation', 'Bone-marrow image analysis', 'Cellularity estimation', 'Clinical evaluation framing'],
    results: ['Submitted manuscript tracked in the Overleaf project index', 'Related to the MekaNet/cellularity pathology axis'],
    contribution: ['Adds a second pathology task beyond detection/classification', 'Shows the recurring pattern of domain data → structured measurement → evaluation'],
    statusNote: 'Submitted/draft manuscript; public details remain high-level pending final venue status.',
    researchAxis: 'applied-ai-methods',
    relatedProjects: ['mekanet-medical-ai'],
    tags: ['cellularity', 'bone marrow', 'segmentation', 'medical AI'],
    image: '/mekanet.png',
  },
  {
    title: 'Shortest Self-Orthogonal Embeddings of Selected Binary Codes',
    slug: 'shortest-self-orthogonal-embeddings-binary-codes',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Submitted coding-theory manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Coding theory / Formal mathematics',
    summary:
      'A coding-theory manuscript on shortest self-orthogonal embeddings of selected binary codes, connected to the formal-math backbone of the portfolio.',
    tldr: 'A submitted coding-theory manuscript on self-orthogonal embeddings, adjacent to the Lean/CodingTheoryLib line.',
    role: 'Research contributor; connected the coding-theory manuscript line to the broader formalization agenda.',
    problem:
      'Self-orthogonal embeddings of binary codes raise concrete construction and minimality questions that can later benefit from formalization and searchable theorem infrastructure.',
    keyIdea:
      'Study selected binary codes through their shortest self-orthogonal embeddings and associated construction constraints.',
    methods: ['Coding-theory construction', 'Self-orthogonality analysis', 'Binary-code embedding study'],
    results: ['Submitted manuscript tracked in the Overleaf paper-candidate index', 'Provides mathematical-domain material for future formalization'],
    contribution: ['Keeps the portfolio anchored in actual coding-theory research', 'Feeds the formalized mathematical AI substrate direction'],
    statusNote: 'Submitted/draft manuscript; listed as part of the complete submitted/accepted work inventory.',
    researchAxis: 'formalized-math-ai',
    relatedProjects: ['codingtheorylib-mcp'],
    tags: ['coding theory', 'binary codes', 'self-orthogonal embeddings', 'formalization'],
    image: '/thesis/lucas_circular_v1.png',
  },
  {
    title: 'A Novel Sudoku from Perfect Codes over the Ring of Integers Modulo n',
    slug: 'novel-sudoku-perfect-codes-zmodn',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Submitted coding-theory manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Coding theory / Combinatorial games',
    summary:
      'A manuscript on constructing Sudoku-type games from perfect codes over the ring of integers modulo n.',
    tldr: 'A submitted manuscript connecting perfect codes over Z/nZ to Sudoku-style combinatorial game construction.',
    role: 'Research contributor and application builder.',
    problem:
      'Sudoku-like games can be treated as mathematical structures, but their construction from perfect-code theory needs explicit provenance.',
    keyIdea:
      'Use perfect codes over the ring of integers modulo n as the construction substrate for novel Sudoku-type games.',
    methods: ['Perfect-code construction', 'Modular-ring combinatorics', 'Game-structure design'],
    results: ['Submitted manuscript tracked in the Overleaf project index', 'Related to the public Sudoku/game artifact line'],
    contribution: ['Links coding-theory constructions to public-facing artifacts', 'Keeps the maker/research bridge visible'],
    statusNote: 'Submitted/draft manuscript; paired with the broader symmetric Sudoku manuscript in the inventory.',
    researchAxis: 'formalized-math-ai',
    relatedProjects: ['sudoku-game'],
    tags: ['perfect codes', 'Z/nZ', 'Sudoku', 'combinatorics', 'coding theory'],
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);
