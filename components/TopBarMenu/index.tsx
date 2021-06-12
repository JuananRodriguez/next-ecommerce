import { TopBarStyle } from "./styles";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoHeartOutline, IoBasketOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "storage/Cart";

const TopBarMenu = () => {
  const { count } = useCart();
  return (
    <TopBarStyle>
      <div className="menu">
        <HiOutlineMenuAlt1 size="1.8rem" />
      </div>
      <div className="logotype">
        <Link href="/products" passHref>
          <a>PIMPAMPUM</a>
        </Link>
      </div>
      <div className="checkout">
        <Link href="/wishlist" passHref>
          <a className="icon-and-count">
            <IoHeartOutline size="1.4rem" />
            <span>{count}</span>
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a className="icon-and-count">
            <IoBasketOutline size="1.4rem" />
            <span>{count}</span>
          </a>
        </Link>
      </div>
    </TopBarStyle>
  );
};

export default TopBarMenu;
