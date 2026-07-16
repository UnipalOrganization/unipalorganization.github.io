import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".m4v", ".ogv"];

/**
 * Tells a video src apart from an image src by extension, so call sites can
 * hand a feature section an ImageContent-shaped `{ src, alt }` pointing at
 * either kind of file without a separate "kind" field.
 */
export function isVideoSrc(src: string) {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}
