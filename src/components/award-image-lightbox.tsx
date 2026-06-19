'use client';

import Image from 'next/image';
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
  const titleId = useId();

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

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="flex max-h-[94vh] w-full max-w-6xl flex-col gap-4" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 text-white">
              <h2 id={titleId} className="text-base font-semibold md:text-lg">
                {title}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close expanded image"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-3xl bg-white p-4 shadow-2xl md:min-h-[76vh] md:p-8">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                unoptimized={unoptimized}
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
