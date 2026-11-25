'use client';
import { SiteLink } from '@/components/site-link';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const pages = [
  ['Home', '/'], ['Research', '/research'], ['Artifacts', '/artifacts'],
  ['Writing', '/writing'], ['About', '/about'], ['Awards', '/awards'], ['Contact', '/contact'],
];
const profiles = [
  { label: 'GitHub', href: 'https://github.com/LeGenAI', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jae-hyun-baek-516899227', icon: Linkedin },
  { label: 'Email', href: 'mailto:bjh3641@gmail.com', icon: Mail },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const section = pathname.startsWith('/research/projects/') ? '/artifacts' : '/' + pathname.split('/')[1];
  const links = pages.map(([label, href]) => (
    <Link key={href} href={href} onClick={() => setOpen(false)}
      aria-current={pathname === href ? 'page' : section === href ? 'location' : undefined}
      className="site-nav-link">
      {label}
    </Link>
  ));
  const socials = profiles.map(({ label, href, icon: Icon }) => (
    <SiteLink key={href} href={href} aria-label={label} className="grid h-11 w-11 place-items-center rounded hover:bg-white/10">
      <Icon size={18} aria-hidden="true" />
    </SiteLink>
  ));

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 border-b border-[#294e43] bg-[#10332e] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold">
          Jae-Hyun Baek <span lang="ko" className="text-sm font-normal text-[#c8d8cb]">백재현</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">{links}</div>
        <div className="hidden lg:flex">{socials}</div>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open navigation" className="grid h-11 w-11 place-items-center"><Menu size={22} /></button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined} className="w-72 max-w-full overflow-y-auto border-[#294e43] bg-[#10332e] text-white">
              <SheetTitle className="mb-5 font-serif text-2xl text-white">Navigation</SheetTitle>
              <div className="grid">{links}</div>
              <div className="mt-5 flex border-t border-white/25 pt-3">{socials}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
