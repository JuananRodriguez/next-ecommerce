type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <div>
      <p>Layout</p>
      {children}
    </div>
  );
};

export default Layout;
