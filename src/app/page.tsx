import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { EaqeccProof } from '@/components/eaqecc-proof';

export const metadata: Metadata = {
  title: { absolute: 'Jae-Hyun Baek · Coding theory and formal verification' },
  description: 'Research by Jae-Hyun Baek at Sogang University. Explore a Lean-checked quantum code construction, self-dual codes, and reproducible experiments in combinatorial search.',
};

const selectedWork = [
  { title: 'Building up self-dual codes in Lean', note: 'How extending a code by two coordinates preserves self-duality.', href: '/research#self-dual-codes' },
  { title: 'SolEvolve', note: 'Reproducing combinatorial search results with SAT solvers and explicit witnesses.', href: '/research#solevolve' },
  { title: 'EntropyMaLean', note: 'Checking proposed mathematical proofs with Lean.', href: '/research#entropymalean' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f4] text-[#192c27]">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-8 sm:pt-24 lg:px-12 lg:pt-32">
        <div className="grid items-center gap-3 border-b border-[#c8d1c6] pb-8 sm:gap-8 lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)] lg:gap-14 lg:pb-14">
          <section className="contents lg:block">
            <header className="order-1">
              <div className="flex items-center gap-3">
                <Image src="/jhbaek_profile.jpg" width={54} height={54} alt="" className="h-11 w-11 rounded-full object-cover object-top sm:h-14 sm:w-14" />
                <div>
                  <p className="font-semibold">Jae-Hyun Baek <span lang="ko" className="pl-1 font-normal text-[#4a6258]">백재현</span></p>
                  <p className="text-sm text-[#4a6258]">AI PhD student · Sogang University</p>
                </div>
              </div>
              <h1 className="mt-5 max-w-xl font-serif text-[2.55rem] leading-[1.02] tracking-[-0.045em] sm:mt-7 sm:text-6xl xl:text-7xl">Searching for quantum codes</h1>
            </header>
            <div className="order-4 lg:mt-4">
              <p className="max-w-lg text-base leading-relaxed sm:text-lg">
                We used program search to find examples of entanglement-assisted quantum codes. We generalized them into a family and checked its algebraic certificate in Lean.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-[#52665d] sm:text-sm">Jae-Hyun Baek, Byung-Sun Won, Jon-Lark Kim · October 2026</p>
            </div>
            <div className="order-2 flex flex-wrap items-center gap-x-4 gap-y-1 lg:mt-3">
              <a href="https://arxiv.org/abs/2610.41183" className="inline-flex min-h-11 items-center gap-2 rounded bg-[#173f35] px-4 text-sm font-semibold text-white hover:bg-[#245848]">EAQECC paper <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="https://github.com/LeGenAI/llm_guided_EAQECC_search/blob/main/formal/eaqecc/README.md" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold underline underline-offset-4">Lean certificate <ArrowUpRight size={16} aria-hidden="true" /></a>
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
