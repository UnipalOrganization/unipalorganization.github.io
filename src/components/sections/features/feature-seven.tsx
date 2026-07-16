import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { isVideoSrc } from "@/lib/utils";
import { Media } from "../media";
import type { CTA, ImageContent } from "../types";

export type FeatureSevenProps = {
  image: ImageContent;
  title: string;
  body?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/**
 * Stacked feature: image on top, then heading, copy and actions.
 *
 * Videos always play in full at their own aspect ratio (never cropped).
 * Images are always shown uncropped and left-aligned on a soft panel.
 */
export const FeatureSeven = ({
  image,
  title,
  body,
  primaryCta,
  secondaryCta,
}: FeatureSevenProps) => {
  const video = isVideoSrc(image.src);

  return (
    <Section>
      <Container className="grid items-stretch gap-4">
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
        <h3>{title}</h3>
        {body && <p className="text-muted-foreground">{body}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex items-center gap-2">
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
      </Container>
    </Section>
  );
};
