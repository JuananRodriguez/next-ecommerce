type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <p>Layout</p>
      {children}
    </div>
  );
};

export default Layout;
