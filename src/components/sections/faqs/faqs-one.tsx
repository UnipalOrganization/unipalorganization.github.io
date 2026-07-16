import { ArrowUpRight, Plus } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";

export type FaqItem = {
  question: string;
  answer: string;
  /** Optional "Learn more" link under the answer. */
  link?: string;
};

export type FaqsOneProps = {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
};

/** Plain accordion FAQ. Native <details> — no client JS. */
export const FaqsOne = ({
  title = "Frequently Asked Questions",
  subtitle,
  items,
}: FaqsOneProps) => (
  <Section>
    <Container>
      <h3>{title}</h3>
      {subtitle && <h4 className="mt-2 text-muted-foreground">{subtitle}</h4>}
      <div className="mt-4 flex flex-col gap-4 md:mt-8">
        {items.map((item) => (
          <details key={item.question} className="group [&_summary]:list-none">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 text-left font-medium">
              {item.question}
              <Plus className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
            </summary>
            <div className="pb-2 text-base text-muted-foreground md:w-3/4">
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
