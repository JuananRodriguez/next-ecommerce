import { ProductVariations, ProductVariant } from "types/Product";
import { Variantionstyle } from "./styles";
import Variant from "./Variant";

type Props = {
  variantSelected: ProductVariant;
  variations?: ProductVariations;
  onSelectVariation: (v: ProductVariant) => void;
};

const Variantions = (props: Props) => {
  const { variations, onSelectVariation, variantSelected } = props;
  if (variations && variations.length > 0)
    return (
      <Variantionstyle>
        {variations.map((data) => (
          <Variant
            key={data.id}
            productVariant={data}
            onSelectVariation={onSelectVariation}
            isSelected={variantSelected === data}
          />
        ))}
      </Variantionstyle>
    );
  return null;
};

export default Variantions;
