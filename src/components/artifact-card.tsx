import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { ArtifactLinkKey, ProjectArtifact } from '@/data/projects';

const artifactLinkLabels: Record<ArtifactLinkKey, string> = {
  paper: 'Paper',
  code: 'Code',
  demo: 'Demo',
  data: 'Data',
  docs: 'Docs',
  slides: 'Slides',
  source: 'Source',
  website: 'Website',
};

export function ArtifactCard({ artifact }: { artifact: ProjectArtifact }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {artifact.image ? (
        <div className="relative h-44 overflow-hidden border-b border-slate-100 bg-slate-50 p-3">
          <Image
            src={artifact.image}
            alt={artifact.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex h-44 items-center justify-center border-b border-slate-100 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc,_#eef2ff)] p-6">
          <div className="rounded-2xl border border-blue-100 bg-white/70 px-4 py-3 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{artifact.kind}</p>
            <p className="mt-1 text-sm text-slate-500">public preview pending</p>
          </div>
        </div>
      )}
      <CardContent className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-slate-900 text-white hover:bg-slate-800">{artifact.kind}</Badge>
          <Badge variant="outline" className="border-slate-200 text-slate-600">
            {artifact.status}
          </Badge>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-950">
            <Link href={`/research/projects/${artifact.slug}`} className="hover:text-blue-700">
              {artifact.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-blue-800">{artifact.oneLine}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{artifact.summary}</p>
        </div>

        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          {artifact.makerNote}
        </div>

        <div className="flex flex-wrap gap-2">
          {artifact.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-1 text-sm">
          <Link href={`/research/projects/${artifact.slug}`} className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-blue-800">
            Detail page
          </Link>
          {artifact.artifactLinks
            ? Object.entries(artifact.artifactLinks).map(([label, href]) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800"
                  >
                    {artifactLinkLabels[label as ArtifactLinkKey] ?? label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : null,
              )
            : artifact.link ? (
              <a
                href={artifact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800"
              >
                Visit artifact <ExternalLink className="h-3 w-3" />
              </a>
            ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
