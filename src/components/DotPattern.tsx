"use client";
import styles from "./DotPattern.module.css";

interface DotPatternProps {
  className?: string;
  cx?: number;
  cy?: number;
  cr?: number;
}

export function DotPattern({
  className,
  cx = 1,
  cy = 1,
  cr = 1,
}: DotPatternProps) {
  return (
    <svg
      aria-hidden
      className={`${styles.svg} ${className || ""}`}
    >
      <defs>
        <pattern
          id="dot-pattern"
          x="0"
          y="0"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="dot"
            cx={cx}
            cy={cy}
            r={cr}
            fill="rgba(255,255,255,0.15)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
