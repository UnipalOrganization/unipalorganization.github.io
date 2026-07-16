"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type TypeWriteProps = {
  /** Phrases to type. One entry types once; several cycle: type → hold → delete → next. */
  words: string[];
  /** Ms per character while typing. Default `70`. */
  typeSpeed?: number;
  /** Ms per character while deleting. Default `40`. */
  deleteSpeed?: number;
  /** How long to hold a finished word before deleting, in ms. Default `1500`. */
  hold?: number;
  /** Keep cycling. When `false`, types through the words once and stops on the last. Default `true`. */
  loop?: boolean;
  /** Cursor glyph, or `false` to hide it. Default `"|"`. */
  cursor?: React.ReactNode | false;
  /** Classes for the animated text. */
  className?: string;
  /** Classes for the cursor. */
  cursorClassName?: string;
};

/**
 * Inline typewriter text — drop it into any heading or paragraph:
 *
 *   <p>Hey <TypeWrite words={["friend", "future roommate", "study buddy"]} /></p>
 *   <h1>Built for <TypeWrite words={["you"]} loop={false} /></h1>
 *
 * Renders one inline <span> that inherits the surrounding font and color. The
 * cursor blinks while idle and holds steady while typing. Honors reduced-motion
 * by showing the first word statically.
 */
export const TypeWrite = ({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  hold = 1500,
  loop = true,
  cursor = "|",
  className,
  cursorClassName,
}: TypeWriteProps) => {
  const reduce = useReducedMotion();
  const list = words.length ? words : [""];

  const [i, setI] = useState(0); // which word
  const [n, setN] = useState(0); // chars shown
  const [deleting, setDeleting] = useState(false);

  const word = list[i];
  const atEnd = !deleting && n === word.length && i === list.length - 1 && !loop;

  useEffect(() => {
    if (reduce || atEnd) return;

    // Finished typing this word → hold, then start deleting.
    if (!deleting && n === word.length) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }

    // Finished deleting → advance to the next word.
    if (deleting && n === 0) {
      setDeleting(false);
      setI((v) => (v + 1) % list.length);
      return;
    }

    const t = setTimeout(
      () => setN((v) => v + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [n, deleting, i, word, atEnd, reduce, list.length, hold, typeSpeed, deleteSpeed]);

  const text = reduce ? word : word.slice(0, n);
  const steady = reduce || atEnd || (!deleting && n === word.length);

  return (
    <span aria-label={words.join(", ")} className={cn("whitespace-pre", className)}>
      <span aria-hidden>{text}</span>
      {cursor !== false && (
        <motion.span
          aria-hidden
          className={cn("inline-block", cursorClassName)}
          animate={reduce ? undefined : { opacity: steady ? [1, 0, 1] : 1 }}
          transition={steady ? { duration: 1, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        >
          {cursor}
        </motion.span>
      )}
    </span>
  );
};
