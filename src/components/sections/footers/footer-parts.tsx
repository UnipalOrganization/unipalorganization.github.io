import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { ImageContent, SocialLink } from "../types";

/** Brand lock-up: a logo image if provided, otherwise a wordmark. */
export const FooterBrand = ({
  brand,
  logo,
  blurb,
}: {
  brand: string;
  logo?: ImageContent;
  blurb?: string;
}) => (
  <div className="flex flex-col gap-6">
    <Link href="/" className="w-fit">
      {logo ? (
        <>
          <span className="sr-only">{brand}</span>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={28}
            className="transition-all hover:opacity-75"
          />
        </>
      ) : (
        <span className="font-display text-xl font-semibold">{brand}</span>
      )}
    </Link>
    {blurb && <p className="max-w-sm text-muted-foreground">{blurb}</p>}
  </div>
);

/** Row of outlined social icon buttons. */
export const SocialButtons = ({ socials }: { socials: SocialLink[] }) => (
  <div className="flex gap-2">
    {socials.map(({ icon: Icon, href, label }) => (
      <Button key={label} variant="outline" size="icon" asChild>
        <a href={href} aria-label={label} target="_blank" rel="noreferrer">
          <Icon className="size-4" />
        </a>
      </Button>
    ))}
  </div>
);
