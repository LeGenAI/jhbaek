import { ArrowRight, Github, Network, Search, ShieldCheck, Wrench } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PublicationCard } from '@/components/publication-card';
import { ArtifactCard } from '@/components/artifact-card';
import { featuredPublications } from '@/data/publications';
import { projectArtifacts } from '@/data/projects';

const pipeline = [
  { label: 'domain knowledge', detail: 'papers, logs, textbooks, PDFs, datasets' },
  { label: 'structured substrate', detail: 'Lean, graphs, vector memory, MCP, schemas' },
  { label: 'agent interface', detail: 'retrieval, prover, evaluator, product workflow' },
  { label: 'artifact', detail: 'paper, benchmark, deployed system, public tool' },
];

const axes = [
  {
    icon: ShieldCheck,
    title: 'Formalized mathematical AI',
    body: 'Coding theory, self-dual codes, Lean/Mathlib, and MCP-style memory for mathematical agents.',
  },
  {
    icon: Search,
    title: 'Auditable evaluation',
    body: 'EntropyMath and EntropyMaLean treat benchmarks as traceable processes, not frozen files.',
  },
  {
    icon: Network,
    title: 'Agent-readable knowledge',
    body: 'I keep asking what shape a domain must take before an agent, prover, or evaluator can use it.',
  },
  {
    icon: Wrench,
    title: 'Deployed AI systems',
    body: 'RAG chatbots, forecasting pipelines, medical AI tools, and education products keep the work grounded.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main>
        <section className="relative isolate min-h-screen overflow-hidden px-6 pt-32">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-25"
            style={{ backgroundImage: 'url(/background.jpg)' }}
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.78)_45%,_rgba(30,41,59,0.95))]" />

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 pb-24 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-8">
              <Badge className="border border-blue-300/30 bg-blue-400/10 px-4 py-1.5 text-blue-100 hover:bg-blue-400/10">
                Formalized Mathematical AI · Agentic Knowledge Systems · Applied AI Products
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  I turn domain knowledge into systems that agents can use.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                  I am a PhD student in AI at Sogang University and a technical lead at DeepFountain. My work sits between formal mathematics, AI evaluation, and deployed systems: Lean libraries for coding theory, auditable math benchmarks, RAG products, forecasting pipelines, and research memory for agents.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-950 hover:bg-blue-50">
                  <a href="/research">
                    View research map <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href="/contact">
                    Start a conversation
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-blue-200">the working pattern</p>
              <div className="space-y-4">
                {pipeline.map((step, index) => (
                  <div key={step.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 text-sm font-semibold text-slate-950">
                        {index + 1}
                      </span>
                      <h2 className="text-lg font-semibold text-white">{step.label}</h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="outline" className="border-slate-300 text-slate-600">workshop, not just CV</Badge>
              <h2 className="text-4xl font-semibold tracking-tight">The prototype usually starts ugly.</h2>
              <p className="text-lg leading-8 text-slate-600">
                A notebook. A pile of PDFs. A Lean theorem that will not compile. A dataset with missing values. A product log nobody wants to clean. If the idea survives that first mess, I try to turn it into something searchable, testable, and shareable.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {axes.map((axis) => {
                const Icon = axis.icon;
                return (
                  <div key={axis.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <Icon className="mb-5 h-7 w-7 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-950">{axis.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{axis.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl space-y-4">
                <Badge variant="outline" className="border-blue-200 text-blue-700">accepted and published work</Badge>
                <h2 className="text-4xl font-semibold tracking-tight">Papers are artifacts too.</h2>
                <p className="text-lg leading-8 text-slate-600">
                  I want the paper, the code, the benchmark, and the deployed system to point at the same underlying substrate whenever possible.
                </p>
              </div>
              <Button asChild variant="outline" className="w-fit">
                <a href="/research">All research</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {featuredPublications.slice(0, 4).map((publication) => (
                <PublicationCard key={publication.title} publication={publication} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="outline" className="border-slate-300 text-slate-600">systems I built</Badge>
              <h2 className="text-4xl font-semibold tracking-tight">A map of working artifacts.</h2>
              <p className="text-lg leading-8 text-slate-600">
                The surface changes from theorem proving to medical AI to RAG products. The maker habit is the same: find the hidden structure, make it computable, and ship a usable artifact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectArtifacts.slice(0, 6).map((artifact) => (
                <ArtifactCard key={artifact.title} artifact={artifact} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
