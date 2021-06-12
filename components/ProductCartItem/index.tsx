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
  const { title, id, price, image, quantity } = product;
  const url = `/products/${id}`;
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
            src={image}
            width="150"
            height="150"
            alt={title}
            priority={true}
          />
        </a>
      </Link>
      <div className="info">
        <Link href={url} passHref>
          <a>
            <h3 className="name">
              <strong>{title}</strong>
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
