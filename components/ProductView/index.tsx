import { Product, ProductVariant } from "@domainTypes/Product";
import { ProductViewStyled } from "./styles";
import {
  Counter,
  Variantions,
  Carousel,
  FixedBottomPanel,
  ProductReactions,
} from "@components";
import { useEffect, useState } from "react";
import { productToVariant } from "adapters/productToVariant.adapter";
import AddToCart from "./AddToCart";

const ProductView = (product: Product) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedQuatity, setQuantity] = useState(1);
  const [variantSelected, setVariantSelected] = useState<
    ProductVariant | undefined
  >(undefined);

  const {
    name,
    id,
    type,
    price_html,
    variations,
    images = [],
    short_description,
    description,
  } = product;

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
    <>
      <ProductViewStyled key={id}>
        <h1 className="name">{name}</h1>

        <section className="images">
          <Carousel images={images} selectedImage={selectedImage} size="600" />
        </section>

        <section className="content">
          <ProductReactions product={product} />

          {variantSelected ? (
            <p className="price">{variantSelected.price} €</p>
          ) : (
            <p
              className="price"
              dangerouslySetInnerHTML={{ __html: price_html }}
            />
          )}

          {type === "variable" &&
            (variantSelected ? (
              <p>Modelo seleccionado: {variantSelected.attributes[0].option}</p>
            ) : (
              <p>Selecciona un modelo</p>
            ))}

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

          <div
            className="short-description"
            dangerouslySetInnerHTML={{ __html: short_description }}
          />

          <AddToCart
            variantSelected={variantSelected}
            selectedQuatity={selectedQuatity}
          />
        </section>

        <section className="specifications">
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </section>
      </ProductViewStyled>

      <FixedBottomPanel>
        <AddToCart
          variantSelected={variantSelected}
          selectedQuatity={selectedQuatity}
        />
      </FixedBottomPanel>
    </>
  );
};

export default ProductView;
