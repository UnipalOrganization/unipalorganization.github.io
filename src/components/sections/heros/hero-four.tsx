import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Media } from "../media";
import type { CTA, ImageContent, NavLink } from "../types";

export type HeroFourProps = {
  title: string;
  titleHref?: string;
  subtitle?: string;
  /** Inline links shown top-right. */
  navLinks?: NavLink[];
  /**
   * Two media anchored to the bottom-right. Provide one or two. A video src
   * (e.g. `.mp4`) plays muted and looping in place of an image.
   */
  images: [ImageContent, ImageContent?];
  /** The round call-to-action button, bottom-right. */
  circleCta?: CTA;
};

/** Asymmetric editorial hero with corner images and a circular CTA. */
export const HeroFour = ({
  title,
  titleHref = "#",
  subtitle,
  navLinks = [],
  images,
  circleCta,
}: HeroFourProps) => (
  <Section className="relative h-[720px]">
    <Container>
      <div className="flex w-full justify-between">
        <div>
          <h1 className="mb-4 text-3xl font-normal md:text-6xl">
            <Link className="transition-all hover:opacity-70" href={titleHref}>
              {title}
            </Link>
          </h1>
          {subtitle && (
            <h2 className="w-48 text-lg font-light leading-6">{subtitle}</h2>
          )}
        </div>
        {navLinks.length > 0 && (
          <div className="hidden gap-4 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="transition-all hover:opacity-70"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 right-0 flex items-end justify-end gap-2">
        {images[1] && (
          <div className="relative hidden h-72 w-96 md:block">
            <Media media={images[1]} fit="cover" className="rounded-tl-3xl" />
          </div>
        )}
        <div className="relative h-[420px] w-72 md:w-96">
          <Media media={images[0]} fit="cover" className="rounded-tl-3xl" />
        </div>
      </div>

      {circleCta && (
        <div className="absolute bottom-2 right-2 flex size-12 items-center justify-center rounded-full border bg-secondary p-12 text-center font-medium leading-4 transition-all hover:opacity-80">
          <Link className="-mt-1" href={circleCta.href}>
            {circleCta.label}
          </Link>
        </div>
      )}
    </Container>
  </Section>
);
