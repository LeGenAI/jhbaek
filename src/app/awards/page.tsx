import { SiteLink } from '@/components/site-link';
import { AwardImageLightbox } from '@/components/award-image-lightbox';
import { recognitions } from '@/data/recognitions';

export const metadata = { title: 'Awards', alternates: { canonical: '/awards' } };

export default function AwardsPage() {
  const awards = [...recognitions].sort((a, b) => b.year.localeCompare(a.year));
  return (
    <main className="portfolio-page">
      <h1 className="page-title">Awards</h1>
      <div className="mt-8 sm:mt-12">
        {awards.map((award) => (
          <article key={award.recognizedWork} className="grid items-center gap-x-7 gap-y-2 border-t border-[#c8d1c6] py-5 sm:grid-cols-[4rem_1fr_10rem]">
            <p className="meta-text self-start tabular-nums">{award.year}</p>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl">{award.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed">{award.recognizedWork}</p>
              <p className="meta-text mt-1">{award.venue}</p>
              {award.sourceUrl && <SiteLink className="source-link" href={award.sourceUrl}>Sogang University announcement</SiteLink>}
            </div>
            {award.image && (
              <div className="mt-2 h-28 w-40 bg-[#eeeee5] sm:mt-0">
                <AwardImageLightbox src={award.image} alt={award.title + ' certificate'} title={award.title + ' · ' + award.venue} sizes="160px" imageClassName="object-contain p-2" />
              </div>
            )}
          </article>
        ))}
      </div>
      <section className="section-rule">
        <h2 className="section-title">Dean’s List</h2>
        <p className="page-intro">Sogang University’s College of Natural Sciences recognized my academic work during my master’s program in 2024.</p>
        <div className="mt-5 grid max-w-3xl gap-4 sm:grid-cols-2">
          {['recognition ceremony', 'award presentation'].map((caption, index) => (
            <div key={caption} className="aspect-[4/3] bg-[#eeeee5]">
              <AwardImageLightbox src={`/deanslist_${index + 1}.jpg`} alt={'Sogang University ' + caption} title={'Dean’s List ' + caption} sizes="(min-width: 640px) 370px, 100vw" imageClassName="object-contain" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
