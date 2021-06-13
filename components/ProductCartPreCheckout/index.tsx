import { Button } from "@components";
import { ProductCartPreCheckoutStyle } from "./styles";

interface Props {
  subTotal?: number;
}

const ProductCartPreCheckout = (props: Props) => {
  const { subTotal = 0 } = props;

  if (subTotal > 0)
    return (
      <ProductCartPreCheckoutStyle>
        <div className="price-block">
          <p className="price-title">Importe total</p>
          <p className="price-amount">{subTotal} €</p>
        </div>
        <Button className="checkout-button">Tramitar pedido</Button>
      </ProductCartPreCheckoutStyle>
    );

  return null;
};

export default ProductCartPreCheckout;
