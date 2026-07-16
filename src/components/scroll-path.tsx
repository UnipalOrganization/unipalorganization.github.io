"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  circInOut,
  useScroll,
  useTransform,
  type EasingFunction,
  type MotionValue,
} from "motion/react";

import { cn } from "@/lib/utils";

/** Default lime scribble and the viewBox that frames it. */
export const DEFAULT_PATH =
  "M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89";
export const DEFAULT_VIEW_BOX = "-68.5 -20.6 1357.1 2704.5";

const LinePath = ({
  className,
  style,
  scrollYProgress,
  path = DEFAULT_PATH,
  viewBox = DEFAULT_VIEW_BOX,
  transform,
  stroke = "#DDFFA9",
  strokeWidth = 30,
  drawStart = 0.0,
  drawEnd = 0.8,
  pathStart = 0,
  reverse = false,
  ease = circInOut,
}: {
  className?: string;
  style?: React.CSSProperties;
  scrollYProgress: MotionValue<number>;
  path?: string;
  viewBox?: string;
  transform?: string;
  stroke?: string;
  strokeWidth?: number;
  drawStart?: number;
  drawEnd?: number;
  pathStart?: number;
  reverse?: boolean;
  ease?: EasingFunction;
}) => {
  // Draw only within the [drawStart, drawEnd] slice of the scroll window and
  // hold flat outside it (clamp). Before drawStart the line sits at `pathStart`
  // (0 = empty); after drawEnd it stays fully drawn. `ease` curves the draw
  // rate so it ramps in/out gently instead of snapping to a constant speed.
  const pathLength = useTransform(
    scrollYProgress,
    [drawStart, drawEnd],
    [pathStart, 1],
    { clamp: true, ease },
  );

  // `pathLength` draws the revealed slice as `[pathOffset, pathOffset +
  // pathLength]`. Forward, the slice is anchored at the path's start
  // (`pathOffset = 0`) and its far edge advances toward the end. Reversed, we
  // anchor the slice at the path's end (`pathOffset = 1 - pathLength`) so it
  // grows backward from the end toward the start.
  const pathOffset = useTransform(pathLength, (value) =>
    reverse ? 1 - value : 0,
  );

  return (
    <svg
      fill="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block h-auto w-full shrink-0", className)}
      style={style}
    >
      <g transform={transform}>
        <motion.path
          d={path}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength, pathOffset }}
        />
      </g>
    </svg>
  );
};

export type ScrollPathProps = {
  /**
   * How the section's scroll maps to draw progress, in `useScroll` offset
   * terms. Default `["start end", "end start"]` — the line advances across the
   * full span from when the section enters the viewport to when it leaves.
   */
  offset?: [string, string];
  /** Height of the SVG relative to the wrapper, e.g. "120%". Default "130%". */
  heightScale?: string;
  /** Extra classes on the positioning wrapper. */
  className?: string;
  /** SVG path `d` data to draw. Defaults to the built-in lime scribble. */
  path?: string;
  /** SVG `viewBox` framing the path. Defaults to the built-in scribble's box. */
  viewBox?: string;
  /**
   * Transform applied to a `<g>` wrapping the path — used to bake in the
   * `<g transform>` of an SVG authored in a nested / scaled coordinate space.
   * `svgLineFromFile` fills this in automatically.
   */
  transform?: string;
  /** Stroke color of the drawn line. Default lime `#C2F84F`. */
  stroke?: string;
  /** Stroke width in viewBox units. Default `30`. */
  strokeWidth?: number;
  /** Extra classes on the SVG itself, e.g. to change its width. */
  svgClassName?: string;
  /**
   * Fraction of the scroll window (0–1) at which drawing begins. Below this,
   * the line holds at `pathStart`. Raise it to delay the draw. Default `0.15`.
   */
  drawStart?: number;
  /**
   * Fraction of the scroll window (0–1) at which drawing completes. Above this,
   * the line holds fully drawn. Lower it to finish sooner. Default `0.65`.
   */
  drawEnd?: number;
  /**
   * How much of the line is already drawn at `drawStart` (0 = empty, 1 = full).
   * Default `0`.
   */
  pathStart?: number;
  /**
   * Reverse the end the line grows from. By default it draws from the path's
   * start; set `true` to draw from the path's end toward its start. Default
   * `false`.
   */
  reverse?: boolean;
  /**
   * Easing curve applied across the draw so it ramps in/out gently instead of
   * moving at a constant rate. Default `circInOut`. Pass `cubicBezier(...)`,
   * another motion easing, or the linear identity `(t) => t` to disable.
   */
  ease?: EasingFunction;
};

/**
 * A decorative lime scribble that draws itself as its section scrolls through
 * the viewport, driven by Framer Motion's `useScroll` progress. Render it as
 * the first child of a `relative` container; it lays itself out as a
 * non-interactive background layer sized to the wrapper.
 */
export const ScrollPath = ({
  offset = ["start center", "end center"],
  className,
  path,
  viewBox,
  transform,
  stroke,
  strokeWidth,
  svgClassName,
  drawStart,
  drawEnd,
  pathStart,
  reverse,
  ease,
}: ScrollPathProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  });

  // Promote the parent to a positioning context so this layer can absolutely
  // fill it as a background — keeps the component self-contained, no parent
  // markup required.
  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (parent && getComputedStyle(parent).position === "static") {
      parent.style.position = "relative";
    }
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 flex flex-col justify-center items-center overflow-visible",
        className,
      )}
    >
      <LinePath
        scrollYProgress={scrollYProgress}
        path={path}
        viewBox={viewBox}
        transform={transform}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={svgClassName}
        drawStart={drawStart}
        drawEnd={drawEnd}
        pathStart={pathStart}
        reverse={reverse}
        ease={ease}
      />
    </div>
  );
};
