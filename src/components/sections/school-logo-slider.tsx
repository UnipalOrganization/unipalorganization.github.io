"use client";

import { InfiniteSlider } from "@/components/core/infinite-slider";

const SCHOOL_LOGOS = [
  {
    src: "/logo_cloud/amherst.png",
    alt: "Amherst College",
  },
  {
    src: "/logo_cloud/coloradocollege.png",
    alt: "Colorado College",
  },
  {
    src: "/logo_cloud/grinnel.avif",
    alt: "Grinnell College",
  },
  {
    src: "/logo_cloud/hws.avif",
    alt: "Hobart and William Smith Colleges",
  },
  {
    src: "/logo_cloud/lafayette.avif",
    alt: "Lafayette College",
  },
] as const;

export function SchoolLogoSlider() {
  return (
    <InfiniteSlider gap={64} reverse className="py-8">
      {SCHOOL_LOGOS.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className="h-8 w-auto object-contain md:h-10"
        />
      ))}
    </InfiniteSlider>
  );
}
