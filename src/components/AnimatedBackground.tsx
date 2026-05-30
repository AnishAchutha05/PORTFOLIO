"use client";
import { useEffect, useRef } from "react";

interface InkOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  phase: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let W = 0, H = 0;
    const orbs: InkOrb[] = [];
    // Hanada/Ai/Nami blues — Japanese ink palette
    const hues = [208, 218, 200, 213, 225, 205];
    const COUNT = 6;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      orbs.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 400 + 250,
        hue: hues[i],
        phase: Math.random() * Math.PI * 2,
      });
    }

    let t = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      t += 0.004;

      for (const o of orbs) {
        // Slow sine drift for organic ink-wash movement
        o.x += o.vx + Math.sin(t + o.phase) * 0.06;
        o.y += o.vy + Math.cos(t + o.phase * 0.7) * 0.06;

        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0,   `hsla(${o.hue}, 68%, 38%, 0.06)`);
        grad.addColorStop(0.4, `hsla(${o.hue}, 62%, 28%, 0.025)`);
        grad.addColorStop(1,   `hsla(${o.hue}, 55%, 18%, 0)`);

        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
