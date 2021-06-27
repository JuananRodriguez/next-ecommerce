import { getBaseUrl } from "./getBaseUrl";

type Params = {
  dirname: string;
  url?: string;
};
export const getApiPath = ({ dirname, url = "" }: Params): string => {
  const route = dirname.split("pages").pop();
  const lastChar = dirname[dirname.length - 1];
  const resolvedUrl = lastChar !== "/" ? `${route}/${url}` : `${route}${url}`;
  const baseUrl = getBaseUrl();
  return `${baseUrl}api${resolvedUrl}`;
};
