import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only helper for feeding an `.svg` file into <ScrollPath>.
 *
 * The site is a static export, so this runs at build time — call it from a
 * Server Component and spread the result onto the component:
 *
 *   const line = svgLineFromFile("src/assets/scribble.svg");
 *   <ScrollPath {...line} />
 *
 * It pulls the `viewBox` and every `<path d="…">` out of the markup, joining
 * multiple paths into one `d` string so the whole drawing animates as a single
 * stroke.
 */
export type SvgLine = { path: string; viewBox?: string; transform?: string };

/** Extract `viewBox` + concatenated path data from raw SVG markup. */
export function svgLineFromMarkup(markup: string): SvgLine {
  const viewBox = markup.match(/\bviewBox\s*=\s*["']([^"']+)["']/i)?.[1];

  // Capture transforms on any wrapping <g> elements so paths authored in a
  // nested / scaled coordinate space (e.g. exported from a vector editor) still
  // land inside the viewBox. SVG applies space-joined transforms left-to-right,
  // which is exactly the outer→inner nesting order, so no matrix math needed.
  const transform =
    [...markup.matchAll(/<g\b[^>]*\btransform\s*=\s*["']([^"']+)["']/gi)]
      .map((m) => m[1].trim())
      .join(" ") || undefined;

  const path = [...markup.matchAll(/\bd\s*=\s*["']([^"']+)["']/gi)]
    .map((m) => m[1].trim())
    .join(" ");

  if (!path) {
    throw new Error("svgLineFromMarkup: no <path d=\"…\"> found in SVG");
  }

  return { path, viewBox, transform };
}

/**
 * Read an `.svg` file (path relative to the project root) and return its
 * drawable line data. Runs on the server / at build time only.
 */
export function svgLineFromFile(relativePath: string): SvgLine {
  const markup = readFileSync(join(process.cwd(), relativePath), "utf8");
  return svgLineFromMarkup(markup);
}
