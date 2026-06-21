import { ArrowRight, PenLine } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const notes = [
  {
    title: 'Formalized research memory for mathematical agents',
    status: 'planned essay',
    summary:
      'Why a domain like coding theory needs formal statements, proof trajectories, graph memory, and MCP-style access before a theorem-proving agent can be useful.',
    tags: ['Lean', 'AI4Math', 'research memory'],
  },
  {
    title: 'Benchmarks as auditable processes, not files',
    status: 'revision note',
    summary:
      'A public-facing explanation of the EntropyMath / EntropyMaLean direction: lineage, validation contracts, solver traces, and what Lean does and does not guarantee.',
    tags: ['EntropyMath', 'evaluation', 'provenance'],
  },
  {
    title: 'From RAG to agent-readable knowledge substrates',
    status: 'field note',
    summary:
      'What SOGAMBOT, MindBuddhi, regulatory RAG, and TaxCanvas-style retrieval taught me about source-grounded assistants beyond generic chatbot UX.',
    tags: ['RAG', 'agents', 'deployed systems'],
  },
];

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-5">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">writing / notes</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Notes that make the research program legible.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              A strong AI researcher portfolio needs more than a list of publications. This page is the planned surface for technical essays, research notes, and design memos that explain how the artifacts fit together.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.title} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <PenLine className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="border-slate-200 text-slate-600">{note.status}</Badge>
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-slate-950">{note.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{note.summary}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mx-auto mt-14 max-w-7xl rounded-[2rem] bg-slate-900 p-8 text-white md:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.7fr_0.3fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">First goal: publish three source-backed research notes.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                The notes should be short enough to read, concrete enough to cite, and connected to public artifacts rather than generic AI commentary.
              </p>
            </div>
            <Link href="/research" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-100">
              Back to research <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
