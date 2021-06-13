import { ProductVariations } from "types/Product";
import { Variantionstyle } from "./styles";
import Variant from "./Variant";

type Props = {
  variations?: ProductVariations;
};

const Variantions = (props: Props) => {
  const { variations } = props;
  if (variations && variations.length > 0)
    return (
      <Variantionstyle>
        {variations.map((data) => (
          <Variant
            {...data}
            isSelected={data.attributes[0].option === "MARGARITA"}
          />
        ))}
      </Variantionstyle>
    );
  return null;
};

export default Variantions;
