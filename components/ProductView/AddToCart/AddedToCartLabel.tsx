import { AnimateIcon } from "components/AnimateIcon";
import { AddedToCartLabelStyle } from "./styles";

export const AddedToCartLabel = () => {
  return (
    <AddedToCartLabelStyle>
      <AnimateIcon icon="tick" height={28} width={28} />
      <span className="label">Añadido al carrito</span>
    </AddedToCartLabelStyle>
  );
};
