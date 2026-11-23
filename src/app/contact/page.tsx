export const metadata = { title: 'Contact', alternates: { canonical: '/contact' } };

const profiles = [
  ['GitHub', 'LeGenAI', 'https://github.com/LeGenAI'],
  ['ResearchGate', 'Jae-Hyun Baek', 'https://www.researchgate.net/profile/Jae-Hyun-Baek?ev=hdr_xprf'],
  ['LinkedIn', 'Jae-Hyun Baek', 'https://www.linkedin.com/in/jae-hyun-baek-516899227'],
];

export default function ContactPage() {
  return (
    <main className="portfolio-page">
      <h1 className="page-title">Contact</h1>
      <section className="section-rule grid gap-4 md:grid-cols-[1fr_2fr]">
        <h2 className="section-title">Email</h2>
        <div>
          <a href="mailto:bjh3641@gmail.com" className="inline-flex min-h-11 items-center font-serif text-2xl text-[#225441] underline decoration-[#8aa795] underline-offset-4 sm:text-4xl">bjh3641@gmail.com</a>
          <p className="page-intro">For questions about a paper, a Lean proof, or reproducing an experiment, email me with the title or repository link.</p>
        </div>
      </section>
      <section className="section-rule grid gap-4 md:grid-cols-[1fr_2fr]">
        <h2 className="section-title">Profiles</h2>
        <ul className="max-w-xl divide-y divide-[#c8d1c6]">
          {profiles.map(([label, name, href]) => (
            <li key={href} className="flex items-center justify-between gap-4 py-1">
              <a className="source-link" href={href}>{label}</a><span className="meta-text">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
