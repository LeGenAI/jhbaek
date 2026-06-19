import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projectArtifacts } from '@/data/projects';

export function generateStaticParams() {
  return projectArtifacts.map((artifact) => ({ slug: artifact.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artifact = projectArtifacts.find((item) => item.slug === slug);

  if (!artifact) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-5xl space-y-8">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/research">
              <ArrowLeft className="h-4 w-4" /> Back to research
            </Link>
          </Button>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-slate-900 text-white hover:bg-slate-800">{artifact.kind}</Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600">{artifact.status}</Badge>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{artifact.title}</h1>
            <p className="text-lg leading-8 text-slate-600">{artifact.summary}</p>
          </div>

          {artifact.image ? (
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src={artifact.image}
                alt={artifact.title}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain p-6"
                priority
              />
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.65fr_0.35fr]">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-6 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">maker note</p>
                  <p className="mt-2 leading-7 text-slate-700">{artifact.makerNote}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">artifact role</p>
                  <p className="mt-2 leading-7 text-slate-700">
                    This project is part of the public workshop map: a concrete system that shows how domain knowledge becomes structured enough for agents, evaluators, users, or papers to use.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-5 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">tags</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {artifact.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">{tag}</span>
                    ))}
                  </div>
                </div>
                {artifact.link ? (
                  <a href={artifact.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                    Visit public artifact <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="text-sm leading-6 text-slate-500">Public external link pending; this detail page keeps the portfolio narrative stable until the artifact is ready to expose.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
