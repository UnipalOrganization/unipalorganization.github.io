import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CTA } from "../types";

export type HeroSixProps = {
  announcement?: CTA;
  title: string;
  /** Shown in a soft bordered panel under the headline. */
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Text-only hero with a badge announcement and a highlighted subtitle panel. */
export const HeroSix = ({
  announcement,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroSixProps) => (
  <Section className="relative backdrop-blur-sm">
    <Container className="flex flex-col gap-8">
      {announcement && (
        <Badge className="w-fit" variant="outline">
          <Link
            className="group flex items-center gap-1"
            href={announcement.href}
          >
            {announcement.label}
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
      )}
      <h1>{title}</h1>
      {subtitle && (
        <h3 className="rounded-card border bg-muted/50 p-4 text-muted-foreground">
          {subtitle}
        </h3>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex gap-4">
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
