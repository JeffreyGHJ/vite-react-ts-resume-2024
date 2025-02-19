import { cn } from "@/lib/utils";
import { CSSProperties, useRef } from "react";

const GlowArea = ({ className, size = 300, children }: any) => {
  const element = useRef<HTMLDivElement | null>(null);

  // we useRef instead of useState because we dont want the updating of x/y to cause rerender
  // mouse will move often and that would be too many renders.
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const frameId = useRef<number | null>(null);

  const updateGlow = () => {
    if (mousePosition.current && element.current) {
      element.current.style.setProperty(
        "--glow-x",
        `${mousePosition.current.x}px`
      );
      element.current.style.setProperty(
        "--glow-y",
        `${mousePosition.current.y}px`
      );
      frameId.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // reference current bounds
    const bounds = e.currentTarget.getBoundingClientRect();
    const xOrigin = bounds.left;
    const yOrigin = bounds.top;

    // update new position based off bounds
    mousePosition.current = {
      x: e.clientX - xOrigin,
      y: e.clientY - yOrigin,
    };

    // update the glow at the same rate as screen refresh
    if (!frameId.current) {
      frameId.current = requestAnimationFrame(() => updateGlow());
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.removeProperty("--glow-x");
    e.currentTarget.style.removeProperty("--glow-y");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{ "--glow-size": `${size}px` } as CSSProperties}
      ref={element}
    >
      {children}
    </div>
  );
};

GlowArea.displayName = "GlowArea";
export default GlowArea;
