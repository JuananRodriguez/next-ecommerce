type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => {
  return <main>{children}</main>;
};

export default Layout;
