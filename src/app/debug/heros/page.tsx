import { Sparkles } from "lucide-react";

import { Container } from "@/components/craft/craft";
import {
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
  HeroFive,
  HeroSix,
} from "@/components/sections";
import type { ImageContent } from "@/components/sections";

/**
 * Debug-only gallery: every `heros/*` section rendered back-to-back so
 * media-driven layouts can be eyeballed with real assets. Each hero with a
 * media slot is shown twice — once with an image, once with a video — since
 * heroes support video the same way features do: hand them a video src and
 * they render a looping `<video>`. Visit /debug/heros directly.
 */

const VIDEO: ImageContent = {
  src: "/cc-cc-w-action.mp4",
  alt: "Campus life in action",
};

const IMAGE: ImageContent = {
  src: "/school_assets/hws_college_avatar2.webp",
  alt: "HWS student avatar sticker",
};

const LOGO: ImageContent = {
  src: "/logo.svg",
  alt: "Unipal",
};

const announcement = { label: "Now live at 40+ campuses", href: "#" };
const primaryCta = { label: "Get the app", href: "#" };
const secondaryCta = { label: "Learn more", href: "#" };

const title = "Your whole university life, in one friendly app.";
const subtitle =
  "Unipal helps you find your people, stay on top of classes, and actually enjoy campus — without juggling ten different apps.";

const DebugLabel = ({ children }: { children: React.ReactNode }) => (
  <Container className="max-w-none! border-y bg-sky-200 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-sky-950">
    {children}
  </Container>
);

export default function HerosDebugPage() {
  return (
    <main>
      <div className="border-b bg-black py-8 text-center text-white">
        <h1 className="text-2xl font-semibold">Hero sections — debug gallery</h1>
        <p className="mt-1 text-sm opacity-70">
          Every component from src/components/sections/heros. Media-slot heroes
          are shown once with an image and once with a video.
        </p>
      </div>

      <DebugLabel>
        HeroOne — image (left-aligned, fixed height, no crop)
      </DebugLabel>
      <HeroOne
        announcement={announcement}
        title={title}
        subtitle={subtitle}
        image={IMAGE}
      />

      <DebugLabel>HeroOne — video (left-aligned, full-width below)</DebugLabel>
      <HeroOne
        announcement={announcement}
        title={title}
        subtitle={subtitle}
        image={VIDEO}
      />

      <DebugLabel>HeroTwo — logo lock-up (no hero image slot)</DebugLabel>
      <HeroTwo
        logo={LOGO}
        title={title}
        subtitle={subtitle}
        primaryCta={{ ...primaryCta, icon: Sparkles }}
        secondaryCta={secondaryCta}
      />

      <DebugLabel>HeroThree — editorial (logo strip, no hero image slot)</DebugLabel>
      <HeroThree
        title={title}
        seenInLabel="Trusted on campuses like:"
        logos={[IMAGE, IMAGE, IMAGE]}
        body={subtitle}
        note="Free for students."
        link={{ label: "See supported schools", href: "#" }}
        footnote="No credit card required."
      />

      <DebugLabel>HeroFour — asymmetric (two image corners)</DebugLabel>
      <HeroFour
        title={title}
        titleHref="#"
        subtitle="Find your people. Plan your days."
        navLinks={[
          { label: "Features", href: "#" },
          { label: "Pricing", href: "#" },
        ]}
        images={[IMAGE, IMAGE]}
        circleCta={{ label: "Get the app", href: "#" }}
      />

      <DebugLabel>HeroFour — asymmetric (two video corners)</DebugLabel>
      <HeroFour
        title={title}
        titleHref="#"
        subtitle="Find your people. Plan your days."
        navLinks={[
          { label: "Features", href: "#" },
          { label: "Pricing", href: "#" },
        ]}
        images={[VIDEO, VIDEO]}
        circleCta={{ label: "Get the app", href: "#" }}
      />

      <DebugLabel>
        HeroFive — image (centered, fixed height, no crop)
      </DebugLabel>
      <HeroFive
        announcement={announcement}
        title={title}
        subtitle={subtitle}
        image={IMAGE}
      />

      <DebugLabel>HeroFive — video (centered, full-width below)</DebugLabel>
      <HeroFive
        announcement={announcement}
        title={title}
        subtitle={subtitle}
        image={VIDEO}
      />

      <DebugLabel>HeroSix — text only (no media slot)</DebugLabel>
      <HeroSix
        announcement={announcement}
        title={title}
        subtitle={subtitle}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <div className="border-t bg-black py-6 text-center text-xs text-white/50">
        End of gallery.
      </div>
    </main>
  );
}
