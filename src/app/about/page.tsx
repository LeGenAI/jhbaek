import Link from 'next/link';
import { Portrait } from '@/components/portrait';
import { solEvolveThesisUrl } from '@/data/publications';

export const metadata = { title: 'About', alternates: { canonical: '/about' } };

export default function AboutPage() {
  return (
    <main className="portfolio-page">
      <header className="grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-4 sm:max-w-4xl sm:grid-cols-[auto_1fr] sm:gap-x-10">
        <Portrait className="col-start-2 row-start-1 w-24 sm:col-start-1 sm:row-span-2 sm:w-40" />
        <div className="col-start-1 row-start-1 sm:col-start-2 sm:self-end">
          <h1 className="page-title">Jae-Hyun Baek</h1>
          <p lang="ko" className="mt-2 text-lg text-[#4a6258]">백재현</p>
        </div>
        <p className="page-intro col-span-2 mt-0 sm:col-span-1 sm:col-start-2 sm:self-start">
          I am a PhD student in AI at Sogang University and a technical lead at DeepFountain. I study error-correcting codes and use Lean to check the mathematics behind their construction.
        </p>
      </header>
      <section className="section-rule grid gap-4 md:grid-cols-[1fr_2fr]">
        <h2 className="section-title">At Sogang</h2>
        <div className="max-w-prose">
          <p className="leading-relaxed">My master’s thesis describes SolEvolve, a system that searches for combinatorial constructions. In my doctoral work with Professor Jon-Lark Kim, I study self-dual and entanglement-assisted quantum codes.</p>
          <div className="mt-2 flex flex-wrap gap-x-6">
            <a className="source-link" href={solEvolveThesisUrl}>Master’s thesis</a>
            <Link className="source-link" href="/research">Papers and proofs</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="experience" className="section-rule grid gap-4 md:grid-cols-[1fr_2fr]">
        <h2 id="experience" className="section-title scroll-mt-20">Experience</h2>
        <ul className="max-w-prose divide-y divide-[#c8d1c6]">
          <li className="pb-5">
            <h3 className="text-xl font-semibold">AI Engineer Intern, Canvas &amp; People</h3>
            <p className="meta-text mt-1">Mar–Apr 2026 · TaxCanvas</p>
            <p className="mt-2 leading-relaxed">I implemented graph and vector retrieval to link tax laws to supplementary provisions. I optimized LangGraph nodes and used LangSmith to monitor chatbot failures and negative feedback.</p>
          </li>
          <li className="py-5">
            <h3 className="text-xl font-semibold">Technical Lead, DeepFountain</h3>
            <p className="mt-2 leading-relaxed">I lead development of applied AI systems, including retrieval and agent workflows.</p>
          </li>
          <li className="pt-5">
            <h3 className="text-xl font-semibold">Teaching Assistant, Sogang University</h3>
            <p className="meta-text mt-1">Basic Artificial Intelligence · Fall 2026</p>
          </li>
        </ul>
      </section>
      <div className="section-rule flex flex-wrap gap-x-6">
        <Link className="source-link" href="/research/projects/sogambot">SOGAMBOT</Link>
        <Link className="source-link" href="/research/projects/mindbuddhi">MindBuddhi</Link>
        <Link className="source-link" href="/awards">Awards and certificates</Link>
        <Link className="source-link" href="/contact">Contact</Link>
      </div>
    </main>
  );
}
