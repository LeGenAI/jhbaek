import Image from 'next/image';
import Link from 'next/link';
import { artifactLinkLabels, type ArtifactLinkKey, type ProjectArtifact } from '@/data/projects';

export function ArtifactCard({ artifact }: { artifact: ProjectArtifact }) {
  return (
    <article className="grid min-w-0 content-start gap-3 border-t border-[#c8d1c6] pt-4">
      {artifact.image && (
        <div className="relative aspect-[2/1] border border-[#d6dcd1] bg-[#f2f2e9]">
          <Image src={artifact.image} alt="" fill sizes="(min-width: 1024px) 370px, (min-width: 640px) 45vw, 95vw" className="object-contain p-2" />
        </div>
      )}
      <div>
        <p className="meta-text">{artifact.kind} · {artifact.status}</p>
        <h3 className="mt-1 font-serif text-2xl leading-tight">
          <Link className="decoration-[#8aa795] underline-offset-4 hover:underline" href={`/research/projects/${artifact.slug}`}>{artifact.title}</Link>
        </h3>
        <p className="mt-2 leading-relaxed">{artifact.summary}</p>
        <div className="flex flex-wrap gap-x-5">
          {artifact.artifactLinks ? Object.entries(artifact.artifactLinks).map(([key, href]) => (
            <a key={key} className="source-link" href={href}>{artifactLinkLabels[key as ArtifactLinkKey]}</a>
          )) : artifact.link && <a className="source-link" href={artifact.link}>Visit project</a>}
        </div>
      </div>
    </article>
  );
}
