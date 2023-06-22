import { useState, useEffect } from "react";

const useScroll = (): number => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = (): void => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScroll;
