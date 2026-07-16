"use client";

import { InfiniteSlider } from "@/components/core/infinite-slider";

const SCHOOL_LOGOS = [
  {
    src: "/school_assets/amherst_college_sticker.webp",
    alt: "Amherst College",
  },
  {
    src: "/school_assets/clark_university_sticker.webp",
    alt: "Clark University",
  },
  {
    src: "/school_assets/colorado_college_sticker.webp",
    alt: "Colorado College",
  },
  {
    src: "/school_assets/hws_college_sticker.webp",
    alt: "Hobart and William Smith Colleges",
  },
  {
    src: "/school_assets/lafayette_college_sticker.webp",
    alt: "Lafayette College",
  },
  {
    src: "/school_assets/skidmore_college_sticker.webp",
    alt: "Skidmore College",
  },
  {
    src: "/school_assets/wellesley_college_sticker.webp",
    alt: "Wellesley College",
  },
  {
    src: "/school_assets/amherst_college_avatar.webp",
    alt: "Amherst College mascot",
  },
  {
    src: "/school_assets/clark_university_avatar.webp",
    alt: "Clark University mascot",
  },
  {
    src: "/school_assets/colorado_college_avatar.webp",
    alt: "Colorado College mascot",
  },
] as const;

export function SchoolLogoSlider() {
  return (
    <InfiniteSlider gap={24} reverse className="py-8">
      {SCHOOL_LOGOS.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className="h-[120px] w-auto"
        />
      ))}
    </InfiniteSlider>
  );
}
