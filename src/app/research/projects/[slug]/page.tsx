import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ResearchDetail, DetailSection, DetailList } from '@/components/research-detail';
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

  const links = artifact.artifactLinks
    ? Object.entries(artifact.artifactLinks).map(([key, href]) => ({ label: artifactLinkLabels[key as ArtifactLinkKey], href }))
    : artifact.link ? [{ label: 'Visit project', href: artifact.link }] : [];

  return (
    <ResearchDetail back={{ href: '/artifacts', label: 'Back to artifacts' }} title={artifact.title}
      metadata={artifact.kind + ' · ' + artifact.status} summary={artifact.summary} image={artifact.image} links={links}>
      <div>
        <DetailSection title="Problem"><p>{artifact.problem}</p></DetailSection>
        <DetailList title="What I built" items={artifact.whatIBuilt} />
        <DetailList title={artifact.evidenceTitle ?? 'Evidence'} items={artifact.evidence} />
        <DetailSection title="Implementation notes"><p>{artifact.makerNote}</p></DetailSection>
      </div>
      <aside>
        <DetailSection title="My role"><p>{artifact.role}</p></DetailSection>
        <DetailSection title="Project status"><p>{artifact.currentStatus}</p></DetailSection>
        <DetailSection title="Next step"><p>{artifact.nextStep}</p></DetailSection>
        {relatedPublications.length > 0 && (
          <DetailSection title="Related publications">
            {relatedPublications.map((paper) => <div key={paper.slug}><Link className="source-link" href={`/research/publications/${paper.slug}`}>{paper.title}</Link></div>)}
          </DetailSection>
        )}
      </aside>
    </ResearchDetail>
  );
}
