"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";

import { Section, Container } from "@/components/craft/craft";
import { cn } from "@/lib/utils";
import { Media } from "../media";
import type { ImageContent } from "../types";
import type { FaqItem } from "./faqs-one";

/** A FAQ entry that also carries the media shown while it is the active question. */
export type FaqMediaItem = FaqItem & {
  /** Image or video revealed in the left pane when this question is opened. */
  media: ImageContent;
};

export type FaqsThreeProps = {
  title?: string;
  subtitle?: string;
  items: FaqMediaItem[];
};

/**
 * Split FAQ: copy + a media pane on the left that mirrors the last opened
 * question, with a single-open accordion on the right.
 *
 * The media is rendered exactly like FeatureThree (`fit="natural"` inside a
 * rounded, clipped frame). Needs client JS — the media tracks accordion state —
 * so unlike FaqsOne/Two this is a Client Component.
 */
export const FaqsThree = ({
  title = "Frequently Asked Questions",
  subtitle,
  items,
}: FaqsThreeProps) => {
  const reduce = useReducedMotion();
  // Which question is open. `active` sticks to the last opened one so the media
  // pane keeps showing it even after the answer is collapsed.
  const [open, setOpen] = useState<number | null>(0);
  const [active, setActive] = useState(0);

  const media = items[active]?.media;

  return (
    <Section>
      <Container className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 md:sticky md:top-24">
          <div className="flex flex-col gap-2">
            <h3>{title}</h3>
            {subtitle && <h4 className="text-muted-foreground">{subtitle}</h4>}
          </div>
          <div className="overflow-hidden rounded-card">
            {media && (
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
              >
                <Media media={media} fit="natural" />
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-4">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.question} className="group">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => {
                      setOpen(isOpen ? null : i);
                      setActive(i);
                    }}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-2 text-left font-medium"
                  >
                    {item.question}
                    <Plus
                      className={cn(
                        "size-5 shrink-0 text-muted-foreground transition-transform",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 text-base text-muted-foreground">
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
