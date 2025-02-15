"useAppStores client";

import {useEffect, useState} from "react";

function useWindowSize(isMobile = true) {
  const [screenSize, setScreenSize] = useState({width: 0, height: 0});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(isMobile);
  useEffect(() => {
    function updateSize() {
      setScreenSize({width: window.innerWidth, height: window.innerHeight});
      setIsSmallScreen(window.innerWidth < 768);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return {size: screenSize, isSmallScreen};
}

export default useWindowSize;
