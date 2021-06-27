import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { useWishlist, useWishlistMutations } from "storage/Wishlist";
import { Product } from "@domainTypes/Product";

type Props = { product: Product };

export const WishListIcon = ({ product }: Props) => {
  const { addToWishlist, removeFromWishlist } = useWishlistMutations();
  const { itemsById } = useWishlist();
  const isInWishlist = Boolean(itemsById[product.id]);

  const handleAddToWishList = () => {
    addToWishlist(product);
  };

  const handleRemoveFromWishList = () => {
    removeFromWishlist(product);
  };

  const refContainer = useRef<HTMLDivElement | null>(null);
  const refAnimation = useRef<AnimationItem | null>(null);

  const handleToggle = () => {
    refAnimation.current?.setDirection(isInWishlist ? -1 : 1);
    refAnimation.current?.play();
    isInWishlist ? handleRemoveFromWishList() : handleAddToWishList();
  };

  useEffect(() => {
    if (refContainer?.current) {
      refAnimation.current = lottie.loadAnimation({
        container: refContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/lotties/heart.json",
      });
      refAnimation.current.setSpeed(2);

      if (isInWishlist) {
        refAnimation.current.goToAndStop(60, true);
      }

      return () => refAnimation.current?.destroy();
    }
  }, []);

  return (
    <div
      className="wishlist-icon"
      style={{ height: 50, width: 50 }}
      ref={refContainer}
      onClick={handleToggle}
    />
  );
};
