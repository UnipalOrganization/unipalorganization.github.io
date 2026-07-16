import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { FooterBrand, SocialButtons } from "./footer-parts";
import type { ImageContent, NavLink, SocialLink } from "../types";

export type FooterFiveProps = {
  brand: string;
  logo?: ImageContent;
  blurb?: string;
  legalLinks?: NavLink[];
  socials?: SocialLink[];
  copyright?: string;
};

/** Brand + blurb + legal links, with a socials/copyright bar underneath. */
export const FooterFive = ({
  brand,
  logo,
  blurb,
  legalLinks = [],
  socials = [],
  copyright,
}: FooterFiveProps) => (
  <footer>
    <Section>
      <Container className="grid gap-6">
        <FooterBrand brand={brand} logo={logo} blurb={blurb} />
        {legalLinks.length > 0 && (
          <div className="flex flex-col gap-4 md:flex-row">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
      <Container className="flex flex-col justify-between gap-6 border-t pt-6 md:flex-row md:items-center md:gap-2">
        {socials.length > 0 && <SocialButtons socials={socials} />}
        {copyright && <p className="text-muted-foreground">{copyright}</p>}
      </Container>
    </Section>
  </footer>
);
