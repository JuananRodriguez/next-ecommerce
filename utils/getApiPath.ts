type Params = {
  dirname: string;
  url?: string;
};
export const getApiPath = ({ dirname, url = "" }: Params): string => {
  const route = dirname.split("pages").pop();
  const lastChar = dirname[dirname.length - 1];
  const resolvedUrl = lastChar !== "/" ? `${route}/${url}` : `${route}${url}`;

  const baseUrl =
    process.env.NODE_ENV !== "development"
      ? "https://next-ecommerce-beta-two.vercel.app/"
      : "http://localhost:3000/";

  return `${baseUrl}api${resolvedUrl}`;
};
