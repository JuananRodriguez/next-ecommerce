import { ProductCardList } from "@components";
import { getApiPath } from "utils/getApiPath";
import { NextApiRequest, GetServerSideProps } from "next";
import { ProductList } from "@domainTypes/Product";

type Props = {
  data: ProductList;
};
const EntryPoint = ({ data }: Props) => {
  return <ProductCardList products={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resolvedUrl } = context;
  const url = getApiPath(resolvedUrl);
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
};

export default EntryPoint;
