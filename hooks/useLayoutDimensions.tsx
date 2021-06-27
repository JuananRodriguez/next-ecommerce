import { useRef, useState } from "react";
import { useEffect } from "react";

export const MAX_MOBILE = 480;
export const MAX_LITTLE_TABLET = 768;
export const MAX_TABLET = 1023;

type ObjectReturned = {
  viewportWidth: Number;
  isMobile: Boolean;
  isLittleTablet: Boolean;
  isTablet: Boolean;
  isDesktop: Boolean;
};

export const useLayoutDimensions = (): ObjectReturned => {
  const [viewportWidth, setViewportWidth] = useState<Number>(0);
  const waitFor = useRef<ReturnType<typeof setTimeout>>();

  const getViewPortSize = () => {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
  };

  const updateViewWidth = () => {
    setViewportWidth(getViewPortSize());
  };

  const waitUntilTheResizingIsFinished = () => {
    waitFor.current && clearTimeout(waitFor.current);
    waitFor.current = setTimeout(updateViewWidth, 200);
  };

  useEffect(() => {
    window.addEventListener("resize", waitUntilTheResizingIsFinished);
    updateViewWidth();
    () => window.removeEventListener("resize", waitUntilTheResizingIsFinished);
  }, []);

  return {
    viewportWidth,
    isMobile: viewportWidth < MAX_MOBILE,
    isLittleTablet: viewportWidth < MAX_LITTLE_TABLET,
    isTablet: viewportWidth >= MAX_LITTLE_TABLET && viewportWidth < MAX_TABLET,
    isDesktop: viewportWidth >= MAX_TABLET,
  };
};
