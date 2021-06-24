import fetch from "isomorphic-unfetch";
import { getApiPath } from "utils/getApiPath";
import { ProductView } from "@components";
import { Product } from "@domainTypes/Product";
import { GetStaticPropsContextWithParams } from "@domainTypes/Queries";

const ProductPage = ({ data }: { data: Product }) => {
  return <ProductView {...data} />;
};

export const getStaticProps = async (
  context: GetStaticPropsContextWithParams
) => {
  const {
    params: { slug },
  } = context;

  const url = getApiPath({ dirname: __dirname, url: slug });
  const res = await fetch(url);
  const [data] = await res.json();
  return {
    props: { data: data },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default ProductPage;
