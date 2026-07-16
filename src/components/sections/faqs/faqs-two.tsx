import { ArrowUpRight, Plus } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";
import type { FaqItem } from "./faqs-one";

export type FaqsTwoProps = {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
};

/** Card-style accordion FAQ. Native <details> — no client JS. */
export const FaqsTwo = ({
  title = "Frequently Asked Questions",
  subtitle,
  items,
}: FaqsTwoProps) => (
  <Section>
    <Container>
      <h3>{title}</h3>
      {subtitle && <h4 className="mt-2 text-muted-foreground">{subtitle}</h4>}
      <div className="mt-4 flex flex-col gap-4 md:mt-8">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-card border bg-muted/20 px-4 transition-all hover:bg-muted/50 [&_summary]:list-none"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left font-medium">
              {item.question}
              <Plus className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
            </summary>
            <div className="pb-4 text-base text-muted-foreground md:w-3/4">
              {item.answer}
              {item.link && (
                <a
                  href={item.link}
                  className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                >
                  Learn more <ArrowUpRight className="ml-1 size-4" />
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </Container>
  </Section>
);
