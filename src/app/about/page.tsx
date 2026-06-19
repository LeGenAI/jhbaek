import Image from 'next/image';
import { Brain, GraduationCap, Network, PackageOpen, Wrench } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const workHabits = [
  {
    title: 'I look for the substrate first',
    body: 'A theorem, a PDF archive, a table, a product log, a set of screenshots: every project has some hidden knowledge shape. I try to make that shape explicit.',
  },
  {
    title: 'I build before the framing is perfect',
    body: 'Many of my projects begin as rough scripts, local tools, or one-off experiments. The useful ones become libraries, dashboards, papers, or deployed systems.',
  },
  {
    title: 'I care about agent access',
    body: 'If a human can understand a domain but an agent cannot search, reuse, or verify it, the knowledge is still half locked. That is why Lean, MCP, graph memory, and retrieval systems keep showing up in my work.',
  },
];

const timeline = [
  {
    label: 'Mathematics',
    text: 'Coding theory, self-dual codes, combinatorial structures, and formal proof became the technical backbone of my research.',
  },
  {
    label: 'AI systems',
    text: 'RAG products, forecasting workflows, medical AI, and education tools pushed me to turn research ideas into systems other people can use.',
  },
  {
    label: 'Research memory',
    text: 'The thread tying them together is now clearer: build agent-operable knowledge environments for domains that matter.',
  },
];

const selectionRules = [
  'Does this expose a domain substrate that agents, provers, or evaluators can reuse?',
  'Can the work leave behind an artifact: a library, dataset, benchmark, deployed assistant, or reproducible paper trail?',
  'Is there a real user, expert, or scientific question keeping the system honest?',
  'Will saying yes sharpen the core thesis, or only add another disconnected obligation?',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">about the maker</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              I build small bridges between messy knowledge and working systems.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              I am a PhD student in Sogang University's AI department, advised by Prof. Jong-Rak Kim, and a technical lead at DeepFountain. My work moves between formal mathematics, AI evaluation, and deployed AI systems.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              The projects look scattered at first: Lean libraries, math benchmarks, university chatbots, river forecasting, pathology images, Buddhist text retrieval. I see them as variations of one maker problem: how do we turn a domain into something searchable, verifiable, extensible, and useful?
            </p>
          </div>

          <Card className="overflow-hidden border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
              <div className="bg-slate-900 p-6 text-white">
                <Image
                  src="/jhbaek_profile.jpg"
                  alt="Jae-Hyun Baek"
                  width={144}
                  height={144}
                  priority
                  className="mb-6 h-36 w-36 rounded-3xl object-cover shadow-xl"
                />
                <h2 className="text-2xl font-semibold">Jae-Hyun Baek</h2>
                <p className="mt-2 text-sm text-slate-300">백재현</p>
              </div>
              <CardContent className="space-y-6 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">current roles</p>
                  <div className="mt-4 grid gap-3">
                    <div className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                      <GraduationCap className="mt-1 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">PhD student, Sogang AI</p>
                        <p className="text-sm text-slate-600">Formalized mathematical AI, coding theory, agentic evaluation</p>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                      <Wrench className="mt-1 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Technical lead, DeepFountain</p>
                        <p className="text-sm text-slate-600">Applied AI products, RAG systems, agent workflows</p>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                      <Network className="mt-1 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Research operator</p>
                        <p className="text-sm text-slate-600">Turning domain knowledge into papers, benchmarks, and deployed artifacts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <Badge variant="outline" className="border-slate-300 text-slate-600">how I work</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">The same motion, different domains.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {workHabits.map((habit) => (
              <Card key={habit.title} className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{habit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{habit.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl rounded-[2rem] bg-slate-900 p-8 text-white md:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <PackageOpen className="mb-5 h-9 w-9 text-blue-300" />
              <h2 className="text-4xl font-semibold tracking-tight">What I am trying to become</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                A researcher-builder who can turn a domain into an agent-operable research environment: searchable, verifiable, extensible, and useful enough to become either a paper or a product.
              </p>
            </div>
            <div className="grid gap-4">
              {timeline.map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-white">{item.label}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <Card className="border-blue-100 bg-blue-50 shadow-sm">
            <CardContent className="flex flex-col gap-5 p-8 md:flex-row md:items-start">
              <Brain className="h-8 w-8 shrink-0 text-blue-700" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">The question I keep asking</h2>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  What is the knowledge substrate here, and what would it take for an agent, prover, evaluator, or product team to use it without guessing?
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto mt-10 max-w-7xl">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardContent className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[0.42fr_0.58fr]">
              <div>
                <Badge variant="outline" className="border-slate-300 text-slate-600">selection rule</Badge>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">How I decide what belongs in the workshop</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  The risk in my work is not lack of ideas; it is letting too many unrelated ideas blur the main direction. These are the filters I want future projects to pass.
                </p>
              </div>
              <div className="grid gap-3">
                {selectionRules.map((rule, index) => (
                  <div key={rule} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{rule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
