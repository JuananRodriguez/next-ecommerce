import { Header, Footer, Layout, ResetStyle, FullLoading } from "@components";
import { AppProps } from "next/app";
import CartProvider from "storage/Cart";
import "../styles.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <ResetStyle />
      <CartProvider>
        <FullLoading />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </CartProvider>
    </>
  );
};

export default MyApp;
