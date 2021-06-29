import { ProductCardList } from "@components";
import { getApiPath } from "utils/getApiPath";
import { ProductList } from "@domainTypes/Product";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { useState } from "react";

type Props = {
  data: ProductList;
};
const EntryPoint = ({ data }: Props) => {
  const [products, setProducts] = useState(data);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "200px",
      threshold: 0,
      trackVisibility: true,
      delay: 100,
    };

    if(!isFetching){
    const getProducts = async (): Promise<void> => {
      setIsFetching(true);
      
      const url = getApiPath({ dirname: __dirname, url: "products" });
      const res = await fetch(`${url}?offset=${products.length}`);
      const data = await res.json();

      setProducts((products) => [...products, ...data]);
      setIsFetching(false);
    };

    let observer = new IntersectionObserver(
      (e) => {e[0]?.isIntersecting && getProducts()},
      options
    );

    const nodeToObserve = document.querySelector("#end-of-product-list");
    nodeToObserve && observer.observe(nodeToObserve);

    return ()=>observer.disconnect();
    }
  }, [products, isFetching]);

  return (
    <>
      <ProductCardList products={products} />
      <div id="end-of-product-list" />
    </>
  );
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
