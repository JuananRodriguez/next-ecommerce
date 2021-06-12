import { ProductCartItem } from "@components";
import { ProductInCart, ProductInCartList } from "@domainTypes/Product";
import { ProductCartListStyled } from "./styles";

type Props = {
  products: ProductInCartList;
};

const ProductCartList = (props: Props) => {
  const { products } = props;
  return (
    <ProductCartListStyled>
      {products.map((product: ProductInCart) => (
        <ProductCartItem key={product.id} product={product} />
      ))}
    </ProductCartListStyled>
  );
};

export default ProductCartList;
