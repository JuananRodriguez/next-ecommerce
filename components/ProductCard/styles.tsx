import styled from "styled-components";

export const ProductCardStyled = styled.div`
  & img {
    border: 1px solid gray;
    border-radius: 12px;
  }

  & > h3.name {
    margin-top: 10px;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  & > .price {
    font-size: 1rem;
  }
`;
