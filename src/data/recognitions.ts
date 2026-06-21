export type Recognition = {
  title: string;
  year: string;
  venue: string;
  recognizedWork: string;
  relatedThread: string;
  whyItMatters: string;
  image?: string;
  sourceUrl?: string;
};

export const recognitions: Recognition[] = [
  {
    title: 'Best Presentation Award',
    year: '2025',
    venue: 'ISIS 2025, International Symposium on Advanced Intelligent Systems',
    recognizedWork: 'A Case Study on Alignment Faking in LLMs',
    relatedThread: 'AI safety / evaluation behavior',
    whyItMatters:
      'Useful as an external signal that the portfolio includes evaluation and safety-oriented reasoning, not only product building.',
    image: '/ISIS/IMG_8109.png',
  },
  {
    title: 'Best Paper Award',
    year: '2026',
    venue: '2026 KIIS Spring Conference',
    recognizedWork: 'Proposal of an LLM-Lean approach and architecture for automated mathematical problem solving',
    relatedThread: 'Formalized Mathematical AI',
    whyItMatters:
      'Public evidence that the IMDS Lean/AI4Math line moved from internal experiments into an official presentation track.',
    image: '/awards/kiis-2026-lean-best-paper.jpg',
    sourceUrl: 'https://imds.sogang.ac.kr/front/cmsboardview.do?currentPage=1&searchField=ALL&searchValue=&searchLowItem=ALL&bbsConfigFK=7110&siteId=imds&pkid=937656',
  },
  {
    title: 'Best Paper Award',
    year: '2025',
    venue: 'Korean Institute of Intelligent Systems',
    recognizedWork: 'Water Level Forecasting using AI',
    relatedThread: 'Applied AI Methods under Real Constraints',
    whyItMatters:
      'Connects the applied forecasting line to peer-visible recognition while the main site keeps the research question, not the certificate, at the center.',
    image: '/KIIS_춘계우수14_감천 수위 예측을 위한 LLM 방법론.png',
  },
  {
    title: 'Best Paper Award',
    year: '2024',
    venue: 'Korean Institute of Intelligent Systems',
    recognizedWork: 'Performance Optimization of RAG-based LLMs',
    relatedThread: 'Deployed Knowledge Systems',
    whyItMatters:
      'An early signal for the RAG/domain-document line that later connects to institutional, legal, and source-grounded assistants.',
    image: '/award_kiis_2024.png',
  },
  {
    title: 'Encouragement Prize',
    year: '2024',
    venue: '1st AI Commercial Festival',
    recognizedWork: 'AI-driven advertising business prototype',
    relatedThread: 'Builder / product systems',
    whyItMatters:
      'A product-oriented signal; useful as background, but intentionally kept secondary to the research-program narrative.',
    image: '/제1회AICF_장려상_백재현.png',
  },
];
