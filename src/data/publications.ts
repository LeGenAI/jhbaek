export type PublicationStatus = 'Published' | 'Accepted' | 'Under Review' | 'Submitted' | 'In Preparation';

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: PublicationStatus;
  area: string;
  summary: string;
  tags: string[];
  image?: string;
  links?: {
    paper?: string;
    project?: string;
    code?: string;
    researchGate?: string;
  };
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'Performance Improvement of LLMs for Regulatory Document Understanding based on Modified RAG Approach',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    venue: 'JKIIS',
    year: '2025',
    status: 'Published',
    area: 'RAG / Regulatory AI',
    summary:
      'A modified retrieval augmented generation framework for regulatory documents. This is one of the applied roots of my current interest in turning domain documents into agent-readable memory.',
    tags: ['RAG', 'regulatory documents', 'LLM evaluation', 'best paper'],
    image: '/award_kiis_2024.png',
    links: {
      researchGate: 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf',
    },
    featured: true,
  },
  {
    title: 'Application of TimeGPT for Enhancing Water Level Prediction in Gamcheon River, Korea',
    authors: 'Jon-Lark Kim, Jae-Hyun Baek, Keon-Hwi Kim, Tae Hyo Baek, Chang-Lae Jang',
    venue: 'Accepted manuscript',
    year: '2025',
    status: 'Accepted',
    area: 'Time-series / Hydrology AI',
    summary:
      'A study of foundation-model forecasting for river water levels. We compare TimeGPT with classical and linear baselines under rolling-origin evaluation on the Gamcheon River setting.',
    tags: ['TimeGPT', 'water-level prediction', 'foundation models', 'environmental AI'],
    image: '/accepted/Application_of_TimeGPT_for_enhancing_water_level_prediction_in_Gamcheon_River__Korea/TimeGPT_overall.png',
    links: {
      researchGate: 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf',
    },
    featured: true,
  },
  {
    title: 'Hybrid Multimodal GenAI for Solving Math Problems Containing Various Figures',
    authors: 'Sangsoo Lee, Jae-Hyun Baek, Jon-Lark Kim',
    venue: 'Accepted manuscript',
    year: '2025',
    status: 'Accepted',
    area: 'VLM / Mathematical reasoning',
    summary:
      'A hybrid pipeline combining visual retrieval and LLM reasoning for diagram-heavy mathematical problems, especially cases where OCR-only methods miss the actual structure of the figure.',
    tags: ['VLM', 'ColPali', 'MathVision', 'multimodal reasoning'],
    image: '/accepted/Hybrid multimodal GenAI for solving math problems containing various figures_v2_20250209/colpalianstwo.png',
    links: {
      researchGate: 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf',
    },
    featured: true,
  },
  {
    title: 'SolEvolve: LLM-driven Evolutionary Discovery of Algorithms',
    authors: 'Jae-Hyun Baek',
    venue: "Master's thesis / manuscript track",
    year: '2025',
    status: 'Submitted',
    area: 'Evolutionary discovery / Coding theory',
    summary:
      'An autonomous search system where LLM-guided operators, SAT-seeded search, and verification loops rediscover strong coding-theoretic constructions.',
    tags: ['evolutionary search', 'SAT', 'coding theory', 'algorithm discovery'],
    image: '/thesis/graphical_abstract.png',
    featured: true,
  },
  {
    title: 'MekaNet: WSI-based Tiny Object Detection',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Medical image analysis manuscript',
    year: '2025',
    status: 'Under Review',
    area: 'Medical AI / Computer vision',
    summary:
      'A whole-slide-image pipeline for small object detection in pathology. It belongs to the applied side of my work: turning difficult domain data into usable AI systems.',
    tags: ['medical AI', 'WSI', 'tiny object detection', 'computer vision'],
    image: '/mekanet.png',
  },
  {
    title: 'Symmetric Sudoku-Type Games from Perfect Codes',
    authors: 'Jae-Hyun Baek et al.',
    venue: 'Submitted manuscript',
    year: '2025',
    status: 'Submitted',
    area: 'Coding theory / Combinatorial games',
    summary:
      'A coding-theoretic construction of Sudoku-type puzzle structures from perfect codes and symmetry principles.',
    tags: ['coding theory', 'perfect codes', 'games', 'combinatorics'],
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);
