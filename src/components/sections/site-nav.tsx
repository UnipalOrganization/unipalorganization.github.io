import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CTA, NavLink } from "./types";

export type SiteNavProps = {
  /** Wordmark shown on the left (used as the logo's accessible label). */
  brand: string;
  /** In-page or route links shown in the middle/right. */
  links?: NavLink[];
  /** Optional primary action button on the far right. */
  cta?: CTA;
};

/**
 * Stacked backdrop-blur layers, each masked to a horizontal band that steps
 * downward while the blur radius shrinks. Overlapping bands blend the layers so
 * the effect ramps smoothly from fully blurred at the top to crisp at the
 * bottom edge — a "progressive blur". Sits behind the nav content and reaches
 * past the bar so the page dissolves into it rather than stopping at a line.
 */
const BLUR_LAYERS = [16, 8, 4, 2, 1, 0.5];

const ProgressiveBlur = () => {
  const step = 100 / (BLUR_LAYERS.length + 1);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[150%]"
    >
      {BLUR_LAYERS.map((blur, i) => {
        // Each band steps down by one `step`. The fade-in edge is clamped to 0%
        // so the strongest layer (i === 0) is solid to the very top rather than
        // fading in — otherwise the top edge reads as unblurred.
        const fadeIn = Math.max(0, (i - 1) * step);
        const solidTop = i * step;
        const solidBottom = (i + 1) * step;
        const fadeOut = (i + 2) * step;
        const mask = `linear-gradient(to bottom, transparent ${fadeIn}%, black ${solidTop}%, black ${solidBottom}%, transparent ${fadeOut}%)`;

        return (
          <div
            key={blur}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}

      {/* Tint on top of the blur: the page background at partial opacity,
          fading out toward the bottom on the same gradient as the blur so the
          bar is never fully transparent behind the content. */}
      <div className="absolute inset-0 bg-linear-to-b from-background/85 via-background/40 to-transparent" />
    </div>
  );
};

/** Top navigation bar. Sticks to the top of the viewport as the user scrolls. */
export const SiteNav = ({ brand, links = [], cta }: SiteNavProps) => (
  <nav className="sticky top-0 z-50">
    <ProgressiveBlur />

    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
      <Link href="/" className="w-fit">
        <span className="sr-only">{brand}</span>
        <Image
          src="/logo.svg"
          alt={brand}
          width={132}
          height={30}
          priority
          className="h-[42px] w-auto transition-opacity hover:opacity-75"
        />
      </Link>

      <div className="flex items-center gap-6">
        {links.length > 0 && (
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {cta && (
          <Button asChild size="sm">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </div>
    </div>
  </nav>
);
