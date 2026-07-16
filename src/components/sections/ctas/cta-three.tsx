import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import type { CTA } from "../types";

export type CtaThreeProps = {
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Centered CTA inside a soft bordered panel. */
export const CtaThree = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CtaThreeProps) => (
  <Section>
    <Container className="flex flex-col items-center gap-6 rounded-card border bg-accent/50 p-6 text-center md:p-12">
      <h2>{title}</h2>
      {subtitle && <h3 className="text-muted-foreground">{subtitle}</h3>}
      {(primaryCta || secondaryCta) && (
        <div className="mx-auto flex items-center gap-2">
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
    </Container>
  </Section>
);
