import {
  Product,
  ProductVariant,
  VariantAttribute,
} from "@domainTypes/Product";

const setHtmlPrice = (price: string): string => {
  return `<span class="woocommerce-Price-amount amount">
      ${price}
      <span class="woocommerce-Price-currencySymbol">€</span>
    </span>`;
};

const attributesToName = (attributes: Array<VariantAttribute>): string => {
  return `${attributes[0].name} - ${attributes[0].option}`;
};

export const variantToProduct = (variant: ProductVariant): Product => {
  const {
    attributes,
    date_created,
    date_modified,
    dimensions,
    id,
    image: images,
    on_sale,
    price,
    regular_price,
    sku,
    sale_price,
    weight,
  } = variant;

  const transformedValues = {
    name: attributesToName(attributes),
    type: "simple" as "variable" | "simple",
    slug: "",
    price_html: setHtmlPrice(price),
    description: "",
    related_ids: [],
    variations: [],
    categories: [],
  };

  return {
    ...transformedValues,
    attributes,
    date_created,
    date_modified,
    dimensions,
    id,
    images,
    on_sale,
    price,
    regular_price,
    sale_price,
    weight,
    sku,
  };
};
