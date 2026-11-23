import { ArtifactCard } from '@/components/artifact-card';
import { projectArtifacts } from '@/data/projects';

export const metadata = { title: 'Artifacts', alternates: { canonical: '/artifacts' } };

const groups = [
  ['formalized-math-ai', 'Coding theory and search'],
  ['auditable-evaluation', 'Mathematical benchmarks'],
  ['deployed-knowledge-systems', 'Retrieval systems'],
  ['applied-ai-methods', 'Forecasting and medical AI'],
];

export default function ArtifactsPage() {
  return (
    <main className="portfolio-page">
      <h1 className="page-title">Research artifacts</h1>
      <p className="page-intro">Code, benchmarks, and deployed systems from my research and engineering work.</p>
      <div className="flex flex-wrap gap-x-6">
        <a className="source-link" href="https://github.com/LeGenAI">GitHub repositories</a>
        <a className="source-link" href="https://entropymath.com/">EntropyMath leaderboard</a>
      </div>
      <nav aria-label="Artifact groups" className="section-rule flex flex-wrap gap-x-6 pt-1 sm:pt-1">
        {groups.map(([id, label]) => <a href={'#' + id} className="source-link" key={id}>{label}</a>)}
      </nav>
      {groups.map(([id, label]) => (
        <section id={id} key={id} className="section-rule grid scroll-mt-20 gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <h2 className="section-title">{label}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {projectArtifacts.filter((artifact) => artifact.researchAxis === id).map((artifact) => (
              <ArtifactCard key={artifact.slug} artifact={artifact} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
