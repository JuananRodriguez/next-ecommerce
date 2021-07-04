import { Header, Footer, Layout, ResetStyle, FullLoading } from "@components";
import { AppProps } from "next/app";
import CartProvider from "@storage/Cart";
import WishListProvider from "@storage/Wishlist";
import "../styles.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <ResetStyle />
      <CartProvider>
        <WishListProvider>
          <FullLoading />
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </WishListProvider>
      </CartProvider>
    </>
  );
};

export default MyApp;
