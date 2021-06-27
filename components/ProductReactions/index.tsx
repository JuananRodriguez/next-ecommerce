import { ProductReactionsWrapper } from "./styles";
import { useWishlist, useWishlistMutations } from "storage/Wishlist";
import { Product } from "@domainTypes/Product";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoShareSocialOutline,
} from "react-icons/io5";
import { getBaseUrl } from "utils/getBaseUrl";
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

  const handleShareProduct = () => {
    const { name, slug, description } = product;
    console.log(product);
    return navigator
      .share({
        url: `${getBaseUrl()}product/${slug}`,
        title: name,
        text: "Me encata compartir esto contigo!!",
      })
      .catch((err) => console.log(err));
  };

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
