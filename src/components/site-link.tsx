import type { ComponentPropsWithoutRef } from 'react';

type SiteLinkProps = ComponentPropsWithoutRef<'a'> & { href: string };

export function SiteLink({ href, ...props }: SiteLinkProps) {
  const external = /^https?:\/\//i.test(href);
  return <a {...props} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} />;
}
