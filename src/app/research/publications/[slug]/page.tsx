import type { Metadata } from 'next';
import { Equation, MathText } from '@/components/math';
import Image from 'next/image';
import Link from 'next/link';
import { FigureViewer } from '@/components/paper-figure';
import { figuresByPaper } from '@/data/paper-figures';
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

function PaperGallery({ slug }: { slug: string }) {
  const figures = figuresByPaper[slug];
  if (!figures?.length) return null;
  return (
    <section id="figures" aria-labelledby="figures-title" className="section-rule scroll-mt-20">
      <h2 id="figures-title" className="section-title">Figures from the paper</h2>
      {slug === sudokuCitation.slug && <p className="meta-text mt-2">IEEE Transactions on Games · June 2026 · © 2026 IEEE</p>}
      {(['timegpt-gamcheon-water-level', 'hybrid-multimodal-genai-math-figures', 'regulatory-rag-llm-understanding'].includes(slug)) &&
        <p className="meta-text mt-2">© The Korean Institute of Intelligent Systems · <a className="underline" href="https://creativecommons.org/licenses/by-nc/3.0/">CC BY-NC 3.0</a></p>}
      <div className="mt-5 grid gap-x-8 gap-y-6 md:grid-cols-2">
        {figures.map((figure, index) => (
          <FigureViewer key={figure.image} figure={figure} number={index + 1}>
            <p><MathText>{figure.caption}</MathText></p>
          </FigureViewer>
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== singletonPaper.slug) return {};
  const { title, summary: description, figure } = singletonPaper;
  const image = '/previews/ea-singleton-social.png';
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
              <a href="#figures" className="source-link">Figures ({figuresByPaper[slug]?.length})</a>
            </div>
          </div>
          <figure className="max-w-[17.5rem]">
            <Image src="/previews/perfect-sudoku-board.png" alt="A partially filled 5 × 5 board with five colored regions, several crossing the edges." width={560} height={560} sizes="(max-width: 320px) 90vw, 280px" />
            <figcaption className="meta-text mt-2">A puzzle from Perfect Sudoku. Each color marks one region.</figcaption>
          </figure>
        </section>
        <PaperGallery slug={slug} />
      </main>
    );
  }

  const publication = publications.find((item) => item.slug === slug);

  if (!publication) {
    notFound();
  }

  const relatedArtifacts = projectArtifacts.filter((artifact) => publication.relatedProjects.includes(artifact.slug));

  const links = Object.entries(publication.links ?? {}).map(([key, href]) => ({ label: linkLabels[key as PublicationLinkKey], href }));

  const figures = figuresByPaper[slug];
  if (figures) links.push({ label: `Figures (${figures.length})`, href: '#figures' });

  return (
    <ResearchDetail back={{ href: '/research', label: 'Back to research' }} title={publication.title}
      metadata={publication.status + ' · ' + publication.area} byline={publication.authors}
      venue={publication.venue + ' · ' + publication.year} summary={publication.summary} image={publication.image} figure={publication.figure} gallery={figures && <PaperGallery slug={slug} />} links={links}>
      <div>
        <DetailSection title="Research question"><p><MathText>{publication.problem}</MathText></p></DetailSection>
        {publication.slug === singletonPaper.slug && (
          <DetailSection title="The bound and its violation">
            <p><MathText>{String.raw`A code $[\![n,k,d;c]\!]_q$ encodes $k$ logical qudits into $n$ physical qudits of dimension $q$, has distance $d$, and uses $c$ shared entangled pairs. The BDH bound is`}</MathText></p>
            <Equation display tex={String.raw`2(d-1)\le n-k+c.`} />
            <p><MathText>{String.raw`Define the Singleton defect $\sigma$ and the violation $\Delta$ by`}</MathText></p>
            <Equation display tex={String.raw`\begin{aligned}\sigma &= n-k-d+1,\\ \Delta &= 2(d-1)-(n-k+c).\end{aligned}`} />
            <p><MathText>{String.raw`When $\Delta>0$, the code uses $\Delta$ fewer pairs than the bound predicts.`}</MathText></p>
          </DetailSection>
        )}
        <DetailSection title="Approach"><p><MathText>{publication.keyIdea}</MathText></p></DetailSection>
        <DetailList title="Methods" items={publication.methods} />
        {publication.results.length > 0 && <DetailList title="Results" items={publication.results} />}
      </div>
      <aside>
        <DetailSection title="My role"><p>{publication.role}</p></DetailSection>
        {publication.verificationNote && <DetailSection title="Lean verification"><p>{publication.verificationNote}</p></DetailSection>}
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
