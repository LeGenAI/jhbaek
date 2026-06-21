import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { publications, type PublicationLinkKey } from '@/data/publications';
import { projectArtifacts } from '@/data/projects';

const linkLabels: Record<PublicationLinkKey, string> = {
  doi: 'DOI',
  paper: 'Paper',
  project: 'Project',
  code: 'Code',
  source: 'Source',
  researchGate: 'ResearchGate',
  artifact: 'Artifact',
  slides: 'Slides',
  data: 'Data',
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

  const relatedArtifacts = projectArtifacts.filter((artifact) => publication.relatedProjects.includes(artifact.slug));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto max-w-6xl space-y-8">
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
            <p className="text-xl font-medium leading-8 text-blue-800">{publication.tldr}</p>
            <p className="text-lg leading-8 text-slate-600">{publication.summary}</p>
          </div>

          {publication.image ? (
            <div className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src={publication.image}
                alt={publication.title}
                width={960}
                height={640}
                sizes="(min-width: 1024px) 960px, 100vw"
                className="max-h-[320px] w-auto rounded-xl object-contain drop-shadow-xl"
                priority
                unoptimized
              />
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.68fr_0.32fr]">
            <div className="space-y-6">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardContent className="space-y-6 p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">problem</p>
                    <p className="mt-2 leading-7 text-slate-700">{publication.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">key idea</p>
                    <p className="mt-2 leading-7 text-slate-700">{publication.keyIdea}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">my role</p>
                    <p className="mt-2 leading-7 text-slate-700">{publication.role}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">methods</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {publication.methods.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">evidence / results</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {publication.results.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-blue-100 bg-blue-50 shadow-sm">
                <CardContent className="space-y-4 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">why this belongs in the portfolio</p>
                  <ul className="space-y-3 text-sm leading-6 text-slate-700">
                    {publication.contribution.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardContent className="space-y-5 p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">authors</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{publication.authors}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">venue / status</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{publication.venue}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{publication.statusNote}</p>
                  </div>
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
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">artifact links</p>
                      {Object.entries(publication.links).map(([label, href]) =>
                        href ? (
                          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                            {linkLabels[label as PublicationLinkKey] ?? label} <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : null,
                      )}
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              {relatedArtifacts.length > 0 ? (
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="space-y-4 p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">related artifacts</p>
                    {relatedArtifacts.map((artifact) => (
                      <Link key={artifact.slug} href={`/research/projects/${artifact.slug}`} className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm hover:border-blue-200 hover:bg-blue-50">
                        <span className="font-semibold text-slate-900">{artifact.title}</span>
                        <span className="mt-1 block leading-6 text-slate-600">{artifact.oneLine}</span>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
