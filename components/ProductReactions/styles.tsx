import styled from "styled-components";

export const ProductReactionsWrapper = styled.ul`
  display: inline-flex;

  & li:not(:last-child) {
    margin-right: 5px;
  }

  & li:not(:first-child) {
    margin-left: 5px;
  }
`;
