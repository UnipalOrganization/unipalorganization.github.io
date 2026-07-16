import Link from "next/link";
import { CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "../types";

/** A single pricing column, shared by the pricing variants. */
export const PricingCard = ({
  plan,
  highlight = false,
}: {
  plan: PricingPlan;
  /** Emphasise (scale + ring) — used by variants that spotlight the popular plan. */
  highlight?: boolean;
}) => (
  <div
    className={cn(
      "relative flex flex-col rounded-card border p-6 transition-all duration-200",
      highlight && plan.popular && "z-10 border-primary shadow-lg md:scale-105",
    )}
  >
    <div className="text-center">
      <Badge variant={plan.popular ? "default" : "outline"}>
        {plan.name}
        {plan.popular && <span className="ml-2 text-xs font-normal">★ Popular</span>}
      </Badge>
      <h4 className="mb-2 mt-4 text-2xl font-bold text-primary">{plan.price}</h4>
      {plan.description && (
        <p className="text-sm opacity-70">{plan.description}</p>
      )}
    </div>

    <div className="my-4 border-t" />

    <ul className="space-y-3 text-left">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-center text-sm opacity-70">
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
