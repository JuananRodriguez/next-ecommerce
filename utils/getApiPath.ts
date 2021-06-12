import { NextApiRequest } from "next";

export const getApiPath = (req: NextApiRequest): string => {
  const {
    headers: { host, referer },
  } = req;

  return referer?.replace(host as string, `${host}/api`) || "";
};
