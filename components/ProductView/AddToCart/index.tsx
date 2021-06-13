import { FixedBottomPanel, Button } from "@components";
import { ProductVariant } from "@domainTypes/Product";
import { useCartMutations } from "@storage/Cart";
import { variantToProduct } from "utils/variantToProduct.adapter";
import { AddToCartStyles } from "./styles";

type Props = {
  variantSelected: ProductVariant;
  selectedQuatity: number;
};

const multiplyPrice = (quantity: number, price: string): string => {
  const result = quantity * parseFloat(price);
  return result.toFixed(2);
};

const AddToCart = ({ variantSelected, selectedQuatity }: Props) => {
  const { addToCart } = useCartMutations();

  const handleAddToCart = () => {
    addToCart(variantToProduct(variantSelected), selectedQuatity);
  };

  return (
    <FixedBottomPanel>
      <AddToCartStyles>
        <div className="price-block">
          <p>
            {variantSelected.attributes[0].name} -{" "}
            {variantSelected.attributes[0].option}
          </p>
          <p>{multiplyPrice(selectedQuatity, variantSelected.price)}</p>
        </div>
        <Button className="cart-button" onClick={handleAddToCart}>
          Añadir al carrito
        </Button>
      </AddToCartStyles>
    </FixedBottomPanel>
  );
};

export default AddToCart;
