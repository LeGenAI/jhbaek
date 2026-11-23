import Image from 'next/image';

export function Portrait({ className }: { className: string }) {
  return (
    <Image src="/jhbaek_profile.jpg" width={360} height={462} alt="Jae-Hyun Baek"
      priority unoptimized className={`block h-auto shrink-0 rounded-sm ${className}`} />
  );
}
