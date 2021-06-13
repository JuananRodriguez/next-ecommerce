import { Product, ProductVariant } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";
import { Counter, Variantions, Carousel } from "@components";
import { useEffect, useState } from "react";
import { productToVariant } from "utils/productToVariant.adapter";

const ProductView = (product: Product) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variantSelected, setVariantSelected] = useState<
    ProductVariant | undefined
  >(undefined);

  const { name, id, type, price_html, variations, images = [] } = product;

  useEffect(() => {
    if (type === "simple") {
      console.log(product);

      setVariantSelected(productToVariant(product));
    }
  }, [product]);

  useEffect(() => {
    if (variantSelected) {
      const { image } = variantSelected;
      const [uniqueImg] = image;
      const indexImg = images.findIndex((img) => img.id === uniqueImg.id);
      if (indexImg !== -1) {
        setSelectedImage(indexImg);
      }
    }
  }, [variantSelected]);

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

  console.log(variantSelected);

  return (
    <ProductViewStyled key={id}>
      <Carousel images={images} selectedImage={selectedImage} />

      <section className="content">
        <h1 className="name">{name}</h1>

        {type === "variable" &&
          (variantSelected ? (
            <p>Modelo seleccionado: {variantSelected.attributes[0].option}</p>
          ) : (
            <p>Selecciona un modelo</p>
          ))}

        {variantSelected ? (
          <p className="price">{variantSelected.price} €</p>
        ) : (
          <p
            className="price"
            dangerouslySetInnerHTML={{ __html: price_html }}
          />
        )}

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
