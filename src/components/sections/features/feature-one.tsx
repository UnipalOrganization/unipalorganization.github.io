import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import type { CTA, FeatureItem } from "../types";

export type FeatureOneProps = {
  title: React.ReactNode;
  subtitle?: string;
  items: FeatureItem[];
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

/** Heading + a 3-up grid of icon/title/description features, with optional actions. */
export const FeatureOne = ({
  title,
  subtitle,
  items,
  primaryCta,
  secondaryCta,
}: FeatureOneProps) => (
  <Section className="">
    <Container>
      <div className="flex flex-col gap-6">
        <h3 className="text-4xl">{title}</h3>
        {subtitle && (
          <h4 className="text-2xl font-light opacity-70">{subtitle}</h4>
        )}

        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div className="flex flex-col gap-4" key={title}>
              {Icon && <Icon className="size-6" />}
              <h4 className="text-xl text-primary">{title}</h4>
              <p className="text-base opacity-75">{description}</p>
            </div>
          ))}
        </div>

        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex items-center gap-2">
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
