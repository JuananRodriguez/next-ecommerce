import { useCart } from "storage/Cart";

const Cart = () => {
  const { items } = useCart();
  return <p>you are in wishlist</p>;
};

export default Cart;
