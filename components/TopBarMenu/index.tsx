import { TopBarStyle } from "./styles";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoHeartOutline, IoBasketOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "storage/Cart";
import { useWishlist } from "@storage/Wishlist";

const TopBarMenu = () => {
  const { count: productInCart } = useCart();
  const { count: productInWishList } = useWishlist();
  
  return (
    <TopBarStyle top>
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
            <span>{productInWishList}</span>
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a className="icon-and-count">
            <IoBasketOutline size="1.4rem" />
            <span>{productInCart}</span>
          </a>
        </Link>
      </div>
    </TopBarStyle>
  );
};

export default TopBarMenu;
