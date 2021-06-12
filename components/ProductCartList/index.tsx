import { ProductCartItem, EmptyCartMessage } from "@components";
import { ProductInCart, ProductInCartList } from "@domainTypes/Product";
import { ProductCartListStyled } from "./styles";

type Props = {
  products: ProductInCartList;
};

const ProductCartList = (props: Props) => {
  const { products } = props;

  return products.length ? (
    <ProductCartListStyled>
      {products.map((product: ProductInCart) => (
        <ProductCartItem key={product.id} product={product} />
      ))}
    </ProductCartListStyled>
  ) : (
    <EmptyCartMessage />
  );
};

export default ProductCartList;
