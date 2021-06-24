import styled from "styled-components";
import { ProductCardStyled } from "../ProductCard/styles";

export const ProductCardListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: auto;

  & > ${ProductCardStyled} {
    margin: 0;
    width: 100%;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    flex: 1 1 350px;

    @media (min-width: 480px) {
      margin-right: 1.5rem;
      margin-left: 1.5rem;
    }
  }
`;
