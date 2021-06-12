import { ProductCard } from "@components";
import { Product, ProductList } from "@domainTypes/Product";
import { ProductCardListStyled } from "./styles";

interface Props {
  products: ProductList;
}

const ProductCardList = (props: Props) => {
  const { products } = props;
  return (
    <ProductCardListStyled>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductCardListStyled>
  );
};

export default ProductCardList;
