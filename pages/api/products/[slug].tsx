import { fetchFromWoocommerce } from "fetchFromWoocommerce";
import { NextApiRequest, NextApiResponse } from "next";
import { Query } from "@domainTypes/Queries";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;

  return fetchFromWoocommerce("/wc/v1/products", query as Query)
    .then((response) => response.json())
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error }));
}
