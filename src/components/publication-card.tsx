import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Publication } from '@/data/publications';

const statusStyles: Record<Publication['status'], string> = {
  Published: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Accepted: 'bg-blue-100 text-blue-800 border-blue-200',
  'Under Review': 'bg-amber-100 text-amber-800 border-amber-200',
  Submitted: 'bg-slate-100 text-slate-700 border-slate-200',
  'In Preparation': 'bg-zinc-100 text-zinc-700 border-zinc-200',
};

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="group overflow-hidden border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {publication.image ? (
        <div className="h-48 overflow-hidden border-b border-slate-100 bg-slate-50">
          <img
            src={publication.image}
            alt={publication.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <CardContent className="space-y-4 p-6">
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
            {publication.title}
          </h3>
          <p className="mt-2 text-sm text-slate-500">{publication.authors}</p>
          <p className="mt-1 text-sm font-medium text-slate-700">{publication.venue}</p>
        </div>

        <p className="text-sm leading-6 text-slate-600">{publication.summary}</p>

        <div className="flex flex-wrap gap-2">
          {publication.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        {publication.links ? (
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            {Object.entries(publication.links).map(([label, href]) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800"
                >
                  {label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : null,
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
