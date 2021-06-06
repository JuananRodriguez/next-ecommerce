import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductCardStyled } from "./styles";
import { useCartMutations } from "storage/Cart";

const ProductCard = (Product: Product) => {
  const { name, id, sku, price, image } = Product;

  const { addToCart } = useCartMutations();

  const handleAddToCart = () => {
    addToCart(Product, 1);
  };

  return (
    <ProductCardStyled>
      <Image
        className="image"
        src={image}
        width="300"
        height="300"
        alt={name}
        priority={true}
      />
      <h3 className="name">{name}</h3>
      <span className="price">€ {price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </ProductCardStyled>
  );
};

export default ProductCard;
