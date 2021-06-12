import fetch from "isomorphic-unfetch";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return fetch(`https://60c4003c2df2cb00178ac0dd.mockapi.io/api/v1/products`)
    .then((response) => response.json())
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ error: error }));
}
