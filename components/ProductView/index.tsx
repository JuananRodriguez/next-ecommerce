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
import { useLayoutDimensions } from "hooks/useLayoutDimensions";
import { useLoadingPageRouter } from "hooks/useLoadingPageRouter";
import ContentLoader from "react-content-loader";

const ProductView = (product: Product) => {
  const [pageIsLoading] = useLoadingPageRouter();
  const { isDesktop, isMobile, isTablet, isLittleTablet } =
    useLayoutDimensions();

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

  return pageIsLoading ? (
    <ContentLoader
      viewBox="0 0 800 400"
      height="100%"
      width="1400"
      style={{ margin: "0 auto", position: "absolute", left: 0, right: 0 }}
    >
      <circle cx="472" cy="159" r="7" />
      <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
      <circle cx="472" cy="190" r="7" />
      <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
      <circle cx="472" cy="219" r="7" />
      <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
      <circle cx="472" cy="249" r="7" />
      <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
      <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
      <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
      <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
      <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
      <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
      <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
      <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
      <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
      <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
      <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
      <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
      <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
      <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
      <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
      <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
      <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
      <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
      <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
      <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
    </ContentLoader>
  ) : (
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

          {(isDesktop || isTablet) && (
            <AddToCart
              variantSelected={variantSelected}
              selectedQuatity={selectedQuatity}
            />
          )}
        </section>

        <section className="specifications">
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </section>
      </ProductViewStyled>

      {(isMobile || isLittleTablet) && (
        <FixedBottomPanel>
          <AddToCart
            variantSelected={variantSelected}
            selectedQuatity={selectedQuatity}
          />
        </FixedBottomPanel>
      )}
    </>
  );
};

export default ProductView;
