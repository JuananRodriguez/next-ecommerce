import { Button } from "@components";
import { ProductCartPreCheckoutStyle } from "./styles";

interface Props {
  subTotal?: number;
}

const ProductCartPreCheckout = (props: Props) => {
  const { subTotal = 0 } = props;

  return (
    <ProductCartPreCheckoutStyle>
      <div className="price-block">
        <p className="price-title">Importe total</p>
        <p className="price-amount">{subTotal} €</p>
      </div>
      <Button className="checkout-button">Tramitar pedido</Button>
    </ProductCartPreCheckoutStyle>
  );
};

export default ProductCartPreCheckout;
