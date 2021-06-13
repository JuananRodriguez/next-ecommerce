import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";

export interface Query {
  [key: string]: string | number;
}

interface ParsedUrlQueryWithSlug extends ParsedUrlQuery {
  slug: string;
}
export interface GetStaticPropsContextWithParams extends GetStaticPropsContext {
  params: ParsedUrlQueryWithSlug;
}