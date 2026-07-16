/**
 * The full brijr component catalog, ported to be content-driven.
 *
 * Every section takes its copy through props (see each file's *Props type).
 * Import what you need at the call site, e.g.:
 *   import { HeroFive, FeatureTwo, PricingThree } from "@/components/sections";
 */

// Navigation (lightweight, project-specific)
export { SiteNav } from "./site-nav";
export type { SiteNavProps } from "./site-nav";

// Logo marquee
export { SchoolLogoSlider } from "./school-logo-slider";

// Heros
export { HeroOne } from "./heros/hero-one";
export { HeroTwo } from "./heros/hero-two";
export { HeroThree } from "./heros/hero-three";
export { HeroFour } from "./heros/hero-four";
export { HeroFive } from "./heros/hero-five";
export { HeroSix } from "./heros/hero-six";
export type { HeroOneProps } from "./heros/hero-one";
export type { HeroTwoProps } from "./heros/hero-two";
export type { HeroThreeProps } from "./heros/hero-three";
export type { HeroFourProps } from "./heros/hero-four";
export type { HeroFiveProps } from "./heros/hero-five";
export type { HeroSixProps } from "./heros/hero-six";

// Headers
export { HeaderOne } from "./headers/header-one";
export { HeaderTwo } from "./headers/header-two";
export type { HeaderOneProps } from "./headers/header-one";
export type { HeaderTwoProps } from "./headers/header-two";

// Features
export { FeatureOne } from "./features/feature-one";
export { FeatureTwo } from "./features/feature-two";
export { FeatureThree } from "./features/feature-three";
export { FeatureFour } from "./features/feature-four";
export { FeatureFive } from "./features/feature-five";
export { FeatureSix } from "./features/feature-six";
export { FeatureSeven } from "./features/feature-seven";
export { FeatureEight } from "./features/feature-eight";
export { FeatureNine } from "./features/feature-nine";
export type { FeatureOneProps } from "./features/feature-one";
export type { FeatureTwoProps } from "./features/feature-two";
export type { FeatureThreeProps } from "./features/feature-three";
export type { FeatureFourProps } from "./features/feature-four";
export type { FeatureFiveProps } from "./features/feature-five";
export type { FeatureSixProps } from "./features/feature-six";
export type { FeatureSevenProps } from "./features/feature-seven";
export type { FeatureEightProps } from "./features/feature-eight";
export type { FeatureNineProps } from "./features/feature-nine";

// CTAs
export { CtaOne } from "./ctas/cta-one";
export { CtaTwo } from "./ctas/cta-two";
export { CtaThree } from "./ctas/cta-three";
export { CtaFour } from "./ctas/cta-four";
export type { CtaOneProps } from "./ctas/cta-one";
export type { CtaTwoProps } from "./ctas/cta-two";
export type { CtaThreeProps } from "./ctas/cta-three";
export type { CtaFourProps } from "./ctas/cta-four";

// FAQs
export { FaqsOne } from "./faqs/faqs-one";
export { FaqsTwo } from "./faqs/faqs-two";
export { FaqsThree } from "./faqs/faqs-three";
export type { FaqsOneProps, FaqItem } from "./faqs/faqs-one";
export type { FaqsTwoProps } from "./faqs/faqs-two";
export type { FaqsThreeProps, FaqMediaItem } from "./faqs/faqs-three";

// Pricing
export { PricingOne } from "./pricing/pricing-one";
export { PricingTwo } from "./pricing/pricing-two";
export { PricingThree } from "./pricing/pricing-three";
export { PricingFour } from "./pricing/pricing-four";
export type { PricingOneProps } from "./pricing/pricing-one";
export type { PricingTwoProps } from "./pricing/pricing-two";
export type { PricingThreeProps } from "./pricing/pricing-three";
export type { PricingFourProps, UsagePlan } from "./pricing/pricing-four";

// Footers
export { FooterOne } from "./footers/footer-one";
export { FooterTwo } from "./footers/footer-two";
export { FooterThree } from "./footers/footer-three";
export { FooterFour } from "./footers/footer-four";
export { FooterFive } from "./footers/footer-five";
export type { FooterOneProps } from "./footers/footer-one";
export type { FooterTwoProps } from "./footers/footer-two";
export type { FooterThreeProps } from "./footers/footer-three";
export type { FooterFourProps } from "./footers/footer-four";
export type { FooterFiveProps } from "./footers/footer-five";

// Shared content types
export type {
  CTA,
  NavLink,
  SocialLink,
  ImageContent,
  FeatureItem,
  PricingPlan,
  LinkColumn,
  IconComponent,
} from "./types";
