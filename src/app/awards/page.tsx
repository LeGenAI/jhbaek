import { Award, GraduationCap, Trophy } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const awards = [
  {
    title: 'Best Presentation Award',
    year: '2025',
    venue: 'ISIS 2025, International Symposium on Advanced Intelligent Systems',
    work: 'A Case Study on Alignment Faking in LLMs',
    note: 'Recognized for a study on monitoring-aware behavior in language models and the formal framing of alignment faking.',
    image: '/ISIS/IMG_8109.png',
    tone: 'rose',
  },
  {
    title: 'Best Paper Award',
    year: '2025',
    venue: 'Korean Institute of Intelligent Systems',
    work: 'Water Level Forecasting using AI',
    note: 'A forecasting-oriented applied AI paper connected to the TimeGPT water-level prediction line of work.',
    image: '/KIIS_춘계우수14_감천 수위 예측을 위한 LLM 방법론.png',
    tone: 'blue',
  },
  {
    title: 'Best Paper Award',
    year: '2024',
    venue: 'Korean Institute of Intelligent Systems',
    work: 'Performance Optimization of RAG-based LLMs',
    note: 'An early applied-RAG recognition that fed into later work on domain documents and agent-readable retrieval systems.',
    image: '/award_kiis_2024.png',
    tone: 'amber',
  },
  {
    title: 'Encouragement Prize',
    year: '2024',
    venue: '1st AI Commercial Festival',
    work: 'AI-driven advertising business prototype',
    note: 'Recognition for product-oriented AI work and the business side of deployed systems.',
    image: '/제1회AICF_장려상_백재현.png',
    tone: 'slate',
  },
];

const toneClass: Record<string, string> = {
  rose: 'bg-rose-50 text-rose-700 border-rose-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-5">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">recognition</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Awards are useful when they point back to the work.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              I keep this page less as a trophy shelf and more as a trail of signals: RAG systems, forecasting, AI safety, and product-building experiments that later became part of a larger research workshop.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-7xl">
          <Card className="overflow-hidden border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-slate-900 p-8 text-white md:p-10">
                <Trophy className="mb-6 h-9 w-9 text-blue-300" />
                <Badge className="mb-5 bg-blue-300 text-slate-950 hover:bg-blue-300">latest recognition</Badge>
                <h2 className="text-3xl font-semibold tracking-tight">{awards[0].title}</h2>
                <p className="mt-3 text-slate-300">{awards[0].venue}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-blue-200">recognized work</p>
                  <p className="mt-2 text-lg font-medium">{awards[0].work}</p>
                </div>
                <p className="mt-6 leading-7 text-slate-300">{awards[0].note}</p>
              </div>
              <div className="flex items-center justify-center bg-slate-100 p-8">
                <img
                  src={awards[0].image}
                  alt={`${awards[0].title} certificate`}
                  className="max-h-[360px] w-full rounded-2xl object-contain shadow-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        <section className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {awards.slice(1).map((award) => (
            <Card key={`${award.title}-${award.year}-${award.work}`} className="overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-56 bg-slate-50 p-4">
                <img src={award.image} alt={`${award.title} certificate`} className="h-full w-full object-contain" />
              </div>
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={toneClass[award.tone]}>{award.year}</Badge>
                  <Badge variant="outline" className="border-slate-200 text-slate-600">recognition</Badge>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{award.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">{award.venue}</p>
                  <p className="mt-1 text-sm text-slate-500">{award.work}</p>
                </div>
                <p className="text-sm leading-6 text-slate-600">{award.note}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <Card className="border-blue-100 bg-blue-50 shadow-sm">
            <CardContent className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[0.35fr_0.65fr] md:p-10">
              <div>
                <GraduationCap className="mb-5 h-8 w-8 text-blue-700" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Dean's List</h2>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-700">Sogang University · 2024</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-8 text-slate-700">
                  Recognized by Sogang University's College of Natural Sciences for academic performance during my master's program. I keep it here as part of the transition from mathematics into AI systems research.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
                    <img src="/deanslist_1.jpg" alt="Dean's List ceremony" className="h-56 w-full rounded-xl object-cover" />
                    <p className="mt-3 text-sm font-medium text-slate-700">Dean's List ceremony</p>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
                    <img src="/deanslist_2.jpg" alt="Dean's List recognition" className="h-56 w-full rounded-xl object-cover" />
                    <p className="mt-3 text-sm font-medium text-slate-700">Awarded by the Dean of Natural Sciences</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
