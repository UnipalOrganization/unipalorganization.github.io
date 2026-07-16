import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { FooterBrand, SocialButtons } from "./footer-parts";
import type { ImageContent, LinkColumn, SocialLink } from "../types";

export type FooterFourProps = {
  brand: string;
  logo?: ImageContent;
  blurb?: string;
  columns?: LinkColumn[];
  socials?: SocialLink[];
  copyright?: string;
};

/** Brand + link columns, with a socials/copyright bar underneath. */
export const FooterFour = ({
  brand,
  logo,
  blurb,
  columns = [],
  socials = [],
  copyright,
}: FooterFourProps) => (
  <footer>
    <Section>
      <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
        <FooterBrand brand={brand} logo={logo} blurb={blurb} />
        {columns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-2">
            <h5>{column.heading}</h5>
            {column.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>
      <Container className="flex flex-col justify-between gap-6 border-t pt-6 md:flex-row md:items-center md:gap-2">
        {socials.length > 0 && <SocialButtons socials={socials} />}
        {copyright && <p className="text-muted-foreground">{copyright}</p>}
      </Container>
    </Section>
  </footer>
);
