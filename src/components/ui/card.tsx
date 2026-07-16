import * as React from "react";

import { cn } from "@/lib/utils";

/** A surface with the card radius/border from the design tokens. */
export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-card border border-border bg-card text-card-foreground",
      className,
    )}
    {...props}
  />
);

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props} />
);
