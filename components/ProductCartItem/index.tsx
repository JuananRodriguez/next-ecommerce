import { ProductInCart } from "@domainTypes/Product";
import { ProductCartItemStyle } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
import { useCartMutations } from "@storage/Cart";
import { Counter } from "@components";

interface Props {
  product: ProductInCart;
}

const ProductCartItem = ({ product }: Props) => {
  const { name, id, slug, price, images, quantity } = product;
  const url = `/products/${slug}`;
  const [firstImage] = images;

  const { addToCart, removeFromCart, decreaseFromCart } = useCartMutations();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDreacreInCart = () => {
    decreaseFromCart(product);
  };

  return (
    <ProductCartItemStyle>
      <Link href={url} passHref>
        <a>
          <Image
            className="image"
            src={firstImage.src}
            width="150"
            height="150"
            alt={name}
            priority={true}
          />
        </a>
      </Link>
      <div className="info">
        <Link href={url} passHref>
          <a>
            <h3 className="name">
              <strong>{name}</strong>
            </h3>
          </a>
        </Link>
        <div className="price">{price} €</div>
        <Counter
          value={quantity}
          onIncrease={handleAddToCart}
          onDecrease={handleDreacreInCart}
        />
      </div>
      <div>
        <IoTrashOutline size="1.4rem" onClick={handleRemoveFromCart} />
      </div>
    </ProductCartItemStyle>
  );
};

export default ProductCartItem;
