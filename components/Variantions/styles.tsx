import styled from "styled-components";
import { VariantStyle } from "./Variant/styles";

export const Variantionstyle = styled.div`
  display: flex;

  & ${VariantStyle} {
    &:not(:first-child) {
      margin-left: 0.25rem;
    }
    &:not(:last-child) {
      margin-right: 0.25rem;
    }
  }
`;
