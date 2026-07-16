import { Section, Container } from "@/components/craft/craft";
import { FeatureCard } from "./feature-card";
import type { FeatureItem } from "../types";

export type FeatureSixProps = {
  title: string;
  subtitle?: string;
  /** Shown in the 2-up grid. */
  items: FeatureItem[];
  /** Emphasised full-width card below the grid. */
  highlight?: FeatureItem;
};

/** 2-up grid of feature cards plus a full-width highlighted card. */
export const FeatureSix = ({
  title,
  subtitle,
  items,
  highlight,
}: FeatureSixProps) => (
  <Section>
    <Container>
      <div className="flex flex-col gap-6">
        <h3 className="text-4xl">{title}</h3>
        {subtitle && (
          <h4 className="text-2xl font-light opacity-70">{subtitle}</h4>
        )}

        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

        {highlight && <FeatureCard {...highlight} className="bg-muted/25" />}
      </div>
    </Container>
  </Section>
);
