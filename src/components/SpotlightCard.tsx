"use client";
import { useRef, useEffect } from "react";
import styles from "./SpotlightCard.module.css";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(124,58,237,0.12)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const onMove = (e: MouseEvent) => {
      const rect = div.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      div.style.setProperty("--x", `${x}px`);
      div.style.setProperty("--y", `${y}px`);
    };

    div.addEventListener("mousemove", onMove);
    return () => div.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={divRef}
      className={`${styles.card} ${className}`}
      style={{ "--spotlight-color": spotlightColor } as React.CSSProperties}
    >
      <div className={styles.spotlight} />
      {children}
    </div>
  );
}
