import { Section, Container } from "@/components/craft/craft";
import { PricingCard } from "./pricing-card";
import type { PricingPlan } from "../types";

export type PricingThreeProps = {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
};

/** Three columns where the `popular` plan is scaled up and highlighted. */
export const PricingThree = ({
  title = "Pricing",
  subtitle,
  plans,
}: PricingThreeProps) => (
  <Section>
    <Container className="flex flex-col items-center gap-4 text-center">
      <h2>{title}</h2>
      {subtitle && <p className="text-lg opacity-70 md:text-2xl">{subtitle}</p>}
      <div className="mt-10 grid grid-cols-1 items-center gap-6 min-[850px]:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} highlight />
        ))}
      </div>
    </Container>
  </Section>
);
