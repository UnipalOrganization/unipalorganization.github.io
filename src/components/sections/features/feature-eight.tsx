import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { isVideoSrc } from "@/lib/utils";
import { Media } from "../media";
import type { CTA, ImageContent } from "../types";

export type FeatureEightProps = {
  title: string;
  body?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  image: ImageContent;
};

/**
 * Stacked feature: heading, copy and actions on top, image below.
 *
 * Videos always play in full at their own aspect ratio (never cropped).
 * Images are always shown uncropped and left-aligned on a soft panel.
 */
export const FeatureEight = ({
  title,
  body,
  primaryCta,
  secondaryCta,
  image,
}: FeatureEightProps) => {
  const video = isVideoSrc(image.src);

  return (
    <Section>
      <Container className="grid items-stretch gap-4">
        <h3>{title}</h3>
        {body && <p className="text-muted-foreground">{body}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="my-8 flex items-center gap-2">
            {primaryCta && (
              <Button className="w-fit" asChild>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button className="w-fit" variant="link" asChild>
                <Link href={secondaryCta.href}>
                  {secondaryCta.label} &rarr;
                </Link>
              </Button>
            )}
          </div>
        )}
        <div
          className={
            video
              ? "overflow-hidden rounded-card"
              : "relative flex h-96 overflow-hidden rounded-card"
          }
        >
          <Media
            media={image}
            fit={video ? "natural" : "contain"}
            align="left"
            className={video ? undefined : "p-8"}
          />
        </div>
      </Container>
    </Section>
  );
};
