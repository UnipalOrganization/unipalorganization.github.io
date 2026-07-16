import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { FooterBrand } from "./footer-parts";
import type { ImageContent, NavLink } from "../types";

export type FooterTwoProps = {
  brand: string;
  logo?: ImageContent;
  blurb?: string;
  legalLinks?: NavLink[];
  copyright?: string;
};

/** Minimal single-column footer: brand, blurb, legal links, copyright. */
export const FooterTwo = ({
  brand,
  logo,
  blurb,
  legalLinks = [],
  copyright,
}: FooterTwoProps) => (
  <footer className="border-t">
    <Section>
      <Container className="grid gap-6">
        <FooterBrand brand={brand} logo={logo} blurb={blurb} />
        {legalLinks.length > 0 && (
          <div className="flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:flex-row">
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
