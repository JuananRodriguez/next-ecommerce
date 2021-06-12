export const getApiPath = (resolvedUrl: string): string => {
  const baseUrl =
    process.env.NODE_ENV !== "development"
      ? "https://next-ecommerce-beta-two.vercel.app/"
      : "http://localhost:3000/";

  return `${baseUrl}api${resolvedUrl}`;
};
