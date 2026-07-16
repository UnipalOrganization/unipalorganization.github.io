import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FeatureItem } from "../types";

/** A single linked feature card, shared by the grid feature variants. */
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  href = "#",
  cta,
  className,
}: FeatureItem & { className?: string }) => (
  <Link
    href={href}
    className={cn(
      "flex flex-col justify-between gap-6 rounded-card border p-6 transition-all hover:-mt-2 hover:mb-2",
      className,
    )}
  >
    <div className="grid gap-4">
      {Icon && <Icon className="size-6" />}
      <h4 className="text-xl text-primary">{title}</h4>
      <p className="text-base opacity-75">{description}</p>
    </div>
    {cta && (
      <div className="flex h-fit items-center text-sm font-semibold">
        <p>{cta}</p> <ArrowRight className="ml-2 size-4" />
      </div>
    )}
  </Link>
);
