import { MainStyle } from "./styles";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => {
  return <MainStyle>{children}</MainStyle>;
};

export default Layout;
