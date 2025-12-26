import { useState, useEffect } from "react";

const WindowWidthTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
};

export default WindowWidthTracker;
