import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { isVideoSrc } from "@/lib/utils";
import { Media } from "../media";
import type { CTA, ImageContent } from "../types";

export type HeroOneProps = {
  /** Optional outline pill above the headline. */
  announcement?: CTA;
  title: string;
  subtitle?: string;
  /** Full-width hero media. A video src (e.g. `.mp4`) plays muted and looping. */
  image: ImageContent;
};

/**
 * Left-aligned hero: pill, headline, sub-copy, image or video.
 *
 * Video plays at full width with proportional height. Images use a fixed
 * height with proportional width, left-aligned — so a tall image never
 * spans the full width, and an image too wide for the container shrinks in
 * height rather than overflowing.
 */
export const HeroOne = ({ announcement, title, subtitle, image }: HeroOneProps) => {
  const video = isVideoSrc(image.src);

  return (
    <Section>
      <Container>
        {announcement && (
          <Button asChild className="mb-6 w-fit" size="sm" variant="outline">
            <Link href={announcement.href}>
              {announcement.label} <ArrowRight className="w-4" />
            </Link>
          </Button>
        )}
        <h1>{title}</h1>
        {subtitle && <h3 className="mt-4 text-muted-foreground">{subtitle}</h3>}
        <div
          className={
            video
              ? "my-8 w-full overflow-hidden rounded-card"
              : "my-8 overflow-hidden rounded-card"
          }
        >
          <Media
            media={image}
            fit={video ? "natural" : "natural-height"}
            className={video ? undefined : "h-96 md:h-[480px]"}
          />
        </div>
      </Container>
    </Section>
  );
};
