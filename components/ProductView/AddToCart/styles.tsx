import styled from "styled-components";

export const AddedToCartLabelStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .label {
    margin-left: 0.5rem;
    color: rgb(126, 211, 33);
  }
`;

export const AddToCartStyles = styled.div`
  & .price-block {
    font-size: 1.125rem;
    line-height: 1.25rem;
    display: flex;
    justify-content: space-between;
  }

  & .cart-button {
    width: 100%;
    margin-top: 1rem;
  }
`;
