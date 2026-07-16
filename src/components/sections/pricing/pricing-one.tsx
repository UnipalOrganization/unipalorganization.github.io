import { Section, Container } from "@/components/craft/craft";
import { PricingCard } from "./pricing-card";
import type { PricingPlan } from "../types";

export type PricingOneProps = {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
};

/** Three equal pricing columns, centered heading. */
export const PricingOne = ({
  title = "Pricing",
  subtitle,
  plans,
}: PricingOneProps) => (
  <Section>
    <Container className="flex flex-col items-center gap-4 text-center">
      <h2>{title}</h2>
      {subtitle && <p className="text-lg opacity-70 md:text-2xl">{subtitle}</p>}
      <div className="mt-4 grid grid-cols-1 gap-6 min-[850px]:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Container>
  </Section>
);
