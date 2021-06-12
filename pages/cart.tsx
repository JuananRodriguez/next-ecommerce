import { useCart } from "storage/Cart";
import { ProductCartList } from "@components";

const Cart = () => {
  const { items } = useCart();
  return <ProductCartList products={items} />;
};

export default Cart;
