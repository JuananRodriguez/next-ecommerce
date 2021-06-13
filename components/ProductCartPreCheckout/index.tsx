import { Button } from "@components";
import { ProductCartPreCheckoutStyle } from "./styles";
import { FixedBottomPanel } from "@components";

interface Props {
  subTotal?: number;
}

const ProductCartPreCheckout = (props: Props) => {
  const { subTotal = 0 } = props;

  if (subTotal > 0)
    return (
      <FixedBottomPanel>
        <ProductCartPreCheckoutStyle>
          <div className="price-block">
            <p className="price-title">Importe total</p>
            <p className="price-amount">{subTotal.toFixed(2)} €</p>
          </div>
          <Button className="checkout-button">Tramitar pedido</Button>
        </ProductCartPreCheckoutStyle>
      </FixedBottomPanel>
    );

  return null;
};

export default ProductCartPreCheckout;
