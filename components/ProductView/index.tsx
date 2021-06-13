import Image from "next/image";
import { Product, ProductVariant } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";
import { Counter, Variantions } from "@components";
import { useState } from "react";

const ProductView = (Product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const [variantSelected, setVariantSelected] = useState<
    ProductVariant | undefined
  >(undefined);

  const { name, id, price_html, variations, images = [] } = Product;
  const [firstImage] = images;

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelectVariation = (productVariant: ProductVariant) => {
    setVariantSelected(productVariant);
  };

  return (
    <ProductViewStyled key={id}>
      {firstImage && (
        <Image
          className="image"
          layout="responsive"
          src={firstImage.src}
          width="300"
          height="300"
          alt={name}
          priority={true}
        />
      )}

      <section className="content">
        <h1 className="name">{name}</h1>

        <span
          className="price"
          dangerouslySetInnerHTML={{ __html: price_html }}
        />

        <Variantions
          variantSelected={variantSelected}
          variations={variations}
          onSelectVariation={handleSelectVariation}
        />

        <Counter
          className="counter"
          value={quantity}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
        />
      </section>
    </ProductViewStyled>
  );
};

export default ProductView;
