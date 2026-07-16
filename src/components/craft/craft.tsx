/**
 * craft — layout primitives
 * -----------------------------------------------------------------------------
 * Ported from brijr/craft (craft-ds). These are intentionally vanilla,
 * content-free building blocks: they lay out the page and nothing else. All
 * copy lives in the section components that compose these.
 */
import { cn } from "@/lib/utils";

type CraftProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
};

/** A full-bleed vertical band. Sections stack down the page. */
export const Section = ({ children, className, id, style }: CraftProps) => (
  <section className={cn("py-8 sm:py-12 md:py-16", className)} id={id} style={style}>
    {children}
  </section>
);

/** Centers content and caps its width with consistent horizontal padding. */
export const Container = ({ children, className, id, style }: CraftProps) => (
  <div
    className={cn("mx-auto max-w-5xl px-6 sm:px-8", className)}
    id={id}
    style={style}
  >
    {children}
  </div>
);

/** Primary content region of the page. */
export const Main = ({ children, className, id, style }: CraftProps) => (
  <main className={cn(className)} id={id} style={style}>
    {children}
  </main>
);

type NavProps = CraftProps & { containerClassName?: string };

/** Sticky-friendly navigation shell with a centered inner container. */
export const Nav = ({
  children,
  className,
  id,
  style,
  containerClassName,
}: NavProps) => (
  <nav className={cn(className)} id={id} style={style}>
    <div
      className={cn(
        "mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8",
        containerClassName,
      )}
    >
      {children}
    </div>
  </nav>
);
