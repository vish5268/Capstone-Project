/* NOTE: We are not using this custom hook since it generates an unwanted reference error. */

import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }

  const cleanUp = () => {
    ref.current.removeEventListener("mouseenter", enter);
    ref.current.removeEventListener("mouseleave", leave);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return { cleanUp };
  }, []);

  return [hovered, ref];
};

export default useHover;
