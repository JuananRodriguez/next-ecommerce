import { ProductReactionsWrapper } from "./styles";
import { useWishlist, useWishlistMutations } from "storage/Wishlist";
import { Product } from "@domainTypes/Product";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoShareSocialOutline,
} from "react-icons/io5";
interface Props {
  product: Product;
}

const ProductReactions = ({ product }: Props) => {
  const { itemsById } = useWishlist();
  const { addToWishlist, removeFromWishlist } = useWishlistMutations();

  const handleAddToWishList = () => {
    addToWishlist(product);
  };

  const handleRemoveFromWishList = () => {
    removeFromWishlist(product);
  };

  const renderWishlistIcon = () => {
    const isInWishlist = Boolean(itemsById[product.id]);
    return isInWishlist ? (
      <IoHeartSharp onClick={handleRemoveFromWishList} size="1.8rem" />
    ) : (
      <IoHeartOutline onClick={handleAddToWishList} size="1.8rem" />
    );
  };

  const handleShareProduct = () =>
    navigator
      .share({
        url: window.location.href,
      })
      .catch((err) => console.log(err));

  return (
    <ProductReactionsWrapper>
      <li>{renderWishlistIcon()}</li>
      <li>
        <IoShareSocialOutline size="1.8rem" onClick={handleShareProduct} />
      </li>
    </ProductReactionsWrapper>
  );
};

export default ProductReactions;
