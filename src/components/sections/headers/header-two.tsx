import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import type { CTA } from "../types";

export type HeaderTwoProps = {
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Centered page header with two actions. */
export const HeaderTwo = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeaderTwoProps) => (
  <Section>
    <Container className="flex flex-col text-center">
      <h1>{title}</h1>
      {subtitle && <h3 className="mt-4 text-muted-foreground">{subtitle}</h3>}
      {(primaryCta || secondaryCta) && (
        <div className="mx-auto mt-8 flex items-center gap-2">
          {primaryCta && (
            <Button asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button variant="outline" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      )}
    </Container>
  </Section>
);
