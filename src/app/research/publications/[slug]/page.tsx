import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ResearchDetail, DetailSection, DetailList } from '@/components/research-detail';
import { publications, sudokuCitation, type PublicationLinkKey } from '@/data/publications';
import { projectArtifacts } from '@/data/projects';

const linkLabels: Record<PublicationLinkKey, string> = {
  doi: 'DOI',
  paper: 'Paper',
  thesis: 'Master’s thesis (Sogang University)',
  project: 'Project',
  code: 'Code',
  source: 'Source',
  researchGate: 'ResearchGate',
  artifact: 'Artifact',
  slides: 'Slides',
  data: 'Data',
};

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
        <p className="page-intro">{sudokuCitation.authors}</p>
        <p className="meta-text mt-2"><cite>{sudokuCitation.venue}</cite> · {sudokuCitation.issue}</p>
        <a href={sudokuCitation.href} className="source-link mt-2">Read on IEEE Xplore</a>
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
      venue={publication.venue + ' · ' + publication.year} summary={publication.summary} image={publication.image} links={links}>
      <div>
        <DetailSection title="Research question"><p>{publication.problem}</p></DetailSection>
        <DetailSection title="Approach"><p>{publication.keyIdea}</p></DetailSection>
        <DetailList title="Methods" items={publication.methods} />
        <DetailList title="Results" items={publication.results} />
      </div>
      <aside>
        <DetailSection title="My role"><p>{publication.role}</p></DetailSection>
        <DetailList title="Contributions" items={publication.contribution} />
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
