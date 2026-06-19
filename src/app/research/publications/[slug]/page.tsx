import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { publications } from '@/data/publications';

const linkLabels: Record<string, string> = {
  doi: 'DOI',
  paper: 'Paper',
  project: 'Project',
  code: 'Code',
  researchGate: 'ResearchGate',
};

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);

  if (!publication) {
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
              <Badge className="bg-slate-900 text-white hover:bg-slate-800">{publication.status}</Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600">{publication.year}</Badge>
              <Badge variant="outline" className="border-blue-200 text-blue-700">{publication.area}</Badge>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{publication.title}</h1>
            <p className="text-lg leading-8 text-slate-600">{publication.summary}</p>
          </div>

          {publication.image ? (
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src={publication.image}
                alt={publication.title}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain p-6"
                priority
              />
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.7fr_0.3fr]">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-6 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">authors</p>
                  <p className="mt-2 text-slate-700">{publication.authors}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">venue / status</p>
                  <p className="mt-2 text-slate-700">{publication.venue}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">portfolio note</p>
                  <p className="mt-2 leading-7 text-slate-700">
                    This page records the public-facing artifact metadata. Paper-specific links are updated as journal pages, DOI records, code, or ResearchGate entries become available.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-5 p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">tags</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">{tag}</span>
                    ))}
                  </div>
                </div>
                {publication.links ? (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">links</p>
                    {Object.entries(publication.links).map(([label, href]) =>
                      href ? (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                          {linkLabels[label] ?? label} <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : null,
                    )}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
