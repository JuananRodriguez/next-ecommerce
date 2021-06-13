import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductCardStyled } from "./styles";
import { ProductReactions, Button } from "@components";
import { useCartMutations } from "storage/Cart";
import { IoBasketOutline } from "react-icons/io5";
import Link from "next/link";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { name, id, price, images } = product;
  const url = `/products/${id}`;
  const [firstImage] = images;

  const { addToCart } = useCartMutations();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <ProductCardStyled key={id}>
      <Link href={url} passHref>
        <a>
          <Image
            className="image"
            src={firstImage.src}
            width="600"
            height="600"
            alt={name}
            priority={true}
          />
        </a>
      </Link>
      <ProductReactions product={product} />
      <Link href={url} passHref>
        <a>
          <h3 className="name">
            <strong>{name}</strong>
          </h3>
        </a>
      </Link>
      <span className="price">{price} €</span>
      <Button className="add-to-cart" role="button" onClick={handleAddToCart}>
        <IoBasketOutline size="1.8rem" />
        <span className="label">Añadir a la cesta</span>
      </Button>
    </ProductCardStyled>
  );
};

export default ProductCard;
