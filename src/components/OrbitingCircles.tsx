"use client";
import { cn } from "@/lib/utils";
import React from "react";
import styles from "./OrbitingCircles.module.css";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 36,
}: OrbitingCirclesProps) {
  const items = React.Children.toArray(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={styles.pathSvg}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <circle
            className={styles.pathCircle}
            cx="50%"
            cy="50%"
            r={radius}
          />
        </svg>
      )}
      {items.map((child, index) => {
        const angle = (360 / items.length) * index;
        const delayTotal = (delay / items.length) * index;

        return (
          <div
            key={index}
            className={cn(
              styles.orbit,
              reverse ? styles.reverse : "",
              className
            )}
            style={
              {
                "--duration": duration,
                "--delay": -delayTotal,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
