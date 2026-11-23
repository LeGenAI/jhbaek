import type { Metadata } from 'next';
import { Portrait } from '@/components/portrait';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EaqeccProof } from '@/components/eaqecc-proof';

export const metadata: Metadata = {
  title: { absolute: 'Jae-Hyun Baek · Coding theory and formal verification' },
  description: 'Research by Jae-Hyun Baek at Sogang University. Explore a Lean-checked quantum code construction, self-dual codes, and reproducible experiments in combinatorial search.',
};

const selectedWork = [
  { title: 'EntropyMaLean', note: 'How I use Lean errors to guide revisions and replay proofs against the original goal.', href: '/research/projects/entropymath-entropymag-entropymalean' },
  { title: 'Building up self-dual codes in Lean', note: 'How extending a code by two coordinates preserves self-duality.', href: '/research#self-dual-codes' },
  { title: 'SolEvolve', note: 'Reproducing combinatorial search results with SAT solvers and explicit witnesses.', href: '/research#solevolve' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f4] text-[#192c27]">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-8 sm:pt-24 lg:px-12 lg:pt-32">
        <div className="grid items-center gap-3 border-b border-[#c8d1c6] pb-8 sm:gap-8 lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)] lg:gap-14 lg:pb-14">
          <section className="contents lg:block">
            <header className="order-1">
              <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 sm:block">
                <Portrait className="col-start-2 row-span-2 row-start-1 w-[4.75rem] min-[375px]:w-24 sm:float-left sm:mr-5 sm:w-28" />
                <div className="col-start-1 row-start-1 sm:min-h-36 sm:pt-8">
                  <p className="font-semibold">Jae-Hyun Baek <span lang="ko" className="pl-1 font-normal text-[#4a6258]">백재현</span></p>
                  <p className="meta-text">AI PhD student · Sogang University</p>
                </div>
                <h1 className="col-start-1 row-start-2 max-w-xl font-serif text-[2rem] leading-[1.02] tracking-[-0.045em] min-[375px]:text-[2.55rem] sm:mt-5 sm:clear-both sm:text-6xl xl:text-7xl">Searching for quantum codes</h1>
              </div>
            </header>
            <div className="order-4 lg:mt-4">
              <p className="max-w-lg text-base leading-relaxed sm:text-lg">
                Our search programs found finite qubit constructions. We used their structure to derive a family of quantum codes. Lean checks the dimension, radical, and weight results. In the paper we apply the stabilizer correspondence to obtain the code parameters.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-[#52665d] sm:text-sm">Jae-Hyun Baek, Byung-Sun Won, Jon-Lark Kim · October 2026</p>
            </div>
            <div className="order-2 flex flex-wrap items-center gap-x-4 gap-y-1 lg:mt-3">
              <a href="https://arxiv.org/abs/2610.41183v1" className="inline-flex min-h-11 items-center gap-2 rounded bg-[#173f35] px-4 text-sm font-semibold text-white hover:bg-[#245848]">EAQECC paper <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/3e7b2e8d42487f1f117f0ab9b457c50701588068/formal/eaqecc/README.md" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold underline underline-offset-4">Lean certificate <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </section>
          <div className="order-3 min-w-0"><EaqeccProof /></div>
        </div>
        <section aria-labelledby="selected-work" className="pt-7 lg:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-x-4">
            <h2 id="selected-work" className="font-serif text-3xl tracking-tight">Selected work</h2>
            <Link href="/research" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:underline">All research <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <ul className="mt-4 grid gap-5 sm:grid-cols-3 lg:gap-8">
            {selectedWork.map((work) => (
              <li key={work.href} className="border-t border-[#c8d1c6] pt-1">
                <Link href={work.href} className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold leading-snug hover:underline">{work.title}<ArrowRight size={15} aria-hidden="true" className="shrink-0" /></Link>
                <p className="text-sm leading-relaxed text-[#4a6258]">{work.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
