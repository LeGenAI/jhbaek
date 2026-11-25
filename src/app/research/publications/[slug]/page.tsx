import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ResearchDetail, DetailSection, DetailList } from '@/components/research-detail';
import { publications, singletonPaper, singletonPaperPath, sudokuCitation, type PublicationLinkKey } from '@/data/publications';
import { projectArtifacts } from '@/data/projects';

const linkLabels: Record<PublicationLinkKey, string> = {
  doi: 'DOI',
  openReview: 'OpenReview',
  leanArchive: 'Lean proofs and Comparator verdicts (ZIP)',
  certificate: 'Lean certificate',
  specification: 'Comparator specification (v2)',
  paper: 'Paper',
  thesis: 'Master’s thesis (Sogang University)',
  project: 'Project',
  code: 'Code',
  source: 'Source',
  googleScholar: 'Google Scholar',
  researchGate: 'ResearchGate',
  artifact: 'Artifact',
  slides: 'Slides',
  data: 'Data',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== singletonPaper.slug) return {};
  const { title, summary: description, image, figure } = singletonPaper;
  return {
    title, description,
    alternates: { canonical: singletonPaperPath },
    openGraph: { type: 'article', title, description, url: singletonPaperPath, images: [{ url: image, alt: figure.alt, width: figure.width, height: figure.height }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function generateStaticParams() {
  return [...publications, sudokuCitation].map(({ slug }) => ({ slug }));
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === sudokuCitation.slug) {
    return (
      <main className="portfolio-page">
        <Link href="/research#publications" className="source-link">Back to research</Link>
        <h1 className="page-title mt-4">{sudokuCitation.title}</h1>
        <p className="mt-4">{sudokuCitation.authors}</p>
        <p className="meta-text mt-2"><cite>{sudokuCitation.venue}</cite> · {sudokuCitation.issue}</p>
        <section className="section-rule grid items-center gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="section-title">Play Perfect Sudoku</h2>
            <p className="page-intro">In our paper, we use perfect codes to divide a Sudoku board into regions. On the 5 × 5 board, each region is a cross that can wrap around the edges. Each row, column, and colored region must contain the numbers 1 through 5 exactly once.</p>
            <p className="mt-3 max-w-prose leading-relaxed">I built Perfect Sudoku so you can try these puzzles in your browser. Start with the 5 × 5 board or challenge a friend to an online match.</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href={sudokuCitation.gameUrl} className="inline-flex min-h-11 items-center rounded bg-[#173f35] px-4 text-sm font-semibold text-white hover:bg-[#245848]">Play Perfect Sudoku</a>
              <a href={sudokuCitation.href} className="source-link">Read on IEEE Xplore</a>
            </div>
          </div>
          <figure className="max-w-[17.5rem]">
            <Image src="/previews/perfect-sudoku-board.png" alt="A partially filled 5 × 5 board with five colored regions, several crossing the edges." width={560} height={560} sizes="(max-width: 320px) 90vw, 280px" />
            <figcaption className="meta-text mt-2">A puzzle from Perfect Sudoku. Each color marks one region.</figcaption>
          </figure>
        </section>
      </main>
    );
  }

  const publication = publications.find((item) => item.slug === slug);

  if (!publication) {
    notFound();
  }

  const relatedArtifacts = projectArtifacts.filter((artifact) => publication.relatedProjects.includes(artifact.slug));

  const links = Object.entries(publication.links ?? {}).map(([key, href]) => ({ label: linkLabels[key as PublicationLinkKey], href }));

  return (
    <ResearchDetail back={{ href: '/research', label: 'Back to research' }} title={publication.title}
      metadata={publication.status + ' · ' + publication.area} byline={publication.authors}
      venue={publication.venue + ' · ' + publication.year} summary={publication.summary} image={publication.image} figure={publication.figure} links={links}>
      <div>
        <DetailSection title="Research question"><p>{publication.problem}</p></DetailSection>
        <DetailSection title="Approach"><p>{publication.keyIdea}</p></DetailSection>
        <DetailList title="Methods" items={publication.methods} />
        {publication.results.length > 0 && <DetailList title="Results" items={publication.results} />}
      </div>
      <aside>
        <DetailSection title="My role"><p>{publication.role}</p></DetailSection>
        <DetailSection title="Publication status"><p>{publication.statusNote}</p></DetailSection>
        {relatedArtifacts.length > 0 && (
          <DetailSection title="Related projects">
            {relatedArtifacts.map((item) => <div key={item.slug}><Link className="source-link" href={`/research/projects/${item.slug}`}>{item.title}</Link></div>)}
          </DetailSection>
        )}
      </aside>
    </ResearchDetail>
  );
}
