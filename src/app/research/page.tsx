import { ArrowRight, BookOpen, Boxes, ExternalLink, FileText, FlaskConical, Network, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PublicationCard } from '@/components/publication-card';
import { ArtifactCard } from '@/components/artifact-card';
import { publications } from '@/data/publications';
import { projectArtifacts } from '@/data/projects';

const researchAxes = [
  {
    id: 'formalized-math-ai',
    icon: ShieldCheck,
    title: 'Formalized Mathematical AI',
    thesis: 'Make mathematical knowledge formal, searchable, and reusable by theorem-proving agents.',
    body:
      'This is the spine of the portfolio: coding theory, self-dual codes, Lean/Mathlib, closed-agent math solving, and domain-specific memory for mathematical agents.',
    questions: ['What should a mathematical domain look like before an agent can use it?', 'How do Lean artifacts, proof trajectories, and MCP interfaces become reusable research memory?'],
    tags: ['Lean', 'CodingTheoryLib', 'AI4Math', 'MCP', 'proof trajectories'],
  },
  {
    id: 'auditable-evaluation',
    icon: FlaskConical,
    title: 'Auditable Benchmark Evolution',
    thesis: 'Treat benchmarks as inspectable processes, not static files.',
    body:
      'EntropyMath, EntropyMaG, and EntropyMaLean connect generated problems to lineage, solver traces, verifier contracts, and revision-ready evidence.',
    questions: ['What does a generated math benchmark need to expose before it can be trusted?', 'Can verification and lineage become first-class evaluation artifacts?'],
    tags: ['EntropyMath', 'benchmark lineage', 'verification', 'solver traces'],
  },
  {
    id: 'deployed-knowledge-systems',
    icon: Network,
    title: 'Deployed Knowledge Systems',
    thesis: 'Use real products to test whether a knowledge substrate actually helps people.',
    body:
      'SOGAMBOT, MindBuddhi, regulatory RAG, and institutional assistants keep the agent-readable-memory idea grounded in messy users, documents, and product constraints.',
    questions: ['Can source-grounded answers preserve the texture of a domain?', 'What breaks when retrieval leaves a notebook and becomes a user-facing system?'],
    tags: ['RAG', 'source grounding', 'product UX', 'domain memory'],
  },
  {
    id: 'applied-ai-methods',
    icon: Boxes,
    title: 'Applied AI Methods under Real Constraints',
    thesis: 'Use forecasting, medical images, and education tools to keep the research honest.',
    body:
      'Hydrology, whole-slide images, and education systems create pressure that clean benchmarks often hide: missing data, clinical validation, event timing, and operational evaluation.',
    questions: ['What evaluation choices matter outside the benchmark?', 'How does domain friction reshape the model pipeline?'],
    tags: ['forecasting', 'medical AI', 'education AI', 'evaluation'],
  },
];

export default function ResearchPage() {
  const featured = publications.filter((publication) => publication.featured && publication.status === 'Published');
  const submittedAndAccepted = publications.filter((publication) =>
    ['Accepted', 'Submitted', 'Under Review'].includes(publication.status),
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-5">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">research program</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Formal, searchable, and testable knowledge for AI agents.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              My work asks how messy domain knowledge becomes something an agent, prover, evaluator, or real user can reliably use. The domains range from Lean and coding theory to RAG products, hydrology, and medical images, but the motion is the same: substrate → interface → evidence → artifact.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
                <Link href="/artifacts">
                  Browse artifacts <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                  GitHub <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf" target="_blank" rel="noopener noreferrer">
                  ResearchGate <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="border-slate-300 text-slate-600">research map</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">Four threads, one repeated pattern.</h2>
            <p className="text-lg leading-8 text-slate-600">
              Each axis below links a question to the papers and systems that carry it. This is the page that should explain the research program before anyone sees a certificate or a trophy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {researchAxes.map((axis) => {
              const Icon = axis.icon;
              const axisPublications = publications.filter((publication) => publication.researchAxis === axis.id).slice(0, 3);
              const axisArtifacts = projectArtifacts.filter((artifact) => artifact.researchAxis === axis.id).slice(0, 3);

              return (
                <Card key={axis.title} className="border-slate-200 bg-white shadow-sm">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{axis.title}</CardTitle>
                    <p className="pt-2 text-sm font-semibold leading-6 text-blue-800">{axis.thesis}</p>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-6 text-slate-600">{axis.body}</p>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">questions</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                        {axis.questions.map((question) => (
                          <li key={question}>• {question}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">papers</p>
                        <div className="mt-3 space-y-2">
                          {axisPublications.map((publication) => (
                            <Link key={publication.slug} href={`/research/publications/${publication.slug}`} className="block text-sm font-medium leading-6 text-slate-700 hover:text-blue-700">
                              {publication.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">artifacts</p>
                        <div className="mt-3 space-y-2">
                          {axisArtifacts.map((artifact) => (
                            <Link key={artifact.slug} href={`/research/projects/${artifact.slug}`} className="block text-sm font-medium leading-6 text-slate-700 hover:text-blue-700">
                              {artifact.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {axis.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl space-y-8">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-semibold tracking-tight">Selected publications</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featured.map((publication) => (
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">
            Status labels separate published/accepted work from submitted or under-review manuscripts. Each detail page explains the problem, key idea, role, evidence, and related artifacts.
          </div>
        </section>

        {submittedAndAccepted.length > 0 ? (
          <section className="mx-auto mt-20 max-w-7xl space-y-8">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-semibold tracking-tight">Submitted, accepted, and under-review papers</h2>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
              This section is an inventory, not a selective shelf: it includes the accepted works, workshop/conference submissions, submitted manuscripts, and under-review manuscripts I have evidence for in the local research archive.
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {submittedAndAccepted.map((publication) => (
                <PublicationCard key={publication.title} publication={publication} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto mt-20 max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="border-slate-300 text-slate-600">systems and artifacts</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">The systems behind the papers.</h2>
            <p className="text-lg leading-8 text-slate-600">
              The public site should make artifacts easier to inspect than awards. These systems are the working surfaces where the research program becomes code, data, demos, and deployed tools.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectArtifacts.slice(0, 6).map((artifact) => (
              <ArtifactCard key={artifact.title} artifact={artifact} />
            ))}
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/artifacts">
              View all artifacts <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
