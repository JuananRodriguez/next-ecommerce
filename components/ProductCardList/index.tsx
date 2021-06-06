import { ProductCard } from "@components";
import { Product } from "@domainTypes/Product";
import Products from "@database/products";
import { ProductCardListStyled } from "./styles";

const ProductCardList = () => {
  return (
    <ProductCardListStyled>
      {Products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductCardListStyled>
  );
};

export default ProductCardList;
