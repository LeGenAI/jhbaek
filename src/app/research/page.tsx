import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
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
      { label: 'Lean certificate', href: 'https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/main/formal/eaqecc/README.md' },
      { label: 'EAQECC preprint', href: 'https://arxiv.org/abs/2610.41183' },
    ],
  },
  {
    id: 'self-dual-codes',
    title: 'Building up self-dual codes in Lean',
    credit: 'Jae-Hyun Baek, Jon-Lark Kim · 2026 preprint',
    finding: 'We studied when removing two coordinates reverses a building-up construction. The Lean project formalizes the algebraic core. Separate matrix checks cover the finite-field examples.',
    links: [
      { label: 'Paper-to-Lean map', href: 'https://github.com/LeGenAI/intersection-coding-theory-cohomology/blob/main/ARTIFACT_MAP.md' },
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

const textLink = 'inline-flex min-h-11 items-center text-sm font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:decoration-current';

export default function ResearchPage() {
  const papers = [...publications].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navigation />
      <main className="mx-auto max-w-5xl px-5 pb-20 pt-24 sm:px-8 md:pt-32">
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Selected Research in Formal Verification
        </h1>
        <nav aria-label="Research sections" className="mt-3 flex flex-wrap gap-x-5">
          <a className={textLink} href="#entropymalean">EntropyMaLean harness</a>
          <a className={textLink} href="#publications">Publications</a>
        </nav>
        <div className="mt-3 divide-y divide-slate-200 border-y border-slate-300">
          {selectedResearch.map((work) => (
            <article id={work.id} key={work.id} className="scroll-mt-20 py-5 sm:grid sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10 sm:py-7">
              <header>
                <h2 className="text-xl font-semibold leading-tight sm:text-2xl">{work.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{work.credit}</p>
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
          <h2 className="text-2xl font-semibold tracking-tight">EntropyMaLean evaluation harness</h2>
          <p className="mt-3 leading-relaxed">EntropyMaLean uses Lean to check proposed proofs. EntropyMath publishes model scores and per-problem results on its leaderboard.</p>
          <div className="flex flex-wrap gap-x-5">
            <Link className={textLink} href="/research/projects/entropymath-entropymag-entropymalean">Harness and benchmark details</Link>
            <a className={textLink} href="https://entropymath.com/">EntropyMath leaderboard</a>
          </div>
        </section>
        <section id="publications" className="mt-12 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">Publications and manuscripts</h2>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {papers.map((paper) => (
              <li key={paper.slug} className="py-3">
                <Link className="block py-1 text-base font-semibold leading-snug hover:text-blue-800 hover:underline" href={`/research/publications/${paper.slug}`}>{paper.title}</Link>
                <p className="text-sm leading-relaxed text-slate-600">{paper.year} · {paper.venue} · {paper.status}</p>
              </li>
            ))}
          </ul>
          <Link className={textLink} href="/artifacts">All projects</Link>
        </section>
      </main>
    </div>
  );
}
