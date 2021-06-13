import { fetchFromWoocommerce } from "fetchFromWoocommerce";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return fetchFromWoocommerce(
    "https://www.pimpampumjoyas.es/wp-json/wc/v1/products",
    { per_page: 20 }
  )
    .then((response) => response.json())
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error }));
}
