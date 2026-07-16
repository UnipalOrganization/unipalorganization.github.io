import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import type { CTA } from "../types";

export type CtaOneProps = {
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Left-aligned CTA with a primary button and a text link. */
export const CtaOne = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CtaOneProps) => (
  <Section>
    <Container className="flex flex-col gap-6">
      <h2>{title}</h2>
      {subtitle && <h4 className="text-muted-foreground">{subtitle}</h4>}
      {(primaryCta || secondaryCta) && (
        <div className="flex items-center gap-2">
          {primaryCta && (
            <Button asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button variant="link" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label} &rarr;</Link>
            </Button>
          )}
        </div>
      )}
    </Container>
  </Section>
);
