import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { Media } from "../media";
import type { CTA, ImageContent } from "../types";

export type FeatureThreeProps = {
  title: string;
  body?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  image: ImageContent;
};

/** Split feature: image on the left, copy + actions on the right. */
export const FeatureThree = ({
  title,
  body,
  primaryCta,
  secondaryCta,
  image,
}: FeatureThreeProps) => (
  <Section>
    <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
      <div className="overflow-hidden rounded-card">
        <Media media={image} fit="natural" />
      </div>
      <div className="flex flex-col gap-6 py-8">
        <h3>{title}</h3>
        {body && <p className="font-light leading-[1.4] opacity-70">{body}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="flex items-center gap-2">
            {primaryCta && (
              <Button className="w-fit" asChild>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button className="w-fit" variant="link" asChild>
                <Link href={secondaryCta.href}>{secondaryCta.label} &rarr;</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </Container>
  </Section>
);
