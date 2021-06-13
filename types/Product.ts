export interface Image {
  id: number;
  date_created: string;
  date_modified: string;
  src: string;
  name?: string;
  alt?: string;
  position: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  date_created: string;
  date_modified: string;
  dimensions: { length: string; width: string; height: string };
  type: "variable" | "simple";
  price: string;
  price_html: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  sku: string;
  description: string;
  related_ids: Array<number>;
  variations: ProductVariations;
  images: Array<Image>;
  weight: string;
  attributes: Array<VariantAttribute>;

  //TODO: redefine
  categories: Array<Object>;
}
export type ProductList = Array<Product>;

export type ProductInCart = Product & { quantity: number };
export type ProductInCartList = Array<ProductInCart>;

export type VariantAttribute = { id: number; name: string; option: string };

export interface ProductVariant {
  attributes: Array<VariantAttribute>;
  date_created: string;
  date_modified: string;
  dimensions: { length: string; width: string; height: string };
  id: number;
  image: Array<Image>;
  on_sale: boolean;
  price: string;
  regular_price: string;
  sale_price: string;
  sku: string;
  weight: string;
}

export type ProductVariations = Array<ProductVariant>;
