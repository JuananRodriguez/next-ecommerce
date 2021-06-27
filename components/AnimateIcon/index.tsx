import Lottie, { Options, LottieProps } from "react-lottie";
import TICK from "./lotties/tickMark.json";

type Animations = { [unit: string]: object };

interface Props {
  icon: keyof Animations;
  height?: number;
  width?: number;
}

const defaultOptions: Options = {
  loop: false,
  autoplay: true,
  animationData: "",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const animations: Animations = {
  tick: TICK,
};

export const AnimateIcon = ({ icon, height = 50, width = 50 }: Props) => {
  const mergedOptions = {
    ...defaultOptions,
    animationData: animations[icon],
  } as Options;

  return <Lottie options={mergedOptions} height={height} width={width} />;
};
