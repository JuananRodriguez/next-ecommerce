export type Product = {
  title: string;
  id: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export type ProductList = Array<Product>;
