import { Button } from "@components";
import { ProductVariant } from "@domainTypes/Product";
import { useCartMutations } from "@storage/Cart";
import { variantToProduct } from "adapters/variantToProduct.adapter";
import { AddToCartStyles } from "./styles";
import cls from "classnames";

type Props = {
  className?: string;
  variantSelected?: ProductVariant;
  selectedQuatity: number;
};

const multiplyPrice = (quantity: number, price: string): string => {
  const result = quantity * parseFloat(price);
  return result.toFixed(2);
};

const AddToCart = ({ variantSelected, selectedQuatity, className }: Props) => {
  const { addToCart } = useCartMutations();

  const handleAddToCart = () => {
    variantSelected &&
      addToCart(variantToProduct(variantSelected), selectedQuatity);
  };

  return (
    <AddToCartStyles className={cls("add-to-cart", className)}>
      {variantSelected && (
        <div className="price-block">
          <p>
            {variantSelected.attributes[0].name} -{" "}
            {variantSelected.attributes[0].option}
          </p>
          <p>{multiplyPrice(selectedQuatity, variantSelected.price)} €</p>
        </div>
      )}

      <Button
        className="cart-button"
        onClick={handleAddToCart}
        disabled={Boolean(!variantSelected)}
      >
        {variantSelected ? "Añadir al carrito" : "Seleccina un modelo"}
      </Button>
    </AddToCartStyles>
  );
};

export default AddToCart;
