import { useCart } from "storage/Cart";

const Cart = () => {
  const { items } = useCart();
  console.log(items);

  return <p>you are in wishlist</p>;
};

export default Cart;
