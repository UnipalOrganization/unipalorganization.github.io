import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FooterBrand, SocialButtons } from "./footer-parts";
import type { ImageContent, NavLink, SocialLink } from "../types";

export type FooterOneProps = {
  brand: string;
  logo?: ImageContent;
  blurb?: string;
  socials?: SocialLink[];
  /** Newsletter sign-up. */
  newsletter?: {
    label: string;
    placeholder?: string;
    description?: string;
    submitLabel?: string;
    /** Form endpoint (Formspree, Buttondown, …). */
    formAction?: string;
  };
  legalLinks?: NavLink[];
  copyright?: string;
};

/** Brand + socials + newsletter form, with a legal/copyright row beneath. */
export const FooterOne = ({
  brand,
  logo,
  blurb,
  socials = [],
  newsletter,
  legalLinks = [],
  copyright,
}: FooterOneProps) => (
  <footer>
    <Section>
      <Container className="grid gap-6">
        <div className="flex flex-col gap-6">
          <FooterBrand brand={brand} logo={logo} blurb={blurb} />
          {socials.length > 0 && <SocialButtons socials={socials} />}
        </div>

        {newsletter && (
          <form
            action={newsletter.formAction ?? "#"}
            method="post"
            className="space-y-3"
          >
            <label htmlFor="footer-email" className="block font-medium">
              {newsletter.label}
            </label>
            <Input
              id="footer-email"
              type="email"
              name="email"
              required
              className="md:w-96"
              placeholder={newsletter.placeholder ?? "you@example.com"}
            />
            {newsletter.description && (
              <p className="text-sm text-muted-foreground">
                {newsletter.description}
              </p>
            )}
            <Button type="submit">{newsletter.submitLabel ?? "Submit"}</Button>
          </form>
        )}
      </Container>

      <Container className="items-center justify-between border-t pt-6 text-sm md:flex">
        {legalLinks.length > 0 && (
          <div className="mb-6 flex flex-col gap-4 underline decoration-muted underline-offset-4 md:mb-0 md:flex-row">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
        {copyright && <p className="text-muted-foreground">{copyright}</p>}
      </Container>
    </Section>
  </footer>
);
