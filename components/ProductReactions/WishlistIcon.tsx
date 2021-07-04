import { useWishlist, useWishlistMutations } from "storage/Wishlist";
import { Product } from "@domainTypes/Product";
import { useAnimation } from "hooks/useAnimation";
import { useEffect } from "react";

type Props = { product: Product };

export const WishListIcon = ({ product }: Props) => {
  const [AnimationComponent, lottieAnimation] = useAnimation({
    speed: 3,
    autoplay: false,
    path: "/lotties/heart.json",
  });

  const { addToWishlist, removeFromWishlist } = useWishlistMutations();
  const { itemsById } = useWishlist();
  const isInWishlist = Boolean(itemsById[product.id]);

  useEffect(() => {
    if (lottieAnimation && isInWishlist) {
      lottieAnimation.goToAndStop(60, true);
    }
  }, [lottieAnimation]);

  const handleAddToWishList = () => {
    addToWishlist(product);
  };

  const handleRemoveFromWishList = () => {
    removeFromWishlist(product);
  };

  const handleToggle = () => {
    lottieAnimation?.setDirection(isInWishlist ? -1 : 1);
    lottieAnimation?.play();
    isInWishlist ? handleRemoveFromWishList() : handleAddToWishList();
  };

  return (
    <AnimationComponent
      className="wishlist-icon"
      style={{ height: 50, width: 50 }}
      onClick={handleToggle}
    />
  );
};
