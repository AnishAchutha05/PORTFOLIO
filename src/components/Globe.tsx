"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import styles from "./Globe.module.css";

interface GlobeProps {
  className?: string;
}

export default function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 0;
    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = width * window.devicePixelRatio;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.18, 0.14, 0.35],
      markerColor: [0.6, 0.3, 1.0],
      glowColor: [0.5, 0.3, 0.9],
      markers: [
        // Bangalore, India
        { location: [12.9716, 77.5946], size: 0.08 },
        // San Francisco
        { location: [37.7749, -122.4194], size: 0.05 },
        // London
        { location: [51.5074, -0.1278], size: 0.05 },
        // Tokyo
        { location: [35.6762, 139.6503], size: 0.05 },
        // New York
        { location: [40.7128, -74.0060], size: 0.05 },
        // Singapore
        { location: [1.3521, 103.8198], size: 0.06 },
      ],
      onRender: (state) => {
        state.phi = phiRef.current;
        phiRef.current += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`${styles.wrap} ${className || ""}`}>
      <canvas ref={canvasRef} className={styles.canvas} />
      {/* Bangalore marker label */}
      <div className={styles.label}>
        <span className={styles.labelDot} />
        Bangalore, India
      </div>
    </div>
  );
}
