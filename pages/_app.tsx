import { Header, Footer, Layout } from "@components";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
};

export default MyApp;
