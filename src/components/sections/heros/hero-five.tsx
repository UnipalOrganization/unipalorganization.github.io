import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { isVideoSrc } from "@/lib/utils";
import { Media } from "../media";
import type { CTA, ImageContent } from "../types";

export type HeroFiveProps = {
  announcement?: CTA;
  title: React.ReactNode;
  subtitle?: string;
  /** Full-width hero media. A video src (e.g. `.mp4`) plays muted and looping. */
  image: ImageContent;
};

/**
 * Centered hero with a pill, headline, sub-copy, and image or video below.
 *
 * Video plays at full width with proportional height. Images use a fixed
 * height with proportional width, centered by the `items-center` column —
 * so a tall image never spans the full width, and an image too wide for the
 * container shrinks in height rather than overflowing.
 */
export const HeroFive = ({
  announcement,
  title,
  subtitle,
  image,
}: HeroFiveProps) => {
  const video = isVideoSrc(image.src);

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          {announcement && (
            <Button
              asChild
              className="mb-6 flex w-fit"
              size="sm"
              variant="outline"
            >
              <Link href={announcement.href}>
                {announcement.label} <ArrowRight className="ml-2 w-4" />
              </Link>
            </Button>
          )}
          <h1>{title}</h1>
          {subtitle && (
            <h3 className="mt-4 text-muted-foreground">{subtitle}</h3>
          )}
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
        </div>
      </Container>
    </Section>
  );
};
