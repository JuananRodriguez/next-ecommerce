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
  const { name, id, slug, price, images } = product;
  const url = `/products/${slug}`;
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
            width="400"
            height="400"
            alt={name}
            priority={true}
            // placeholder="blur"
            // blurDataURL={
            //   "https://www.pimpampumjoyas.es/wp-content/uploads/2021/05/814AAB45-4282-49A8-9423-8B942DB3A1D4.jpeg"
            // }
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
