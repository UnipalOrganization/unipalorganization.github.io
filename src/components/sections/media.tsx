import Image from "next/image";

import { cn, isVideoSrc } from "@/lib/utils";
import type { ImageContent } from "./types";

export type MediaProps = {
  media: ImageContent;
  /**
   * How the media fills its frame.
   * - "cover" (default): fills the frame, cropping to match its aspect ratio.
   * - "contain": suits logos/stickers/transparent art — fits inside the
   *   frame on a soft panel without cropping, letterboxed if needed.
   * - "natural": never crops and has no fixed frame — full width, proportional
   *   (auto) height.
   * - "natural-height": never crops — fixed height (set it via `className`,
   *   e.g. `"h-96"`), proportional (auto) width capped at 100% of the parent.
   *   Once the intrinsic ratio would make the width overflow, the browser
   *   shrinks the height to fit instead.
   */
  fit?: "cover" | "contain" | "natural" | "natural-height";
  /** Horizontal position of the media within its frame when `fit="contain"`. */
  align?: "center" | "left";
  className?: string;
};

/**
 * Renders an image or, when `src` has a video extension, a self-hosted
 * looping video — same `{ src, alt }` shape either way, so call sites never
 * declare which one they're passing.
 *
 * With `fit="cover"`/`"contain"` it fills its (relatively positioned) parent.
 * With `fit="natural"` it lays out at its own intrinsic aspect ratio instead,
 * so the parent must not force a fixed height.
 */
export const Media = ({
  media,
  fit = "cover",
  align = "center",
  className,
}: MediaProps) => {
  if (fit === "natural" || fit === "natural-height") {
    const sizeClass =
      fit === "natural" ? "h-auto w-full" : "w-auto max-w-full";

    return isVideoSrc(media.src) ? (
      <video
        src={media.src}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
        className={cn(sizeClass, className)}
      />
    ) : (
      <Image
        src={media.src}
        alt={media.alt}
        width={1600}
        height={900}
        sizes="100vw"
        className={cn(sizeClass, className)}
      />
    );
  }

  const fitClass = cn(
    fit === "contain" ? "object-contain" : "object-cover",
    fit === "contain" && align === "left" ? "object-left" : "object-center",
  );

  return isVideoSrc(media.src) ? (
    <video
      src={media.src}
      aria-label={media.alt}
      autoPlay
      muted
      loop
      playsInline
      className={cn("absolute inset-0 h-full w-full", fitClass, className)}
    />
  ) : (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      className={cn(fitClass, className)}
    />
  );
};
