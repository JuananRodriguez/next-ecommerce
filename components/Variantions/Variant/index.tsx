import { Variant as VariantType } from "types/Product";
import { VariantStyle } from "./styles";
import Image from "next/image";

type Props = VariantType & { isSelected: boolean };

const Variant = (props: Props) => {
  const { image, isSelected } = props;
  return (
    <VariantStyle isSelected={isSelected}>
      <Image src={image[0].src} width={50} height={50} />
    </VariantStyle>
  );
};

export default Variant;
