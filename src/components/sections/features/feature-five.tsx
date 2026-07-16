import { Section, Container } from "@/components/craft/craft";
import { FeatureCard } from "./feature-card";
import type { FeatureItem } from "../types";

export type FeatureFiveProps = {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
};

/** Heading + a 2-up grid of linked feature cards. */
export const FeatureFive = ({ title, subtitle, items }: FeatureFiveProps) => (
  <Section className="border-b">
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
      </div>
    </Container>
  </Section>
);
