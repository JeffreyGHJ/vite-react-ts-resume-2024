import { motion as m } from "motion/react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import useDarkMode from "@/lib/hooks/useDarkMode";

const sunSvgPath =
  "M12 16.28C14.3637 16.28 16.28 14.3637 16.28 12C16.28 9.63619 14.3637 7.71997 12 7.71997C9.63619 7.71997 7.71997 9.63619 7.71997 12C7.71997 14.3637 9.63619 16.28 12 16.28Z";
const moonSvgPath =
  "M12 16.28C14.3637 16.28 16.28 14.3637 16.28 12C13 15 9 11 12 7.71997C9.63619 7.71997 7.71997 9.63619 7.71997 12C7.71997 14.3637 9.63619 16.28 12 16.28Z";

const rayGroupVariant = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    // Start from center of the circle
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1.5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      // Customize timing for each property
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  },
};

const MotionThemeSwitcher = () => {
  // const [themeIcon, setThemeIcon] = useState(<SunIcon />);
  const isDark = useDarkMode();

  // const updateThemeIcon = () => {
  //   /* check localstorage BEFORE trying matchMedia */
  //   if (localStorage.theme === "dark")
  //     setThemeIcon(<MoonIcon width={28} height={28} />);
  //   else if (localStorage.theme === "light")
  //     setThemeIcon(<SunIcon width={28} height={28} />);
  //   else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
  //     setThemeIcon(<MoonIcon width={28} height={28} />);
  //   else if (window.matchMedia("(prefers-color-scheme: light)").matches)
  //     setThemeIcon(<SunIcon width={28} height={28} />);
  //   else setThemeIcon(<SunIcon width={28} height={28} />);
  // };

  // useEffect(() => {
  //   updateThemeIcon();
  // }, [isDark]);

  const setLightTheme = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  };

  const setDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  };

  const setDefaultTheme = () => {
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <div className="fixed right-4 top-4 z-999999">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="bg-transparent">
          <Button
            variant="ghost"
            size="icon"
            className="p-1 border shadow-md bg-background border-secondary"
            asChild
          >
            <m.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"relative "}
            >
              <m.path
                id="main-path"
                initial={{
                  fillOpacity: 0,
                  strokeOpacity: 0,
                  originX: "center",
                  originY: "center",
                }}
                animate={
                  isDark
                    ? {
                        stroke: "#2d59be",
                        fill: "#2d59be",
                        fillOpacity: 0.35,
                        strokeOpacity: 1,
                        scale: 2,
                        rotate: 360,
                        d: moonSvgPath,
                      }
                    : {
                        stroke: "#cfad3b",
                        fill: "#cfad3b",
                        fillOpacity: 0.35,
                        strokeOpacity: 1,
                        rotate: 0,
                        scale: 1.1,
                        d: sunSvgPath,
                      }
                }
                d={sunSvgPath}
              />
              <m.path
                style={{ strokeLinecap: "round" }}
                initial={{
                  pathLength: 1,
                  opacity: 0,
                  scale: 2,
                  stroke: "#2d59be",
                }}
                animate={
                  isDark
                    ? { pathLength: 1, opacity: [0, 1, 0] }
                    : { pathLength: [1, 0], opacity: 0 }
                }
                transition={{
                  pathLength: {
                    delay: isDark ? 0.1 : 0,
                    duration: isDark ? 0.5 : 0,
                    ease: "easeInOut",
                  },
                  opacity: {
                    delay: 0,
                    duration: 1,
                    ease: "easeOut",
                  }, // Fades out after the drawing finishes
                }}
                d={moonSvgPath}
                className={"stroke-[1.6px]"}
              />
              <m.g
                variants={rayGroupVariant}
                initial="hidden"
                animate={isDark ? "hidden" : "visible"}
                className="stroke-yellow-500"
                style={{ strokeLinecap: "round" }}
              >
                <m.path
                  animate={{ rotate: 180 }}
                  variants={rayVariant}
                  d="M12 1.30005V3.44005"
                />
                <m.path
                  animate={{ rotate: 180 }}
                  variants={rayVariant}
                  d="M19.5649 4.43506L18.0562 5.94376"
                />
                <m.path variants={rayVariant} d="M20.56 12H22.7" />
                <m.path
                  variants={rayVariant}
                  d="M18.0562 18.0562L19.5649 19.5649"
                />
                <m.path variants={rayVariant} d="M12 20.5601V22.7001" />

                <m.path
                  variants={rayVariant}
                  d="M5.94382 18.0562L4.43512 19.5649"
                />
                <m.path
                  animate={{ rotate: 180 }}
                  variants={rayVariant}
                  d="M1.29999 12H3.43999"
                />
                <m.path
                  animate={{ rotate: 180 }}
                  variants={rayVariant}
                  d="M4.43512 4.43506L5.94382 5.94376"
                />
              </m.g>
            </m.svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative mr-4 z-999999">
          <DropdownMenuLabel>Themes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="transition-colors duration-300 cursor-pointer gap-x-2 hover:bg-accent"
            onClick={() => setLightTheme()}
          >
            <SunIcon />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="transition-colors duration-300 cursor-pointer gap-x-2 hover:bg-accent"
            onClick={() => setDarkTheme()}
          >
            <MoonIcon />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="transition-colors duration-300 cursor-pointer gap-x-2 hover:bg-accent"
            onClick={() => setDefaultTheme()}
          >
            <DesktopIcon />
            System Default
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MotionThemeSwitcher;
