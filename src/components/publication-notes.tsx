'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';

export function PublicationNotes({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  return (
    <aside className="publication-notes" aria-label="Paper details">
      <button type="button" className="flex min-h-12 w-full items-center justify-between gap-3 px-4 text-left font-semibold lg:hidden"
        aria-expanded={expanded} aria-controls={contentId} onClick={() => setExpanded(!expanded)}>
        Paper details
        <ChevronDown size={18} aria-hidden="true" className={expanded ? 'rotate-180' : undefined} />
      </button>
      <div id={contentId} className={expanded ? 'block' : 'hidden lg:block'}>{children}</div>
    </aside>
  );
}
