import { BookOpen, Boxes, FileText, FlaskConical, Network, ShieldCheck } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PublicationCard } from '@/components/publication-card';
import { ArtifactCard } from '@/components/artifact-card';
import { publications } from '@/data/publications';
import { projectArtifacts } from '@/data/projects';

const researchAxes = [
  {
    icon: ShieldCheck,
    title: 'Formalized mathematical AI',
    body: 'Coding theory, self-dual codes, building-up constructions, Lean/Mathlib, and formal memory for theorem-proving agents.',
    tags: ['Lean', 'CodingTheoryLib', 'Mathlib', 'MCP'],
  },
  {
    icon: FlaskConical,
    title: 'Auditable benchmark evolution',
    body: 'EntropyMath and EntropyMaLean explore generated math problems with lineage, solver traces, verifier contracts, and evaluation artifacts.',
    tags: ['EntropyMath', 'AI4Math', 'verification', 'benchmarks'],
  },
  {
    icon: Network,
    title: 'Agent-readable research memory',
    body: 'A recurring goal is to make domain knowledge searchable and reusable by agents through graphs, retrieval layers, and MCP-style interfaces.',
    tags: ['GBrain', 'Neo4j', 'vector memory', 'agents'],
  },
  {
    icon: Boxes,
    title: 'Applied AI systems',
    body: 'The applied side keeps the research honest: RAG systems, forecasting pipelines, medical AI, education tools, and deployed prototypes.',
    tags: ['RAG', 'forecasting', 'medical AI', 'products'],
  },
];

export default function ResearchPage() {
  const featured = publications.filter((publication) => publication.featured);
  const manuscripts = publications.filter((publication) => !publication.featured);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-5">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">research and publications</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Papers, systems, and the knowledge substrates underneath them.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              My research sits at the boundary between formal mathematics and working AI systems. I care about the artifact behind the claim: the Lean library, the benchmark lineage, the retrieval graph, the evaluation pipeline, the deployed product.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl space-y-8">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-semibold tracking-tight">Featured publications</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featured.map((publication) => (
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="border-slate-300 text-slate-600">research axes</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">The threads that keep repeating.</h2>
            <p className="text-lg leading-8 text-slate-600">
              The domains change, but the research pattern is stable: formalize the domain, expose it to agents, test it through evaluation, and turn the result into a paper or product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {researchAxes.map((axis) => {
              const Icon = axis.icon;
              return (
                <Card key={axis.title} className="border-slate-200 bg-white shadow-sm">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{axis.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-6 text-slate-600">{axis.body}</p>
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
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-semibold tracking-tight">Manuscripts and selected work</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {manuscripts.map((publication) => (
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="border-slate-300 text-slate-600">systems and artifacts</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">The systems behind the papers.</h2>
            <p className="text-lg leading-8 text-slate-600">
              I want the work to leave behind something usable: a library, a benchmark, a deployed assistant, a forecasting workflow, or a research memory an agent can query.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectArtifacts.map((artifact) => (
              <ArtifactCard key={artifact.title} artifact={artifact} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
