import { useCart } from "storage/Cart";

const Cart = () => {
  const { items } = useCart();
  console.log(items);

  return <p>you are in cart</p>;
};

export default Cart;
