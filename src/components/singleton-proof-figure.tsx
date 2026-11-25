'use client';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { singletonPaper } from '@/data/publications';

const viewerHash = '#proof-map';
const zoomLevels = [1, 2, 3, 4, 6, 8];
const { image, figure } = singletonPaper;

export function SingletonProofFigure({ compact = false }: { compact?: boolean }) {
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
  }, []);

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
      <figure className={compact ? 'order-3 mt-2 min-w-0 border-y border-[#c8d1c6] bg-white px-3 py-2 sm:px-5' : 'mt-6 max-w-4xl'}>
        <a className="block cursor-zoom-in" href={viewerHash} onClick={rememberOpener} aria-label="Enlarge the Singleton bound proof diagram" aria-haspopup="dialog">
          <Image src={image} alt={figure.alt} width={figure.width} height={figure.height} unoptimized
            className={compact ? 'mx-auto h-auto w-full max-w-[29rem]' : 'h-auto w-full'} />
        </a>
        <figcaption className={compact ? 'mt-2 flex flex-wrap items-baseline justify-between gap-x-3 border-t border-[#c8d1c6] text-sm' : 'mt-2 max-w-prose text-sm leading-relaxed'}>
          {compact ? <span className="py-2 font-semibold">Figure 3 · Lean proof dependencies</span> : figure.caption}
          <span className="flex flex-wrap gap-x-5">
            <a href={viewerHash} onClick={rememberOpener} className="source-link" aria-haspopup="dialog">Open full-size figure</a>
            {!compact && <a href={figure.source} className="source-link">Figure in the paper</a>}
          </span>
        </figcaption>
      </figure>
      <dialog ref={dialog} aria-labelledby="proof-viewer-title" className="proof-viewer" onCancel={event => { event.preventDefault(); closeViewer(); }}>
        <header className="flex flex-wrap items-center justify-between gap-x-4 border-b border-[#c8d1c6] px-3 py-1 sm:px-5">
          <h2 id="proof-viewer-title" className="text-sm font-semibold">Lean proof dependencies</h2>
          <div className="ml-auto flex items-center gap-3">
            <a className="source-link" href="/">Home</a>
            <button type="button" autoFocus onClick={closeViewer} className="flex min-h-11 items-center gap-1 px-1 font-semibold"><X size={18} aria-hidden="true" />Close</button>
          </div>
        </header>
        <div className="proof-canvas" role="region" aria-label="Scrollable proof diagram" tabIndex={0}>
          <Image src={image} alt={figure.alt} width={figure.width} height={figure.height} unoptimized
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
