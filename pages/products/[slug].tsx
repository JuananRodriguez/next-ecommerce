import fetch from "isomorphic-unfetch";
import { getApiPath } from "utils/getApiPath";
import { NextApiRequest, GetServerSideProps } from "next";
import ProductView from "components/ProductView";
import { Product } from "@domainTypes/Product";

const ProductPage = ({ data }: { data: Product }) => {
  return <ProductView {...data} />;
};

//   export const getStaticProps = async (context) => {
//     const { slug } = context.params;
//     let response = await fetchFromWoocommerce('https://www.pimpampumjoyas.es/wp-json/wc/v1/products', { slug });
//     const products = await response.json();
//     return {
//       props: { data: products[0] },
//       revalidate: 10,
//     };
//   };

//   export const getStaticPaths = async () => {
//     //TODO: loop after create all product pages
//     let response = await fetchFromWoocommerce('https://www.pimpampumjoyas.es/wp-json/wc/v1/products', { per_page: 100 });
//     const products = await response.json();
//     const paths = products.map(({ slug }) => `/products/${slug}`);
//     return { paths, fallback: false };
//   };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resolvedUrl } = context;
  const url = getApiPath(resolvedUrl);
  const res = await fetch(url);
  const [data] = await res.json();
  return {
    props: { data },
  };
};

export default ProductPage;
