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
  id: string;
  name: string;
  slug: string;
  date_created: string;
  date_modified: string;
  type: "variable" | "simple";
  price: number;
  price_html: string;
  regular_price: number;
  sale_price: number;
  on_sale: boolean;
  sky: string;
  description: string;
  related_ids: Array<number>;
  variations: ProductVariations;
  images: Array<Image>;

  //TODO: redefine
  categories: Array<Object>;
  attributes: Array<Object>;
}
export type ProductList = Array<Product>;

export type ProductInCart = Product & { quantity: number };
export type ProductInCartList = Array<ProductInCart>;

export type VariantAttribute = { id: number; name: string; option: string };

export interface ProductVariant {
  attributes: Array<VariantAttribute>;
  backordered: boolean;
  backorders: "no";
  backorders_allowed: boolean;
  date_created: string;
  date_modified: string;
  date_on_sale_from: string;
  date_on_sale_to: string;
  dimensions: { length: string; width: string; height: string };
  download_expiry: number;
  download_limit: number;
  downloadable: boolean;
  downloads: Array<any>;
  id: number;
  image: Array<Image>;
  in_stock: boolean;
  manage_stock: boolean;
  on_sale: boolean;
  permalink: string;
  price: string;
  purchasable: boolean;
  regular_price: string;
  sale_price: string;
  shipping_class: string;
  shipping_class_id: number;
  sku: string;
  stock_quantity: number | null;
  tax_class: string;
  tax_status: "taxable";
  virtual: boolean;
  visible: boolean;
  weight: string;
}

export type ProductVariations = Array<ProductVariant>;
