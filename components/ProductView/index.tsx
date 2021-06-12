import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";

const ProductView = (Product: Product) => {
  const { title, id, price, image } = Product;

  return (
    <ProductViewStyled key={id}>
      {image && (
        <Image
          className="image"
          src={image}
          width="300"
          height="300"
          alt={title}
          priority={true}
        />
      )}
      <h3 className="name">{title}</h3>
      <span className="price">€ {price}</span>
    </ProductViewStyled>
  );
};

export default ProductView;
