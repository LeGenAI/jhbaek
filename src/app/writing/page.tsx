import Link from 'next/link';
import { solEvolveThesisUrl } from '@/data/publications';

export const metadata = { title: 'Writing', alternates: { canonical: '/writing' } };

const notes = [
  { title: 'Retrieving definitions for a coding-theory proof', stage: 'Planned essay', description: 'How a proof assistant can look up field assumptions and definitions across textbooks.', href: '/research/projects/codingtheorylib-mcp', source: 'CodingTheoryLib example' },
  { title: 'Checking a generated mathematics problem', stage: 'Revision note', description: 'What the benchmark records about a solver’s answer, and what a Lean proof can establish.', href: '/research/projects/entropymath-entropymag-entropymalean', source: 'EntropyMath project' },
  { title: 'Answering questions from university documents', stage: 'Field note', description: 'How SOGAMBOT connects a student’s question to its source in a university document.', href: '/research/projects/sogambot', source: 'SOGAMBOT project' },
];

export default function WritingPage() {
  return (
    <main className="portfolio-page">
      <h1 className="page-title">Writing</h1>
      <section className="section-rule grid gap-4 md:grid-cols-[1fr_2fr]">
        <h2 className="section-title">Master’s thesis</h2>
        <div className="max-w-prose">
          <h3 className="text-xl font-semibold">SolEvolve</h3>
          <p className="mt-2 leading-relaxed">My thesis at Sogang University describes a search system for finding combinatorial constructions.</p>
          <a href={solEvolveThesisUrl} className="source-link">Read the thesis at Sogang</a>
        </div>
      </section>
      <section className="section-rule">
        <h2 className="section-title">Notes in progress</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
          {notes.map((note) => (
            <article key={note.href} className="border-t border-[#c8d1c6] pt-3">
              <p className="meta-text">{note.stage}</p>
              <h3 className="mt-2 font-serif text-2xl leading-tight">{note.title}</h3>
              <p className="mt-3 leading-relaxed">{note.description}</p>
              <Link href={note.href} className="source-link">{note.source}</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
