import { MathText } from '@/components/math';
import Image from 'next/image';
import Link from 'next/link';
import type { Publication } from '@/data/publications';
import type { ReactNode } from 'react';

type DetailProps = {
  back: { href: string; label: string };
  title: string;
  metadata: string;
  byline?: string;
  venue?: string;
  summary: string;
  image?: string;
  gallery?: ReactNode;
  figure?: Publication['figure'];
  links: { label: string; href: string }[];
  children: ReactNode;
};

export function ResearchDetail({ back, title, metadata, byline, venue, summary, image, figure, gallery, links, children }: DetailProps) {
  return (
    <main className="portfolio-page">
      <Link href={back.href} className="source-link">{back.label}</Link>
      <header className="mt-3 border-t border-[#c8d1c6] pt-5">
        <p className="meta-text">{metadata}</p>
        <h1 className="page-title mt-2">{title}</h1>
        {byline && <p className="mt-4">{byline}</p>}
        {venue && <p className="meta-text mt-1">{venue}</p>}
        <p className="page-intro">{summary}</p>
        {links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-6">
            {links.map(({ label, href }) => <a key={label} className="source-link" href={href}>{label}</a>)}
          </div>
        )}
      </header>
      {!gallery && image && figure && (
        <figure className="mt-6 max-w-4xl">
          <a href={image} aria-label="Open full-size diagram" className="block">
            <Image src={image} width={figure.width} height={figure.height} alt={figure.alt}
              sizes="(min-width: 1024px) 896px, 95vw" className="h-auto w-full" />
          </a>
          <figcaption className="mt-2 max-w-prose text-sm leading-relaxed">
            {figure.caption}{' '}
            <span className="flex flex-wrap gap-x-5">
              <a href={image} className="source-link">Open full-size figure</a>
              {figure.source && <a href={figure.source} className="source-link">Figure in the paper</a>}
            </span>
          </figcaption>
        </figure>
      )}
      {!gallery && image && !figure && (
        <div className="relative mt-6 h-48 border-y border-[#c8d1c6] bg-[#f2f2e9] sm:h-72">
          <Image src={image} alt={title} fill sizes="(min-width: 1280px) 1184px, 95vw" className="object-contain p-3" />
        </div>
      )}
      <div className="detail-body">{children}</div>
      {gallery}
    </main>
  );
}

export function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2>{title}</h2>{children}</section>;
}

export function DetailList({ title, items }: { title: string; items: string[] }) {
  return <DetailSection title={title}><ul>{items.map((text) => <li key={text}><MathText>{text}</MathText></li>)}</ul></DetailSection>;
}
