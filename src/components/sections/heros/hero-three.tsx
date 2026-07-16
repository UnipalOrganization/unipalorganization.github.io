import Image from "next/image";
import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import type { CTA, ImageContent } from "../types";

export type HeroThreeProps = {
  title: string;
  /** Label before the logo strip, e.g. "As seen in:". */
  seenInLabel?: string;
  /** Small logos shown in the "as seen in" strip. */
  logos?: ImageContent[];
  /** Lead paragraph. */
  body?: string;
  /** Secondary line with an inline link. */
  note?: string;
  link?: CTA;
  /** Small print under everything. */
  footnote?: string;
};

/** Editorial hero: oversized headline, "as seen in" logo strip, supporting copy. */
export const HeroThree = ({
  title,
  seenInLabel = "As seen in:",
  logos = [],
  body,
  note,
  link,
  footnote,
}: HeroThreeProps) => (
  <Section>
    <Container>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-normal tracking-tight md:text-6xl">
          {title}
        </h1>

        {logos.length > 0 && (
          <div className="flex w-fit flex-wrap items-center gap-6 rounded-card border p-4">
            <p>{seenInLabel}</p>
            {logos.map((logo, i) => (
              <Image
                key={i}
                className="h-6 w-fit"
                src={logo.src}
                width={120}
                height={24}
                alt={logo.alt}
              />
            ))}
          </div>
        )}

        <div className="md:text-lg">
          {body && <p className="hidden md:block">{body}</p>}
          {(note || link) && (
            <div className="grid gap-2 md:flex">
              {note && <p className="opacity-50">{note} </p>}
              {link && (
                <Link
                  className="transition-all hover:opacity-70"
                  href={link.href}
                >
                  {link.label} &rarr;
                </Link>
              )}
            </div>
          )}
          {footnote && <p className="mt-4 text-xs opacity-50">{footnote}</p>}
        </div>
      </div>
    </Container>
  </Section>
);
