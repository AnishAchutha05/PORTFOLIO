"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("custom-cursor");
    const outline = document.getElementById("cursor-outline");
    if (!dot || !outline) return;

    let outlineX = 0, outlineY = 0;
    let dotX = 0, dotY = 0;
    let mouse = { x: 0, y: 0 };

    const moveCursor = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    document.addEventListener("mousemove", moveCursor);

    let raf: number;
    const animate = () => {
      dotX += (mouse.x - dotX) * 0.9;
      dotY += (mouse.y - dotY) * 0.9;
      outlineX += (mouse.x - outlineX) * 0.15;
      outlineY += (mouse.y - outlineY) * 0.15;

      dot.style.left = dotX + "px";
      dot.style.top = dotY + "px";
      outline.style.left = outlineX + "px";
      outline.style.top = outlineY + "px";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const handleHover = () => {
      dot.style.width = "16px";
      dot.style.height = "16px";
      outline.style.width = "60px";
      outline.style.height = "60px";
      outline.style.borderColor = "rgba(167,139,250,0.7)";
    };
    const handleLeave = () => {
      dot.style.width = "8px";
      dot.style.height = "8px";
      outline.style.width = "36px";
      outline.style.height = "36px";
      outline.style.borderColor = "rgba(167,139,250,0.5)";
    };

    const interactables = document.querySelectorAll("a, button, [data-hover]");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" />
      <div id="cursor-outline" />
    </>
  );
}
