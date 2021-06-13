import { Product, ProductVariant } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";
import { Counter, Variantions, Carousel, FixedBottomPanel } from "@components";
import { useEffect, useState } from "react";
import { productToVariant } from "adapters/productToVariant.adapter";
import AddToCart from "./AddToCart";

const ProductView = (product: Product) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedQuatity, setQuantity] = useState(1);
  const [variantSelected, setVariantSelected] = useState<
    ProductVariant | undefined
  >(undefined);

  const { name, id, type, price_html, variations, images = [] } = product;

  useEffect(() => {
    if (type === "simple") {
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
    setQuantity(selectedQuatity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (selectedQuatity > 1) {
      setQuantity(selectedQuatity - 1);
    }
  };

  const handleSelectVariation = (productVariant: ProductVariant) => {
    setVariantSelected(productVariant);
  };

  return (
    <ProductViewStyled key={id}>
      <Carousel images={images} selectedImage={selectedImage} />

      <section className="content">
        <h1 className="name">{name}</h1>

        {/* {type === "variable" &&
          (variantSelected ? (
            <p>Modelo seleccionado: {variantSelected.attributes[0].option}</p>
          ) : (
            <p>Selecciona un modelo</p>
          ))} */}

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
          value={selectedQuatity}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
        />
      </section>

      {variantSelected && (
        <AddToCart
          variantSelected={variantSelected}
          selectedQuatity={selectedQuatity}
        />
      )}
    </ProductViewStyled>
  );
};

export default ProductView;
