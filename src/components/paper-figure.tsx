'use client';
import { SiteLink } from '@/components/site-link';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import type { PaperFigure } from '@/data/paper-figures';

const zoomLevels = [1, 2, 3, 4, 6, 8];

export function FigureViewer({ figure, number, compact = false, children }: {
  figure: PaperFigure;
  number: number;
  compact?: boolean;
  children?: ReactNode;
}) {
  const fragment = figure.fragment ?? `figure-${number}`;
  const viewerHash = '#' + fragment;
  const label = `Figure ${number} · ${figure.title}`;
  const alt = figure.alt ?? figure.title;
  const dialog = useRef<HTMLDialogElement>(null);
  const openedHere = useRef(false);
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    const viewer = dialog.current!;
    function syncWithAddress() {
      if (window.location.hash === viewerHash) {
        if (!viewer.open) {
          setZoom(0);
          viewer.showModal();
        }
      } else if (viewer.open) {
        viewer.close();
      }
    }
    syncWithAddress();
    window.addEventListener('hashchange', syncWithAddress);
    return () => window.removeEventListener('hashchange', syncWithAddress);
  }, [viewerHash]);

  function rememberOpener(event: MouseEvent<HTMLAnchorElement>) {
    openedHere.current = true;
    event.currentTarget.focus({ preventScroll: true });
  }

  function closeViewer() {
    if (openedHere.current) {
      window.history.back();
    } else {
      const url = new URL(window.location.href);
      url.hash = '';
      window.history.replaceState(window.history.state, '', url);
      dialog.current?.close();
    }
  }

  return (
    <>
      <figure aria-label={label} className={compact ? 'order-3 mt-2 min-w-0 border-y border-[#c8d1c6] bg-white px-3 py-2 sm:px-5' : 'story-figure min-w-0'}>
        <a className="block cursor-zoom-in" href={viewerHash} onClick={rememberOpener} aria-label={`Enlarge ${label}`} aria-haspopup="dialog">
          <Image src={figure.image} alt={alt} width={figure.width} height={figure.height} sizes="(min-width: 768px) 32rem, 92vw" unoptimized={figure.image.endsWith('.svg')}
            className={compact ? 'mx-auto h-auto w-full max-w-[29rem]' : 'block h-auto max-h-[30rem] w-full object-contain'} />
        </a>
        <figcaption className={compact ? 'mt-2 flex flex-wrap items-baseline justify-between gap-x-3 border-t border-[#c8d1c6] text-sm' : 'mt-2 text-sm leading-relaxed'}>
          <strong className="block py-2">{label}</strong>
          {children}
          <span className="flex flex-wrap gap-x-5">
            <a href={viewerHash} onClick={rememberOpener} className="source-link" aria-haspopup="dialog">Open full-size figure</a>
            {!compact && <SiteLink href={figure.source} className="source-link">{figure.sourceLabel ?? (figure.source.includes('#') ? 'Figure in the paper' : 'Published paper')}</SiteLink>}
          </span>
        </figcaption>
      </figure>
      <dialog ref={dialog} aria-labelledby={fragment + '-title'} className="proof-viewer" onCancel={event => { event.preventDefault(); closeViewer(); }}>
        <header className="flex flex-wrap items-center justify-between gap-x-4 border-b border-[#c8d1c6] px-3 py-1 sm:px-5">
          <h2 id={fragment + '-title'} className="text-sm font-semibold">{figure.title}</h2>
          <div className="ml-auto flex items-center gap-3">
            <a className="source-link" href="/">Home</a>
            <button type="button" autoFocus onClick={closeViewer} className="flex min-h-11 items-center gap-1 px-1 font-semibold"><X size={18} aria-hidden="true" />Close</button>
          </div>
        </header>
        <div className="proof-canvas" role="region" aria-label={`Scrollable figure: ${figure.title}`} tabIndex={0}>
          <Image src={figure.image} alt={alt} width={figure.width} height={figure.height} unoptimized
            className="mx-auto block h-auto max-w-none"
            style={{ width: `min(${100 * zoomLevels[zoom]}cqw, ${100 * zoomLevels[zoom] * figure.width / figure.height}cqh)` }} />
        </div>
        <footer className="flex items-center justify-center gap-3 border-t border-[#c8d1c6]">
          <button type="button" aria-label="Zoom out" className="grid size-11 place-items-center disabled:opacity-35" disabled={zoom === 0} onClick={() => setZoom(zoom - 1)}><Minus size={20} aria-hidden="true" /></button>
          <output aria-label="Zoom level" className="w-12 text-center text-sm tabular-nums">{zoomLevels[zoom]}×</output>
          <button type="button" aria-label="Zoom in" className="grid size-11 place-items-center disabled:opacity-35" disabled={zoom === zoomLevels.length - 1} onClick={() => setZoom(zoom + 1)}><Plus size={20} aria-hidden="true" /></button>
        </footer>
      </dialog>
    </>
  );
}
