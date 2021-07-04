import { useEffect, useRef, FunctionComponent, DetailedHTMLProps } from "react";
import lottie, { AnimationItem, AnimationConfigWithPath } from "lottie-web";
import { useCallback } from "react";
import { useState } from "react";

interface LottieProps extends Omit<AnimationConfigWithPath, "container"> {
  speed?: number;
}

type ComponentProps = {};

type AnimationComponent = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type LottieAnimation = AnimationItem | null;

export const useAnimation = (
  lottieProps: LottieProps
): [FunctionComponent<AnimationComponent>, LottieAnimation] => {
  const {
    speed = 1,
    renderer = "svg",
    loop = false,
    autoplay = true,
    ...rest
  } = lottieProps;

  const [lottieAnimation, setLottieAnimation] = useState<LottieAnimation>(null);

  const refContainer = useRef<HTMLDivElement | null>(null);
  const refAnimation = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (refContainer?.current) {
      const animationItem = lottie.loadAnimation({
        container: refContainer.current,
        renderer,
        loop,
        autoplay,
        ...rest,
      });
      animationItem.setSpeed(speed);
      setLottieAnimation(animationItem);
    }
    return () => refAnimation.current?.destroy();
  }, []);

  const AnimationComponent = useCallback(
    (componentProps: ComponentProps) => {
      return <div {...componentProps} ref={refContainer} />;
    },
    [refContainer]
  );

  return [AnimationComponent, lottieAnimation];
};
