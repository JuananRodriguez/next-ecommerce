import { useAnimation } from "hooks/useAnimation";
import { AddedToCartLabelStyle } from "./styles";

export const AddedToCartLabel = () => {
  const [AnimationComponent] = useAnimation({
    path: "/lotties/tickMark.json",
    autoplay: true,
  });

  return (
    <AddedToCartLabelStyle>
      <AnimationComponent style={{ height: 28, width: 28 }} />
      <span className="label">Añadido al carrito</span>
    </AddedToCartLabelStyle>
  );
};
