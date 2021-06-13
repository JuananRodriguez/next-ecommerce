import {
  Product,
  ProductVariant,
  VariantAttribute,
} from "@domainTypes/Product";

const nameToAttributes = (name: string): Array<VariantAttribute> => {
  return [
    {
      id: -1,
      name,
      option: "",
    },
  ];
};

export const productToVariant = (product: Product): ProductVariant => {
  const {
    name,
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
    attributes: Boolean(attributes.length)
      ? attributes
      : nameToAttributes(name),
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
