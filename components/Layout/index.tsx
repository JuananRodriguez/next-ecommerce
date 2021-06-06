type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <main>
      <p>Layout</p>
      {children}
    </main>
  );
};

export default Layout;
