import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductCardStyled } from "./styles";
import { ProductReactions } from "@components";
import { useCartMutations } from "storage/Cart";
import { IoBasketOutline } from "react-icons/io5";
import Link from "next/link";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { title, id, price, image } = product;

  const { addToCart } = useCartMutations();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const url = `/products/${id}`;

  return (
    <ProductCardStyled key={id}>
      <Link href={url} passHref>
        <a>
          <Image
            className="image"
            src={image}
            width="600"
            height="600"
            alt={title}
            priority={true}
          />
        </a>
      </Link>
      <ProductReactions product={product} />
      <Link href={url} passHref>
        <a>
          <h3 className="name">
            <strong>{title}</strong>
          </h3>
        </a>
      </Link>
      <span className="price">{price} €</span>
      <button className="add-to-cart" role="button" onClick={handleAddToCart}>
        <IoBasketOutline size="1.8rem" />{" "}
        <span className="label">Añadir a la cesta</span>
      </button>
    </ProductCardStyled>
  );
};

export default ProductCard;
