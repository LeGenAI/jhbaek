import type { Metadata } from 'next';
import Link from 'next/link';
import { publications, solEvolveThesisUrl } from '@/data/publications';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Lean proofs for error-correcting codes, reproducible search experiments, and publications by Jae-Hyun Baek.',
  alternates: { canonical: '/research' },
};

const selectedResearch = [
  {
    id: 'eaqecc',
    title: 'Entanglement-assisted quantum codes',
    credit: 'Jae-Hyun Baek, Byung-Sun Won, Jon-Lark Kim · 2026 preprint',
    finding: 'We derived a family of quantum codes from finite constructions found by program search. Lean checks the algebraic certificate for Theorem 1. The family and entanglement lifting close 54 gaps in archived code tables.',
    links: [
      { label: 'Lean certificate', href: 'https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/3e7b2e8d42487f1f117f0ab9b457c50701588068/formal/eaqecc/README.md' },
      { label: 'EAQECC preprint', href: 'https://arxiv.org/abs/2610.41183v1' },
    ],
  },
  {
    id: 'self-dual-codes',
    title: 'Building up self-dual codes in Lean',
    credit: 'Jae-Hyun Baek, Jon-Lark Kim · 2026 preprint',
    finding: 'We studied when removing two coordinates reverses a building-up construction. Theorem 3.15 in v2 fixes the pairing of the coordinates and gives a rank-r normal form. The pinned Comparator file states the two Lean goals in Listing 9.',
    links: [
      { label: 'Comparator specification (v2)', href: 'https://github.com/LeGenAI/intersection-coding-theory-cohomology/blob/9c2c4a2ce24552dd57b69fbb5a7f0c071d120d5b/Formalization/Verification/Comparator/QaryRankBoxedNormalizationChallenge.lean' },
      { label: 'Self-dual codes preprint', href: 'https://arxiv.org/abs/2604.08485v2' },
    ],
  },
  {
    id: 'solevolve',
    title: 'SolEvolve',
    credit: 'Lead developer · Under review at Neurocomputing (minor revision requested)',
    finding: 'I built an LLM-guided system for searching combinatorial constructions. The reviewer command checks bundled witnesses, including Lucas-cube center sets, and writes a report without calling an LLM.',
    links: [
      { label: 'Reviewer reproduction', href: 'https://github.com/LeGenAI/sol_evolve#reviewer-reproduction' },
      { label: 'Master’s thesis (Sogang University)', href: solEvolveThesisUrl },
      { label: 'SolEvolve manuscript details', href: '/research/publications/solevolve-evolutionary-discovery' },
    ],
  },
];

const textLink = 'source-link';

export default function ResearchPage() {
  const papers = [...publications].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <main className="portfolio-page">
      <h1 className="page-title max-w-4xl">
        Selected Research in Formal Verification
      </h1>
      <nav aria-label="Research sections" className="mt-3 flex flex-wrap gap-x-5">
        <Link className={textLink} href="/research/projects/entropymath-entropymag-entropymalean">EntropyMaLean harness</Link>
        <a className={textLink} href="#publications">Publications</a>
      </nav>
      <div className="mt-3 divide-y divide-[#c8d1c6] border-y border-[#c8d1c6]">
        {selectedResearch.map((work) => (
          <article id={work.id} key={work.id} className="scroll-mt-20 py-5 sm:grid sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10 sm:py-7">
            <header>
              <h2 className="text-xl font-semibold leading-tight sm:text-2xl">{work.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4a6258]">{work.credit}</p>
            </header>
            <div className="mt-3 sm:mt-0">
              <div className="flex flex-wrap gap-x-5">
                {work.links.map(({ href, label }) => <Link key={href} href={href} className={textLink}>{label}</Link>)}
              </div>
              <p className="mt-1 leading-relaxed">{work.finding}</p>
            </div>
          </article>
        ))}
      </div>
      <section id="entropymalean" className="mt-10 max-w-2xl scroll-mt-24">
        <h2 className="section-title">EntropyMaLean evaluation harness</h2>
        <p className="mt-3 leading-relaxed">I refined the harness to return Lean errors for another proof attempt and replay accepted proofs against the original goal. I set up experiments with two Nemotron models. EntropyMath reports benchmark scores separately.</p>
        <div className="flex flex-wrap gap-x-5">
          <Link className={textLink} href="/research/projects/entropymath-entropymag-entropymalean">Harness and benchmark details</Link>
          <a className={textLink} href="https://entropymath.com/">EntropyMath leaderboard</a>
        </div>
      </section>
      <section id="publications" className="mt-12 scroll-mt-24">
        <h2 className="mb-4 section-title">Publications and manuscripts</h2>
        <ul className="divide-y divide-[#c8d1c6] border-y border-[#c8d1c6]">
          {papers.map((paper) => (
            <li key={paper.slug} className="py-3">
              <Link className="block py-1 text-base font-semibold leading-snug hover:text-[#225441] hover:underline" href={`/research/publications/${paper.slug}`}>{paper.title}</Link>
              <p className="text-sm leading-relaxed text-[#4a6258]">{paper.year} · {paper.venue} · {paper.status}</p>
            </li>
          ))}
        </ul>
        <Link className={textLink} href="/artifacts">All projects</Link>
      </section>
    </main>
  );
}
