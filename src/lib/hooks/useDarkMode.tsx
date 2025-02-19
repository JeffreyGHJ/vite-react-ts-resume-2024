import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Define the mutation observer callback function
    const observerCallback = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDarkMode =
            document.documentElement.classList.contains("dark");
          setIsDark(isDarkMode);
        }
      }
    };

    // Create the observer
    const observer = new MutationObserver(observerCallback);

    // Start observing the 'class' attribute of the <html> element
    observer.observe(document.documentElement, {
      attributes: true, // Listen for changes in attributes
    });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
};

export default useDarkMode;
