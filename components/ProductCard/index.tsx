import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductCardStyled } from "./styles";

const ProductCard = ({ name, id, sku, price, image }: Product) => {
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
