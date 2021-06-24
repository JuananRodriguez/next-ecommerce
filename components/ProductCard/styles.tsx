import styled from "styled-components";
import { ProductReactionsWrapper } from "../ProductReactions/styles";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;

  & .name,
  & .price,
  & .add-to-cart,
  & ${ProductReactionsWrapper} {
    font-size: 1.2rem;
  }

  & .name,
  & .price,
  & .add-to-cart,
  & ${ProductReactionsWrapper} {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

    @media (min-width: 480px) {
      font-size: 1.6rem;
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  & .name {
    color: #333;
    font-weight: 600;
  }

  & > .add-to-cart {
    margin-bottom: 20px;
    & > .label {
      margin-left: 0.25rem;
    }
  }
`;
