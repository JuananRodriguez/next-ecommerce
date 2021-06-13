import { CounterStyle, InputStyle } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface Props {
  value?: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange?: (e: React.ChangeEvent) => void;
}

function Counter({
  value = 0,
  onIncrease,
  onDecrease,
  onChange = () => {},
}: Props) {
  return (
    <CounterStyle>
      <button onClick={onDecrease}>
        <AiOutlineMinus size="1.4rem" />
      </button>
      <InputStyle>
        <input value={value} type="number" onChange={onChange} />
      </InputStyle>
      <button onClick={onIncrease}>
        <AiOutlinePlus size="1.4rem" />
      </button>
    </CounterStyle>
  );
}

export default Counter;
