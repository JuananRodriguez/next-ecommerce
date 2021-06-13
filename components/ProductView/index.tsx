import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";
import { Counter, Variantions } from "@components";
import { useState } from "react";

const ProductView = (Product: Product) => {
  const [quantity, setQuantity] = useState(0);
  const { name, id, price_html, variations, images = [], ...rest } = Product;
  const [firstImage] = images;

  // console.log(rest);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

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

      <span
        className="price"
        dangerouslySetInnerHTML={{ __html: price_html }}
      />

      <Variantions variations={variations} />

      <Counter
        value={quantity}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
      />
    </ProductViewStyled>
  );
};

export default ProductView;
