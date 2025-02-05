import ParticleOptionsDark from "@/lib/constants/ParticleOptionsDark";
import ParticleOptionsLight from "@/lib/constants/ParticleOptionsLight";
import { loadAll } from "@tsparticles/all";
import { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";

const ParticleCanvas = () => {
  const [init, setInit] = useState(false);
  const [particleOptions, setParticleOptions] = useState(ParticleOptionsDark);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      // Check if 'dark' class is present on document.documentElement
      const darkModeActive =
        document.documentElement.classList.contains("dark");
      setIsDarkMode(darkModeActive);
    };

    // Initial check
    checkDarkMode();

    // Set up a MutationObserver to watch for class changes (optional)
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log(isDarkMode);

    if (isDarkMode) {
      setParticleOptions(ParticleOptionsDark);
    } else {
      setParticleOptions(ParticleOptionsLight);
    }
  }, [isDarkMode]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <>
      {init === true && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
          className="absolute w-full h-full"
        />
      )}
    </>
  );
};

export default ParticleCanvas;
