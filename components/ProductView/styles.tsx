import styled from "styled-components";

export const ProductViewStyled = styled.div`

  & .content {
    padding: 1rem;

    & .name,
    & .price {
      font-size: 1.4rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    & .name {
      color: #707070;
      font-weight: bold;
    }

    & .counter {
        margin-top: 0.5rem;
        margin-left: 3px;
    }
  }
`;
