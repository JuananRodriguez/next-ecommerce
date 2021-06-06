import { Header, Footer, Layout, ResetStyle } from "@components";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <ResetStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
};

export default MyApp;
