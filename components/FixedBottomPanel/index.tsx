import { FixedBottomPanelStyle } from "./styles";

type Props = {
  children: React.ReactElement;
  className?: string;
};
const FixedBottomPanel = ({ children, className = "" }: Props) => {
  return (
    <FixedBottomPanelStyle className={className}>
      {children}
    </FixedBottomPanelStyle>
  );
};

export default FixedBottomPanel;
