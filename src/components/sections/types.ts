/**
 * Shared content shapes used across the section interfaces. A call site
 * describes content once ("a link is a label + href", "an image is a src +
 * alt") and every section speaks the same language.
 */

/**
 * Any icon component that accepts a `className`. Satisfied by every icon from
 * `lucide-react` as well as the custom SVGs in `components/icons`.
 */
export type IconComponent = React.ComponentType<{ className?: string }>;

/** A call-to-action / any labelled link. */
export type CTA = {
  label: string;
  href: string;
};

/** A plain navigation link. */
export type NavLink = {
  label: string;
  href: string;
};

/** A social icon link — pass a lucide icon or a custom SVG component. */
export type SocialLink = {
  icon: IconComponent;
  href: string;
  /** Accessible label, e.g. "Instagram". */
  label: string;
};

/** An image reference. */
export type ImageContent = {
  src: string;
  alt: string;
};

/** One entry in a feature grid/list. */
export type FeatureItem = {
  /** A lucide icon (e.g. `Sparkles`) or custom SVG component. Optional. */
  icon?: IconComponent;
  title: string;
  description: string;
  /** Make the whole card a link (used by the linked-card variants). */
  href?: string;
  /** Small "Learn more"-style label shown with an arrow when `href` is set. */
  cta?: string;
};

/** One column of pricing. */
export type PricingPlan = {
  name: string;
  /** Pre-formatted price, e.g. "£29/mo" or "Free". */
  price: string;
  description?: string;
  features: string[];
  /** Button label + destination. */
  cta: CTA;
  /** Emphasise this plan as the recommended one. */
  popular?: boolean;
};

/** A titled column of links (footers). */
export type LinkColumn = {
  heading: string;
  links: NavLink[];
};
