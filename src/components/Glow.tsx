import useDarkMode from "@/lib/hooks/useDarkMode";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const lightModeGradientColor = "oklch(0% 0 0 / 60%)";
const darkModeGradientColor = "oklch(100% 0 0 / 30.2%)";
const transparent = "rgba(0, 0, 0, 0.6)";

const Glow = ({
  color = lightModeGradientColor,
  className,
  children,
  disabled = false,
  recalculateBounds = false,
  ...rest
}: any) => {
  const isDark = useDarkMode();
  const [gradientColor, setGradientColor] = useState(color);
  const element = useRef<HTMLDivElement | null>(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (disabled) return setGradientColor(transparent);

    return isDark
      ? setGradientColor(darkModeGradientColor)
      : setGradientColor(lightModeGradientColor);
  }, [isDark, disabled]);

  // update offsets if window width changes
  useEffect(() => {
    element.current?.style.setProperty(
      "--glow-top",
      `${element.current?.offsetTop}px`
    );
    element.current?.style.setProperty(
      "--glow-left",
      `${element.current?.offsetLeft}px`
    );
  }, [windowWidth]);

  useEffect(() => {
    setTimeout(() => {
      console.log("updating...");
      element.current?.style.setProperty(
        "--glow-top",
        `${element.current?.offsetTop}px`
      );
      element.current?.style.setProperty(
        "--glow-left",
        `${element.current?.offsetLeft}px`
      );
    }, 650);
  }, [recalculateBounds]);

  return (
    <div ref={element} className={cn("relative", className)}>
      <div
        {...rest}
        style={{
          backgroundImage: `radial-gradient(
                var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
                calc(var(--glow-y, -99999px) - var(--glow-top, 0px)),
                ${gradientColor} 0%,
                transparent 100%
            )`,
        }}
        className={cn(
          "absolute inset-0 pointer-events-none after:content-[''] dark:mix-blend-lighten mix-blend-multiply after:absolute after:bg-background/80 after:inset-[0.25px] after:rounded-[inherit]",
          className
        )}
      ></div>
      {children}
    </div>
  );
};

Glow.displayName = "Glow";
export default Glow;
