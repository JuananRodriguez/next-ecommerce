import styled from "styled-components";

export const ProductReactionsWrapper = styled.ul`
  display: inline-flex;
  padding-top: 0.75rem;
  padding-bottom: 0.5rem;

  & li:not(:last-child) {
    margin-right: 5px;
  }

  & li:not(:first-child) {
    margin-left: 5px;
  }

  .wishlist-icon {
    margin: -9px;
  }
`;
