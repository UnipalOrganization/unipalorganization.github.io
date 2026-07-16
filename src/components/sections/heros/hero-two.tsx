import Image from "next/image";
import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import type { CTA, ImageContent } from "../types";

export type HeroTwoProps = {
  /** Logo shown centered above the headline. */
  logo?: ImageContent;
  title: string;
  subtitle?: string;
  /** Primary action. Pass an icon component to show it before the label. */
  primaryCta?: CTA & { icon?: import("../types").IconComponent };
  secondaryCta?: CTA;
};

/** Centered hero with a logo lock-up. */
export const HeroTwo = ({
  logo,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroTwoProps) => (
  <Section>
    <Container className="flex flex-col items-center text-center">
      {logo && (
        <Image
          src={logo.src}
          width={172}
          height={72}
          alt={logo.alt}
          className="mb-6 md:mb-8"
        />
      )}
      <h1>{title}</h1>
      {subtitle && <h3 className="mt-4 text-muted-foreground">{subtitle}</h3>}
      {(primaryCta || secondaryCta) && (
        <div className="mt-6 flex gap-2 md:mt-12">
          {primaryCta && (
            <Button asChild>
              <Link href={primaryCta.href}>
                {primaryCta.icon && <primaryCta.icon className="size-4" />}
                {primaryCta.label}
              </Link>
            </Button>
          )}
          {secondaryCta && (
            <Button variant="ghost" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label} &rarr;</Link>
            </Button>
          )}
        </div>
      )}
    </Container>
  </Section>
);
