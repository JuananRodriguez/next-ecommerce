import { useCart } from "storage/Cart";

const Header = (): React.ReactElement => {
  const { count } = useCart();

  return (
    <header>
      <p>{count}</p>
    </header>
  );
};

export default Header;
