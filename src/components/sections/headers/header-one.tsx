import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import type { CTA } from "../types";

export type HeaderOneProps = {
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Simple left-aligned page header with two actions. */
export const HeaderOne = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeaderOneProps) => (
  <Section>
    <Container className="flex flex-col">
      <h1>{title}</h1>
      {subtitle && <h3 className="mt-4 text-muted-foreground">{subtitle}</h3>}
      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex items-center gap-2">
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
