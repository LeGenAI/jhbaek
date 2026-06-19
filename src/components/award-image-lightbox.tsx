'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { Maximize2, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

type AwardImageLightboxProps = {
  src: string;
  alt: string;
  title: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  unoptimized?: boolean;
};

export function AwardImageLightbox({
  src,
  alt,
  title,
  className = '',
  imageClassName = 'object-contain',
  sizes = '100vw',
  fill = true,
  width = 900,
  height = 636,
  priority = false,
  unoptimized = false,
}: AwardImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const image = fill ? (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized}
      className={imageClassName}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized}
      className={imageClassName}
    />
  );

  const triggerClassName = fill
    ? `group relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}`
    : `group relative inline-flex cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}`;

  const lightbox = open ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[9999] isolate flex h-dvh w-dvw items-center justify-center bg-slate-950/95 p-3 md:p-6"
      onClick={() => setOpen(false)}
    >
      <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
        <div className="pointer-events-none absolute left-0 right-14 top-0 z-10 flex min-h-12 items-center text-white">
          <h2 id={titleId} className="line-clamp-2 text-sm font-semibold drop-shadow md:text-lg">
            {title}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-0 top-0 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close expanded image"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative h-full w-full cursor-zoom-out">
          {/* Use a plain img in the fullscreen portal. Next/Image is useful in the
              card grid, but the fullscreen overlay should be a single stable
              compositor layer with no responsive image bookkeeping while the
              cursor moves over it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="h-full w-full select-none object-contain p-2 pt-14 md:p-6 md:pt-16"
            draggable={false}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
        aria-label={`Expand ${title}`}
      >
        {image}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-950/75 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" />
          View larger
        </span>
      </button>

      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}
