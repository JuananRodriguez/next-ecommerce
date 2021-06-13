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
  regular_price: number;
  sale_price: number;
  on_sale: boolean;
  sky: string;
  description: string;
  related_ids: Array<number>;

  //TODO: redefine
  categories: Array<Object>;
  images: Array<Image>;
  attributes: Array<Object>;
  variations: Array<Object>;
}
export type ProductList = Array<Product>;

export type ProductInCart = Product & { quantity: number };
export type ProductInCartList = Array<ProductInCart>;
