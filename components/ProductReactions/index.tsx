import { ProductReactionsWrapper } from "./styles";
import { WishListIcon } from "./WishlistIcon";
import { Product } from "@domainTypes/Product";
import { IoShareSocialOutline } from "react-icons/io5";
import { getBaseUrl } from "utils/getBaseUrl";
interface Props {
  product: Product;
}

const ProductReactions = ({ product }: Props) => {
  const handleShareProduct = () => {
    const { name, slug } = product;
    console.log(product);
    return navigator
      .share({
        url: `${getBaseUrl()}products/${slug}`,
        title: name,
        text: "Me encata compartir esto contigo!!",
      })
      .catch((err) => console.log(err));
  };

  return (
    <ProductReactionsWrapper>
      <li>
        <WishListIcon product={product} />
      </li>
      <li>
        <IoShareSocialOutline size="1.8rem" onClick={handleShareProduct} />
      </li>
    </ProductReactionsWrapper>
  );
};

export default ProductReactions;
