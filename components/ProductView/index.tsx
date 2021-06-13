import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";

const ProductView = (Product: Product) => {
  const { name, id, price, images } = Product;
  const [firstImage] = images;

  return (
    <ProductViewStyled key={id}>
      {firstImage && (
        <Image
          className="image"
          src={firstImage.src}
          width="300"
          height="300"
          alt={name}
          priority={true}
        />
      )}
      <h3 className="name">{name}</h3>
      <span className="price">€ {price}</span>
    </ProductViewStyled>
  );
};

export default ProductView;
