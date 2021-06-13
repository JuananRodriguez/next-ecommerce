import { ProductCardList } from "@components";
import { getApiPath } from "utils/getApiPath";
import { ProductList } from "@domainTypes/Product";
import { GetStaticProps } from "next";

type Props = {
  data: ProductList;
};
const EntryPoint = ({ data }: Props) => {
  return <ProductCardList products={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const url = getApiPath({ dirname: __dirname, url: "products" });
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { data },
    revalidate: 600,
  };
};

export default EntryPoint;
