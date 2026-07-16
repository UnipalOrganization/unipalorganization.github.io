import Link from "next/link";

import { Section, Container } from "@/components/craft/craft";
import { FooterBrand } from "./footer-parts";
import type { ImageContent, LinkColumn } from "../types";

export type FooterThreeProps = {
  brand: string;
  logo?: ImageContent;
  blurb?: string;
  copyright?: string;
  /** Link columns shown to the right of the brand. */
  columns?: LinkColumn[];
};

/** Brand + copyright on the left, link columns on the right. */
export const FooterThree = ({
  brand,
  logo,
  blurb,
  copyright,
  columns = [],
}: FooterThreeProps) => (
  <footer>
    <Section>
      <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
        <div className="grid gap-6">
          <FooterBrand brand={brand} logo={logo} blurb={blurb} />
          {copyright && <p className="text-muted-foreground">{copyright}</p>}
        </div>
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
    </Section>
  </footer>
);
