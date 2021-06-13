import { Product, ProductVariant } from "@domainTypes/Product";

export const productToVariant = (product: Product): ProductVariant => {
  const {
    attributes,
    date_created,
    date_modified,
    dimensions,
    id,
    images: image,
    on_sale,
    price,
    regular_price,
    sku,
    sale_price,
    weight,
  } = product;

  return {
    attributes,
    date_created,
    date_modified,
    dimensions,
    id,
    image,
    on_sale,
    price,
    regular_price,
    sale_price,
    weight,
    sku,
  };
};
