import useDarkMode from "@/lib/hooks/useDarkMode";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const lightModeGradientColor = "rgba(255, 255, 255, 0.3)";
const darkModeGradientColor = "rgba(0, 0, 0, 0.6)";

const Glow = ({
  color = lightModeGradientColor,
  className,
  children,
  ...rest
}: any) => {
  const isDark = useDarkMode();
  const [gradientColor, setGradientColor] = useState(color);
  const element = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // listen for window resize, update element offsets whenever window size changes
  useEffect(() => {
    // Define the handler function for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    return isDark
      ? setGradientColor(darkModeGradientColor)
      : setGradientColor(lightModeGradientColor);
  }, [isDark]);

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
