import Link from "next/link";
import { EmptyCartMessageStyle } from "./styles";

const EmptyCartMessage = () => {
  return (
    <EmptyCartMessageStyle>
      <span className="emoji">😢</span>
      <h2>Tu cesta aún está vacía</h2>
      <Link href="/products" passHref>
        <a>Iniciar compra</a>
      </Link>
    </EmptyCartMessageStyle>
  );
};

export default EmptyCartMessage;
