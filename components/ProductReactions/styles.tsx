import styled from "styled-components";

export const ProductReactionsWrapper = styled.ul`
  display: flex;

  & li:not(:last-child) {
    margin-right: 10px;
  }

  & li:not(:first-child) {
    margin-left: 10px;
  }
`;
