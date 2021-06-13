import { useCart } from "storage/Cart";
import { ProductCartList, ProductCartPreCheckout } from "@components";

const Cart = () => {
  const { items, subTotal } = useCart();
  return (
    <>
      <ProductCartList products={items} />
      <ProductCartPreCheckout subTotal={subTotal} />
    </>
  );
};

export default Cart;
