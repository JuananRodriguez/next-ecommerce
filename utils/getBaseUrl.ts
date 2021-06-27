export const getBaseUrl = (): String =>
  process.env.NODE_ENV !== "development"
    ? "https://next-ecommerce-beta-two.vercel.app/"
    : "http://localhost:3000/";
