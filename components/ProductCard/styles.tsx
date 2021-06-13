import styled from "styled-components";
import { ProductReactionsWrapper } from "../ProductReactions/styles";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    min-width: 100%;

    @media (min-width: 480px) {
      border-radius: 15px;
    }
  }

  & img {
    object-fit: cover;
  }

  & .name,
  & .price,
  & ${ProductReactionsWrapper} {
    font-size: 1.2rem;
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
    font-weight: 600;
  }

  & > .add-to-cart {
    margin-bottom: 20px;
    & > .label{
      margin-left: 0.25rem;
    }
  }
`;
