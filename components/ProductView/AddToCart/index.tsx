import { Button } from "@components";
import { ProductVariant } from "@domainTypes/Product";
import { useCartMutations } from "@storage/Cart";
import { variantToProduct } from "adapters/variantToProduct.adapter";
import { AddToCartStyles } from "./styles";
import cls from "classnames";
import { useState } from "react";
import { useEffect } from "react";

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
  const [isRecentAdded, setIsRecentAdded] = useState<Boolean>(false);

  useEffect(() => {
    isRecentAdded &&
      setTimeout(() => {
        setIsRecentAdded(false);
      }, 2500);
  }, [isRecentAdded]);

  const handleAddToCart = () => {
    variantSelected &&
      addToCart(variantToProduct(variantSelected), selectedQuatity);
    setIsRecentAdded(true);
  };

  const renderContentButton = () => {
    if (isRecentAdded) {
      return "Añadido al carrito";
    }

    if (variantSelected) {
      return "Añadir al carrito";
    }

    return "Seleccina un modelo";
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
        {renderContentButton()}
      </Button>
    </AddToCartStyles>
  );
};

export default AddToCart;
