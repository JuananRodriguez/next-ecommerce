import Image from "next/image";
import { Product } from "@domainTypes/Product";
import { ProductCardStyled } from "./styles";
import { ProductReactions, Button, Carousel } from "@components";
import { useCartMutations } from "storage/Cart";
import { IoBasketOutline } from "react-icons/io5";
import Link from "next/link";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { name, id, slug, price_html, images } = product;
  const url = `/products/${slug}`;

  const { addToCart } = useCartMutations();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <ProductCardStyled key={id}>
      <Link href={url} passHref>
        <a>
          <Carousel images={images} />
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
      <span
        className="price"
        dangerouslySetInnerHTML={{ __html: price_html }}
      />
      <Button className="add-to-cart" role="button" onClick={handleAddToCart}>
        <IoBasketOutline size="1.8rem" />
        <span className="label">Añadir a la cesta</span>
      </Button>
    </ProductCardStyled>
  );
};

export default ProductCard;
