import { ProductReactionsWrapper } from "./styles";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoShareSocialOutline,
} from "react-icons/io5";
import { useState } from "react";

const ProductReactions = () => {
  //TODO: no simulate fake state
  const [isFav, setIsFav] = useState(false);

  const toogleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <ProductReactionsWrapper>
      <li>
        {isFav ? (
          <IoHeartSharp onClick={toogleFav} size="1.8rem" />
        ) : (
          <IoHeartOutline onClick={toogleFav} size="1.8rem" />
        )}
      </li>
      <li>
        <IoShareSocialOutline size="1.8rem" />
      </li>
    </ProductReactionsWrapper>
  );
};

export default ProductReactions;
