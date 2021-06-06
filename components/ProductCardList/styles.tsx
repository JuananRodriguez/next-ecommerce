import styled from "styled-components";
import { ProductCardStyled } from "../ProductCard/styles";

export const ProductCardListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > ${ProductCardStyled} {
    margin: 0.5rem;
  }
`;
