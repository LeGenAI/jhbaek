import { Boxes, ExternalLink, Filter, GitBranch } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { ArtifactCard } from '@/components/artifact-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projectArtifacts } from '@/data/projects';

const artifactGroups = [
  {
    label: 'Formal substrates',
    description: 'Lean, proof libraries, and agent-facing mathematical memory.',
    match: ['formalized-math-ai'],
  },
  {
    label: 'Evaluation artifacts',
    description: 'Benchmarks, lineages, solver traces, and verification contracts.',
    match: ['auditable-evaluation'],
  },
  {
    label: 'Fielded knowledge systems',
    description: 'RAG products and assistants that test the substrate pattern with real users.',
    match: ['deployed-knowledge-systems'],
  },
  {
    label: 'Applied AI pipelines',
    description: 'Forecasting, medical, and education systems shaped by domain friction.',
    match: ['applied-ai-methods'],
  },
];

export default function ArtifactsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-5">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">artifacts</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Code, demos, benchmarks, and systems that make the research inspectable.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              I want the portfolio to show more than claims. Each artifact below is a working surface: a library, benchmark, deployed assistant, evaluation workflow, or research pipeline that carries the larger thesis from idea to evidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
                <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                  GitHub repositories <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://entropymath.com" target="_blank" rel="noopener noreferrer">
                  EntropyMath <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {artifactGroups.map((group) => (
            <Card key={group.label} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  {group.label === 'Evaluation artifacts' ? <GitBranch className="h-5 w-5" /> : group.label === 'Fielded knowledge systems' ? <Filter className="h-5 w-5" /> : <Boxes className="h-5 w-5" />}
                </div>
                <h2 className="text-lg font-semibold text-slate-950">{group.label}</h2>
                <p className="text-sm leading-6 text-slate-600">{group.description}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {projectArtifacts.filter((artifact) => group.match.includes(artifact.researchAxis)).length} artifacts
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mx-auto mt-14 max-w-7xl space-y-8">
          {artifactGroups.map((group) => {
            const items = projectArtifacts.filter((artifact) => group.match.includes(artifact.researchAxis));
            return (
              <div key={group.label} className="space-y-5">
                <div>
                  <Badge variant="outline" className="border-slate-300 text-slate-600">{group.label}</Badge>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">{group.description}</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((artifact) => (
                    <ArtifactCard key={artifact.slug} artifact={artifact} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
