import Link from "next/link";
import { CircleCheck } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CTA } from "../types";

export type UsagePlan = {
  name: string;
  /** Currency symbol prefixed to the numbers, e.g. "$" or "£". */
  currency?: string;
  basePrice: number;
  pricePerUser: number;
  description?: string;
  features: string[];
  cta: CTA;
  popular?: boolean;
};

export type PricingFourProps = {
  title?: string;
  subtitle?: string;
  plans: UsagePlan[];
};

/**
 * Usage-based pricing. The original used a live "users" slider; the static
 * version states the base + per-user rate so it works with no client JS.
 */
export const PricingFour = ({
  title = "Pricing",
  subtitle,
  plans,
}: PricingFourProps) => (
  <Section>
    <Container className="flex flex-col items-center gap-4 text-center">
      <h2>{title}</h2>
      {subtitle && <p className="text-lg opacity-70 md:text-2xl">{subtitle}</p>}
      <div className="mt-8 grid grid-cols-1 gap-6 min-[850px]:grid-cols-3">
        {plans.map((plan) => {
          const c = plan.currency ?? "$";
          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-card border p-6 transition-all duration-200",
                plan.popular && "z-10 border-primary shadow-lg md:scale-105",
              )}
            >
              <div className="text-center">
                <Badge variant={plan.popular ? "default" : "outline"}>
                  {plan.name}
                  {plan.popular && (
                    <span className="ml-2 text-xs font-normal">★ Popular</span>
                  )}
                </Badge>
                <h4 className="mb-2 mt-4 text-2xl font-bold text-primary">
                  {c}
                  {plan.basePrice}/month
                </h4>
                {plan.description && (
                  <p className="text-sm opacity-70">{plan.description}</p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  {c}
                  {plan.basePrice} base + {c}
                  {plan.pricePerUser}/additional user
                </p>
              </div>

              <div className="my-4 border-t" />

              <ul className="space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm opacity-70"
                  >
                    <CircleCheck className="mr-2 size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Button
                  asChild
                  size="sm"
                  className="w-full"
                  variant={plan.popular ? "primary" : "outline"}
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
