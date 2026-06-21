import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Publication, PublicationLinkKey } from '@/data/publications';

const statusStyles: Record<Publication['status'], string> = {
  Published: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Accepted: 'bg-blue-100 text-blue-800 border-blue-200',
  'Under Review': 'bg-amber-100 text-amber-800 border-amber-200',
  Submitted: 'bg-slate-100 text-slate-700 border-slate-200',
  'In Preparation': 'bg-zinc-100 text-zinc-700 border-zinc-200',
};

const linkLabels: Record<PublicationLinkKey, string> = {
  researchGate: 'ResearchGate',
  paper: 'Paper',
  code: 'Code',
  project: 'Project',
  doi: 'DOI',
  source: 'Source',
  artifact: 'Artifact',
  slides: 'Slides',
  data: 'Data',
};

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {publication.image ? (
        <div className="relative h-44 overflow-hidden border-b border-slate-100 bg-slate-50 p-3">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex h-44 items-center justify-center border-b border-slate-100 bg-gradient-to-br from-slate-100 to-blue-50 p-6 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            {publication.area}
          </span>
        </div>
      )}
      <CardContent className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className={statusStyles[publication.status]}>
            {publication.status}
          </Badge>
          <Badge variant="outline" className="border-slate-200 text-slate-600">
            {publication.year}
          </Badge>
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {publication.area}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-snug text-slate-950">
            <Link href={`/research/publications/${publication.slug}`} className="hover:text-blue-700">
              {publication.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-slate-500">{publication.authors}</p>
          <p className="mt-1 text-sm font-medium text-slate-700">{publication.venue}</p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm leading-6 text-slate-700">
          <span className="font-semibold text-blue-800">TL;DR:</span> {publication.tldr}
        </div>

        <p className="text-sm leading-6 text-slate-600">{publication.summary}</p>

        <div className="flex flex-wrap gap-2">
          {publication.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
          <Link href={`/research/publications/${publication.slug}`} className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-blue-800">
            Detail page
          </Link>
          {publication.links
            ? Object.entries(publication.links).map(([label, href]) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800"
                  >
                    {linkLabels[label as PublicationLinkKey] ?? label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : null,
              )
            : null}
        </div>
      </CardContent>
    </Card>
  );
}
