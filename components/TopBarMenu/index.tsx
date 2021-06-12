import { TopBarStyle } from "./styles";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoHeartOutline, IoBasketOutline } from "react-icons/io5";
import { useCart } from "storage/Cart";

const TopBarMenu = () => {
  const { count } = useCart();
  return (
    <TopBarStyle>
      <HiOutlineMenuAlt1 size="1.8rem" />
      <div className="logotype">PIMPAMPUM</div>
      <div className="checkout">
        <div className="icon-and-count">
          <IoHeartOutline size="1.4rem" />
          <span>{count}</span>
        </div>
        <div className="icon-and-count">
          <IoBasketOutline size="1.4rem" />
          <span>{count}</span>
        </div>
      </div>
    </TopBarStyle>
  );
};

export default TopBarMenu;
