export interface Image {
  id: number;
  date_created: string;
  date_modified: string;
  src: string;
  name?: string;
  alt?: string;
  position: number;
}

export type ProductList = Array<Product>;

export type ProductInCart = Product & { quantity: number };
export type ProductInCartList = Array<ProductInCart>;
export type VariantAttribute = { id: number; name: string; option: string };

export interface ProductBase {
  attributes: Array<VariantAttribute>;
  id: number;
  date_created: string;
  date_modified: string;
  dimensions: { length: string; width: string; height: string };
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  sku: string;
  weight: string;
}

export type Product = ProductBase & {
  name: string;
  images: Array<Image>;
  type: "variable" | "simple";
  slug: string;
  price_html: string;
  description: string;
  related_ids: Array<number>;
  variations: ProductVariations;
  //TODO: redefine
  categories: Array<Object>;
};

export type ProductVariant = ProductBase & {
  image: Array<Image>;
};

export type ProductVariations = Array<ProductVariant>;
