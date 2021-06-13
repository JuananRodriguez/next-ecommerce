import { ProductVariant } from "types/Product";
import { VariantStyle } from "./styles";
import Image from "next/image";

type Props = {
  productVariant: ProductVariant;
  isSelected: boolean;
  onSelectVariation: (v: ProductVariant) => void;
};

const Variant = (props: Props) => {
  const { productVariant, isSelected, onSelectVariation } = props;
  const { image } = productVariant;

  const handleSelect = () => {
    onSelectVariation(productVariant);
  };

  return (
    <VariantStyle isSelected={isSelected} onClick={handleSelect}>
      <Image src={image[0].src} width={50} height={50} />
    </VariantStyle>
  );
};

export default Variant;
