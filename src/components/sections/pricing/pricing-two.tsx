import { Section, Container } from "@/components/craft/craft";
import { PricingCard } from "./pricing-card";
import type { PricingPlan } from "../types";

export type PricingTwoProps = {
  title?: string;
  subtitle?: string;
  /** Savings banner, e.g. "Save 17% with yearly billing". */
  note?: string;
  plans: PricingPlan[];
};

/** Three pricing columns with a savings note banner above them. */
export const PricingTwo = ({
  title = "Pricing",
  subtitle,
  note,
  plans,
}: PricingTwoProps) => (
  <Section>
    <Container className="flex flex-col items-center gap-4 text-center">
      <h2>{title}</h2>
      {subtitle && <p className="text-lg opacity-70 md:text-2xl">{subtitle}</p>}
      {note && (
        <span className="mt-2 rounded-full bg-soft px-4 py-1 text-sm font-medium text-soft-foreground">
          {note}
        </span>
      )}
      <div className="mt-8 grid grid-cols-1 gap-6 min-[850px]:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Container>
  </Section>
);
