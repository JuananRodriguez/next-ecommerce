import Products from "@database/products";
import Image from "next/image";
import { ProductCardStyled } from "./styles";

const ProductCard = () => {
  const { name, id, sku, price, image } = Products[0];
  return (
    <ProductCardStyled>
      <Image
        className="image"
        src={image}
        width="300"
        height="300"
        alt={name}
        priority={true}
      />
      <h3 className="name">{name}</h3>
      <span className="price">€ {price}</span>
    </ProductCardStyled>
  );
};

export default ProductCard;
