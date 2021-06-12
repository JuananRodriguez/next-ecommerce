import styled from "styled-components";
import { ProductCardStyled } from "../ProductCard/styles";

export const ProductCardListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > ${ProductCardStyled} {
    margin: 0;
    width: 100%;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;

    @media (min-width: 480px) {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }
  }
`;
