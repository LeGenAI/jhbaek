import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { artifactLinkLabels, projectArtifacts, type ArtifactLinkKey } from '@/data/projects';
import { publications } from '@/data/publications';

export function generateStaticParams() {
  return projectArtifacts.map((artifact) => ({ slug: artifact.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artifact = projectArtifacts.find((item) => item.slug === slug);

  if (!artifact) {
    notFound();
  }

  const relatedPublications = publications.filter((publication) => artifact.relatedPublications?.includes(publication.slug));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-5 pt-24 pb-16 sm:px-8 md:pt-32">
        <section className="mx-auto max-w-6xl space-y-8">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/artifacts">
              <ArrowLeft className="h-4 w-4" /> Back to artifacts
            </Link>
          </Button>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-slate-900 text-white hover:bg-slate-800">{artifact.kind}</Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600">{artifact.status}</Badge>
            </div>
            <h1 className="break-words text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">{artifact.title}</h1>
            <p className="text-xl font-medium leading-8 text-blue-800">{artifact.oneLine}</p>
            <p className="text-lg leading-8 text-slate-600">{artifact.summary}</p>
            {artifact.artifactLinks ? (
              <div className="flex flex-wrap gap-x-5">
                {Object.entries(artifact.artifactLinks).map(([label, href]) => (
                  <a key={label} href={href} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-800 underline underline-offset-4">
                    {artifactLinkLabels[label as ArtifactLinkKey]} <ExternalLink aria-hidden="true" className="h-3 w-3" />
                  </a>
                ))}
              </div>
            ) : artifact.link ? (
              <a href={artifact.link} className="inline-flex min-h-11 items-center text-sm text-blue-800 underline">Visit project</a>
            ) : null}
          </div>

          {artifact.image ? (
            <div className="relative h-48 sm:h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.68fr_0.32fr]">
            <div className="min-w-0 space-y-6">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardContent className="space-y-6 p-5 sm:p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">problem</p>
                    <p className="mt-2 leading-7 text-slate-700">{artifact.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">why it matters</p>
                    <p className="mt-2 leading-7 text-slate-700">{artifact.whyItMatters}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">maker note</p>
                    <p className="mt-2 leading-7 text-slate-700">{artifact.makerNote}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">what I built</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {artifact.whatIBuilt.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">evidence</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {artifact.evidence.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-blue-100 bg-blue-50 shadow-sm">
                <CardContent className="grid grid-cols-1 gap-6 p-5 sm:p-8 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">current status</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{artifact.currentStatus}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">next step</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{artifact.nextStep}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="min-w-0 space-y-6">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardContent className="space-y-5 p-5 sm:p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">role</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{artifact.role}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">tags</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {artifact.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">{tag}</span>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>

              {relatedPublications.length > 0 ? (
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="space-y-4 p-5 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">related publications</p>
                    {relatedPublications.map((publication) => (
                      <Link key={publication.slug} href={`/research/publications/${publication.slug}`} className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm hover:border-blue-200 hover:bg-blue-50">
                        <span className="font-semibold text-slate-900">{publication.title}</span>
                        <span className="mt-1 block leading-6 text-slate-600">{publication.tldr}</span>
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
